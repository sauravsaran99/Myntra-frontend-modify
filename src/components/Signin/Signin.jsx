
import { Navbar } from '../Navbar/Navbar'
import  '../Signup/Signup.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

export const Signin = () => {

    const navigate = useNavigate();
    const userid = sessionStorage.getItem('userId');

    useEffect(() => {
        if(userid) {
            navigate('/')
        }
    }, [])
    const [errors, setErrors] = useState('')
    const [userData, setData] = useState({
        email: '',
        password: '',
    })
    const[spin, setSpin] = useState(false);

    const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({...userData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpin(true)
        axios.post('https://myntra-backend-2.onrender.com/login', userData).then((res) => {
            console.log('reslive', res)
        if(res.data.mess) {
            setSpin(false)
            return setErrors(res.data.mess)
        } else if(res.data.messa) {
            setSpin(false)
            return setErrors(res.data.messa)
        }  else if(res.data.id) {
            setSpin(false)
            sessionStorage.setItem('userId', res.data.id)
            navigate('/')
        } else {
            console.log('undefinedlive')
            setSpin(false)
            return setErrors("Either email or password is inccorect*")
        }
        }).catch((err) => {
            setSpin(false)
            console.log('error', err.message)
        })
    }
    return (
        <>
        <Navbar></Navbar>
        {spin && <Spinner />}
        <div className='mainparent'>
        <div className="parent">
            <div className="offerimage"></div>
            <div className="userform">
                <form onSubmit={handleSubmit}>
                    <label id='inputlabel'>Email</label>
                    <br />
                    <input onClick={() => setErrors('')}
                    name='email'
                    value={userData.email}
                    onChange={(e) => handleChange(e)}
                    id='inputbox' type="text" placeholder="Enter Email" />
                    <br />
                    <label id='inputlabel'>Password</label>
                    <br />
                    <input onClick={() => setErrors('')} id='inputbox' 
                    name='password'
                    value={userData.password}
                    onChange={(e) => handleChange(e)}
                    type="password" placeholder="Enter Password" />
                    <br />
                    <label className='lastlabel'>By continuing, I agree to the <span className='red'>Terms of Use</span>&<span className='red'>Privacy 
                    <br></br>Policy</span></label>
                    <br />
                    {errors !== ''?<h5>*{errors}</h5>:''}
                    <button className="buttonsignup">Signin</button>
                    <label className='lastlabel'>Not  have account? <span className='red' onClick={() => navigate('/signup')}> 
                    Signup</span></label>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}