
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../Cart/Cart.css'
import { Cartthunk } from "../Redux/Action/Cart";
import { Second } from "../Product/Productsecond/Second/Second";
import axios from "axios";

export const Address  = () => {
    
    const dispatch = useDispatch();
    const cartData = useSelector(store => store.cart.cart);
    const [idup, getId] = useState(-1);
    const userid = sessionStorage.getItem('userId');
    
    const [quanPage, onQuanpage] = useState('quanpagedis')
    const [data, getCartData] = useState(cartData);
    const [updateQuan, sendUPd] = useState({
        quantity: null,
    })

    const [userAddress, setAddress] = useState({
        mobile:'',
        pin:'',
        address:'',
        town: '',
        city: '',
        state: '',
        userid: userid,
    })

    const [add, getAdd] = useState([])

    const updateForm = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setAddress({...userAddress, [name]: value})
    }

    const sendForm = (e) => {
        e.preventDefault();
        console.log(userAddress)
        axios.post('https://fathomless-lowlands-62517.herokuapp.com/address', userAddress).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log('error', err)
        })
        console.log('form', userAddress);
        setAddress({
            mobile:'',
            pin:'',
            address:'',
            town: '',
            city: '',
            state: '',
            userid: userid
        })

        axios.get('https://fathomless-lowlands-62517.herokuapp.com/address').then((res) => {
            res.data = res.data.filter((e) => {
                return e.userid === userid
            })
            getAdd(res.data)
        })
    }

    useEffect(() => {
        axios.get('https://fathomless-lowlands-62517.herokuapp.com/address').then((res) => {
            res.data = res.data.filter((e) => e.userid === userid)
            getAdd(res.data)
        })
    }, [])

    useEffect(() => {
        dispatch(Cartthunk(userid));
    }, [quanPage]);

    useEffect(() => {
        getCartData(cartData)
    }, [cartData]);
   
    const navigate = useNavigate()
    
console.log('saukr', data)

    const quantityFun = (id) => {
        getId(id);

        if(quanPage === 'quanpagedis') {
            onQuanpage('quanPagess')
        } else {
            onQuanpage('quanpagedis')
        }
    }

    const handleToken = (token, addresses) => {
        navigate("/thankyou");
      };
    

    // console.log(add)

    let disPrice = 0;
    let mainPrice = 0;

    for(let i = 0; i <= data.length -1; i++) {
        disPrice += data[i].dprice*data[i].quantity;
        mainPrice += data[i].strike*data[i].quantity;
    }

    return (
        <>
        <div className="cartpage">
        <div className="cartFirst">
        <div className="firsttwo">
                <Link to='/'>
                <img src="https://im.indiatimes.in/content/2021/Jan/4a985efe47b423013443845a31f48dce_60154982add11.jpg?w=725&h=543" alt="logo" width="50px" height=""/></Link>
            </div>
            <div className="cartmiddle">
            <ul className="checkout-steps"> <li className="step step2 active">BAG</li> 
             <li className="step devide step1 active"></li> 
            <li className="step step1">ADDRESS</li> 
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
                <div className="productfirst1">
                    <h3>Select Delivery Address</h3>
                    <button onClick={quantityFun} className="addaddress">ADD NEW ADDRESS</button>
                </div>
        {add.map((e) => {
            return <div className="detailsaddress">

                <div>{e.address}</div>
                <div>Mobile: {e.mobile}</div>
                <div>Pay on Delivery not available</div>
            </div>
        })}
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

{/* <button >
    PLACE ORDER
</button> */}
<div className="paywithcard">
<StripeCheckout className="stripe"
                stripeKey="pk_test_51KyudJSHhNNVrw8uK9p2vdN33CVg69y3bdz0GtyGRDMRwP57fi9aw4rRUJvZCWbxlCJLMlO6iXmkRu6iZ7Jb7IoT00cGBZ84iY"
                token={handleToken}
                billingAddress
                shippingAddress
              >
            
           
              </StripeCheckout>

</div>
            </div>
        </div>
        </div>
        <Second></Second>
        <div className={quanPage}>
        <h3 className="firstvan">ADD NEW ADDRESS<span className="cross" onClick={quantityFun}>X</span></h3>
        <div className="prodiffquantiy">
            <form onSubmit={sendForm}>
            <label>Mobile No*</label>
            <br />
            <input value={userAddress.mobile} onChange={(e) => updateForm(e)} placeholder="Mobile No*" type="number" name="mobile" id="" />
                <br/>
                <label>Pin Code*</label>
                <br/>
                <input value={userAddress.pin} onChange={(e) => updateForm(e)} placeholder="Pin Code*" type="number" name="pin" id="" />
                <br/>
                <label>Address (House No, Building, Street, Area)*</label>
                <br/>
                <input value={userAddress.address} onChange={(e) => updateForm(e)} placeholder="Address (House No, Building, Street, Area)*" type="text" name="address" id="" />
                <br/>
            <label >Locality / Town*</label>
            <br/>
            <input value={userAddress.town}  onChange={(e) => updateForm(e)} placeholder="Locality / Town*" type="text" name="town" id="" />
            <br/>
            <label >City / District*</label>
            <br/>
            <input value={userAddress.city} onChange={(e) => updateForm(e)} placeholder="City / District*" type="text" name="city" id="" />
            <br/>
            <label >State*</label>
            <br/>
            <input alue={userAddress.state} onChange={(e) => updateForm(e)} placeholder="State*" type="text" name="state" id="" />
            <br/>
            <div className="donemain">
        <button className="done">DONE</button>
        </div>
            </form>
        </div>
        </div>
        </>
    )
}