
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../Cart/Cart.css'
import { Cartthunk } from "../Redux/Action/Cart";
import { Second } from "../Product/Productsecond/Second/Second";
import axios from "axios";
import  {useNavigate} from "react-router-dom";

export const Cart  = () => {
    
    const navigate = useNavigate()
    const id = sessionStorage.getItem('userId')
    
    useEffect(() => {
        if(!id) {
            return navigate('/signin')
        }
    }, [])

    const dispatch = useDispatch();
    const cartData = useSelector(store => store.cart.cart);
    const [idup, getId] = useState(-1);

    const [quanPage, onQuanpage] = useState('quanpagedis')
    const [data, getCartData] = useState(cartData);
    const [updateQuan, sendUPd] = useState({
        quantity: null,
    })

    useEffect(() => {
        dispatch(Cartthunk(id));
    }, [quanPage, idup]);

    useEffect(() => {
        console.log('cart', cartData)
        getCartData(cartData)
    }, [cartData, quanPage, idup]);
   
    

    const patchFun = () => {
        axios.patch(`https://myntraclone2222.herokuapp.com/cart/${idup}`, updateQuan).then((res) => {
        })

        dispatch(Cartthunk(id));
        if(quanPage === 'quanpagedis') {
            onQuanpage('quanPage')
        } else {
            onQuanpage('quanpagedis')
        }
    }

    const quantityFun = (id) => {
        getId(id);

        if(quanPage === 'quanpagedis') {
            onQuanpage('quanPage')
        } else {
            onQuanpage('quanpagedis')
        }
    }

    const deleteFun = (id) => {
        axios.delete(`https://myntraclone2222.herokuapp.com/cart/${id}`).then((res) => {
            dispatch(Cartthunk(id));
            getId(id)
        // onQuanpage('quanpagedis');
        })
    }

    let disPrice = 0;
    let mainPrice = 0;

    for(let i = 0; i <= data.length -1; i++) {
        disPrice += data[i].dprice*data[i].quantity;
        mainPrice += data[i].strike*data[i].quantity;
    }


    console.log('data',cartData)
    return (
        <>
        <div className="cartpage">
        <div className="cartFirst">
        <div className="firsttwo">
                <Link to='/'>
                <img src="https://im.indiatimes.in/content/2021/Jan/4a985efe47b423013443845a31f48dce_60154982add11.jpg?w=725&h=543" alt="logo" width="50px" height=""/></Link>
            </div>
            <div className="cartmiddle">
            <ul className="checkout-steps"> <li className="step step1 active">BAG</li> 
             <li className="step devide step1 active"></li> 
            <li className="step step2">ADDRESS</li> 
            <li className="step devide step1 active"></li> 
            <li className="step step3">PAYMENT</li> 
            </ul>
            </div>
            <div className="cartlast">
                <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="secoure" width="26px" height="28px" />
                <span>100% SECURE</span>
            </div>
        </div>

        <div className="cartsecond">
            <div className="secondfirst">
                <div className="cartfirst1"></div>
                <div className="cartfirst2"></div>
                <div className="cartfirst3">
                    {data.map((e) => {
                        return <div key={e.id} className="cartdatacl">
                            <div className="dataimg">
                                <img src={e.imgsrc} alt={e.productdec} />
                            </div>
                            <div>
                                <h3>{e.brand}</h3>
                                <div>{e.productdec}</div>
                                <div>Size: { e.size}</div>
                                <button className="remove" onClick={() => quantityFun(e._id)}>Qty: { e.quantity}</button>
                                <button className="remove" onClick={() => deleteFun(e._id)}>Remove</button>
                                <div><span>Rs.{e.dprice} </span><span><s>Rs.{e.strike} </s></span> <span> {e.dper}%OFF</span>
                            </div>
                            </div>
                            
                            </div>
                    })}
                </div>
            </div>
            <div className="secondsecond">

<div className="payfirst">
<div>COUPONS</div>
<div className="coupan">
    <div>Apply Coupons</div>
    <button className="appbutt">APPLY</button>
</div>
</div>

<div className="paysecond">
    <div>GIFTING & PERSONALISATION</div>
    <div className="boxcarcoup"> 
        <div className="imgcoupon">
            <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="coupon"/>
        </div>
        <div className="nextcoupon">
            <h4>Buying for a loved one?</h4>
            <div>Gift wrap and personalised message on card, Only for ₹25</div>
            <div className="addgift">ADD GIFT WRAP</div>
        </div>
    </div>
</div>
<div className="paythird">
<div className="pricedetails">PRICE DETAILS</div>
<div className="totalmrp">
    <div>Total MRP</div>
    <div>₹{disPrice}</div>
</div>

<div className="totalmrp">
    <div>Discount on MRP</div>
    <div className="lastgreen">-₹{mainPrice-disPrice}</div>
</div>

<div className="totalmrp">
    <div>Convenience Fee</div>
    <div className="lastgreen"><s>₹ 99 </s> FREE</div>
</div>
</div>

<div className="totalmrp" id="totalamo">
    <div>Total Amount</div>
    <div>₹{disPrice}</div>
</div>

<Link to='/address'>
<button className="placebutton">
    PLACE ORDER
</button>
</Link>










            </div>
        </div>
        </div>
        <Second></Second>
        <div className={quanPage}>
        <h3 className="firstvan">Select Quantiy<span className="cross" onClick={quantityFun}>X</span></h3>
        <div className="diffquantiy">
            <button onClick={() => sendUPd({quantity: 1})} className="buttongrid">1</button>
            <button onClick={() => sendUPd({quantity: 2})} className="buttongrid">2</button>
            <button onClick={() => sendUPd({quantity: 3})} className="buttongrid">3</button>
            <button onClick={() => sendUPd({quantity: 4})} className="buttongrid">4</button>
            <button onClick={() => sendUPd({quantity: 5})} className="buttongrid">5</button>
            <button onClick={() => sendUPd({quantity: 6})} className="buttongrid">6</button>
            <button onClick={() => sendUPd({quantity: 7})} className="buttongrid">7</button>
            <button onClick={() => sendUPd({quantity: 8})} className="buttongrid">8</button>
            <button onClick={() => sendUPd({quantity: 9})} className="buttongrid">9</button>
            <button onClick={() => sendUPd({quantity: 10})} className="buttongrid">10</button>
        </div>
        <div className="donemain">
        <button onClick={patchFun} className="done">DONE</button>
        </div>
        </div>
        </>
    )
}