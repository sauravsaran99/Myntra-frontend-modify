
import { Navbar } from '../Navbar/Navbar';
import './Thankyou.css';
import { Cartthunk } from '../Redux/Action/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Thankyou = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(Cartthunk('0'));
    })


    return (
        <>
        <Navbar></Navbar>
        <div className="thankyou">
            <img src="https://sitechecker.pro/wp-content/uploads/2018/02/Knowledge-base-part-3_seo-strategy-copy.jpg" width="100%" height="100%" alt="thankyou"/>
        </div>
        </>
    )
}