
import "../Navbar/Navbar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Cartthunk } from "../Redux/Action/Cart";
import { useNavigate } from "react-router-dom"

export const Navbar = (props) => {
console.log('props', props)
    const navigate = useNavigate()
    // console.log('saur', props.cartcount)
    // const [onhov, setHov] = useState(false);
    
    // onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
    // c
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart.cart);
    const idLo = sessionStorage.getItem("userId");
    console.log('idlo', idLo)
    
    console.log('cart', cart)
    const [count, setCount] = useState(cart.length);

    useEffect(() => {
        dispatch(Cartthunk(idLo));
    }, [dispatch]);

    console.log('cartdat', cart)
    useEffect(() => {
        setCount(cart.length)
    }, [dispatch,cart]);

    

    return (
        <>
        <div className="navbar">
            <div className="first">
                <Link to='/'>
                <img src="https://im.indiatimes.in/content/2021/Jan/4a985efe47b423013443845a31f48dce_60154982add11.jpg?w=725&h=543" alt="logo" width="35%" height="50%"/></Link>
            </div>
            <div className="second">
                <ul className="mobileres">
                    <Link to='/product/men'><li >MEN</li></Link>
                    <Link to='/product/women'><li >WOMEN</li></Link>
                    <li className="disable2">KIDS</li>
                    <li className="disable">HOME & LIVING</li>
                    <li className="disable2">BEAUTY</li>
                    <li className="disable">STUDIO <span className="new">NEW</span></li>
                </ul>
            </div>
            <div className="third">
                <div className="searchBox">
               
                </div>
                <input placeholder="Search for products, brands and more" className="desktop-searchBar"  data-reactid="902" />
            </div>
            <div className="forth">
                <div className="forth-box">
                    <span onClick={() => navigate('/signin')}>
                        <img src="https://www.pikpng.com/pngl/m/5-52254_png-file-user-profile-icon-svg-clipart.png" alt="profile" width="20px" height="20px"/>
                    </span>
                    <span>Profile</span>
                </div>
                <div className="forth-box">
                <span>
                <img src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png" alt="profile" width="20px" height="20px"/>
                </span>
                    <span>Wishlist</span>
                </div>
                <Link to="/cart">
                    
                <div className="forth-box">
                {count !== 0 ? <div className="cartcount">{count}</div>: ''}
                <span>
                <img src="https://www.clipartmax.com/png/middle/234-2348211_png-file-svg-shopping-bag-icon-png.png" alt="profile" width="20px" height="20px"/>
                </span>
                
                <span>Bag</span>
                    
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}