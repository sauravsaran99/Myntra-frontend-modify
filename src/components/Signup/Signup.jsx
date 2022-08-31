
import { Navbar } from '../Navbar/Navbar'
import  './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
export const Signup = () => {

    const navigate = useNavigate();
    const [userData, setData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState('')

    const userid = sessionStorage.getItem('userId');

    useEffect(() => {
        if(userid) {
            navigate('/')
        }
    }, [])

    const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({...userData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://myntraclone2222.herokuapp.com/register', userData).then((res) => {
        if(res.data.errors) {
            console.log(res.data.errors[0].msg)
            return setErrors(res.data.errors[0].msg)
        } else {
            navigate('/signin')
        }
        }).catch((err) => {
            console.log('error', err.message)
        })
    }
    return (
        <>
        <Navbar></Navbar>
        <div className='mainparent'>
        <div className="parent">
            <div className="offerimage"></div>
            <div className="userform">
                <form onSubmit={handleSubmit}>
                    <label id='inputlabel'>Username</label>
                    <br />
                    <input id='inputbox' type="text" placeholder="Enter Username" name='username' value={userData.username} onChange={(e) => handleChange(e)}/>
                    <br />
                    <label id='inputlabel'>Email</label>
                    <br />
                    <input id='inputbox' type="text" 
                    name='email'
                    value={userData.email}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Email" />
                    <br />
                    <label id='inputlabel'>Password</label>
                    <br />
                    <input id='inputbox' 
                    name='password'
                    value={userData.password}
                    type="password" 
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Password" />
                    <br />
                    <label className='lastlabel'>By continuing, I agree to the <span className='red'>Terms of Use</span>&<span className='red'>Privacy 
                    <br></br>Policy</span></label>
                    <br />
                    {errors !== ''? <h5>*{errors}</h5>:''}
                    <button className="buttonsignup">Signup</button>
                    <label className='lastlabel'>Already have account? <span className='red' onClick={() => navigate('/signin')}> 
                    Signin</span></label>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}