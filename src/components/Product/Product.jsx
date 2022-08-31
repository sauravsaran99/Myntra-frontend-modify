
import { Productsecond } from "./Productsecond/Productsecond"
import './Product.css';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react"
import { Productthunk } from "../Redux/Action/Product";
import { Navbar } from "../Navbar/Navbar";
import { Product } from "../Redux/Action/Product"
export const Productjsx = () => {
    const [selectData, getSelect] = useState({
        filterVal: '',
    })

    const dispatch = useDispatch();
    const data = useSelector(Store => Store.product.pdata);
    const [products, getProducts] = useState([]);
    useEffect(() => {
        dispatch(Productthunk());
    }, [])

    useEffect(() => {
        getProducts([...data]);
    }, [data]);

    const { gender } = useParams();

    const callingAgain = (e) => {
        getSelect(e.target.value);
    }

    useEffect(() => {
        
        if(selectData === 'HightoLow') {
            const dumydata = products.sort((a, b) => Number(b.dprice) - Number(a.dprice));
        // console.log(dumydata)
            dispatch(Product(dumydata))

        } else if(selectData === 'LowtoHigh') {
            const dumydata = products.sort((a, b) => Number(a.dprice) - Number(b.dprice));
        // console.log(dumydata)
            dispatch(Product(dumydata))
        } else if(selectData === 'Rating') {
            const dumydata = products.sort((a, b) => b.rating - a.rating);
            dispatch(Product(dumydata))
        } 
    }, [selectData])
    // console.log('cat',selectData)
    // console.log('data', data)
    return (
        <>
        <Navbar></Navbar>
        <div className="product">
        <div className="productfirst">
        <div className="firstclothing">Home / Clothing / <span className="boldspan">{gender=='men'?'Men T-shirts':'Kurtis For Women'}</span></div>
        <div className="secondclothing"><span className="boldspan">{gender=='men'?'T-shirts for Men':'Kurtis For Women'}</span>
 - {products.length} items</div>
 <div className="bottomFilter">
     <div className="filter"><span className="boldspan">FILTERS</span></div>
     <div className="bundlescounty">
         <div className="litlepadd">Bundles</div>
         <div className="litlepadd">Country of origin</div>
         <div className="litlepadd">size</div>
     </div>
     <div className="whatsnew">
     <select value={selectData.filterVal} onChange={callingAgain}>
    <option value="">What's New</option>
    <option value="HightoLow">Price: High to Low</option>
    <option value="LowtoHigh">Price: Low to High</option>
    <option value="Rating">Customer Rating</option>
  </select>
     </div>
 </div>
 </div>
        <Productsecond className="productsecond"/>
        </div>
        </>
    )
}