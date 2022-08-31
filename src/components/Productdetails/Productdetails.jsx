import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Productdetails/Productdetails.css";
import { Second } from "../Product/Productsecond/Second/Second";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navbar } from "../Navbar/Navbar";
import { Cartthunk } from "../Redux/Action/Cart";
// import "../Navbar/Navbar.css"
import { useSelector } from "react-redux";

export const Productdetails = () => {
    const dispatch = useDispatch();
    const cart = useSelector(store => store);
    const idLo = sessionStorage.getItem("userId");
    const navigate = useNavigate()
console.log("decart", cart)

  const { id } = useParams();

  console.log('mainid', id)
  const [selectSize, getSize] = useState({
    size: "",
    quantity: 1,
    userid: idLo
  });

  const [addClass, setClass] = useState("sizechild");
  const [data, getData] = useState({});
  const [ dataCart, setData ] = useState(cart)

  useEffect(() => {
    axios
      .get(`https://myntraclone2222.herokuapp.com/products/${id}`)
      .then((res) => {
        // console.log(res.data);
        dispatch(Cartthunk(idLo))
        getData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  useEffect(() => {
    setData(cart)
  }, [cart]);

  const addCart = () => {

    if(!idLo) {
      return navigate('/signin')
    } else {
      if (selectSize.size !== "") {
        axios
          .post(`https://myntraclone2222.herokuapp.com/cart`, { ...data, ...selectSize})
          .then((res) => {
            // console.log('res', res.data);
            dispatch(Cartthunk(idLo))
          });
      } else {
        setClass("redborder", );
      }
    }
    // console.log('s', selectSize)
    
  };

  const changeSize = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    getSize({...selectSize, [name]: value });
    setClass("sizechild");
  };

  console.log('cart', cart)
  return (
    <>
    <Navbar cartcount={dataCart.length}></Navbar>
      <div>
        <div className="productsDetails">
          <div className="detailsfirst">
            <div className="firstimgss img-hover-zoom">
              <img src={data.imgsrc} alt={data.category} />
            </div>
          </div>
          <div className="detailsseconds">
            <div className="firsthalf">
              <h2>{data.brand}</h2>
              <h3>{data.productdec}</h3>
              <div className="rating">
                <span>{data.rating} </span> |{" "}
                <span className="green">{data.ratingsCount} Ratings</span>
              </div>
            </div>
            <div className="secondhalf">
              <h2>
                <span>Rs. {data.dprice} </span>
                <span>
                  <s>Rs. {data.strike} </s>
                </span>
                <span className="orange"> ({data.dper}% OFF)</span>
              </h2>
              <p className="green grr2">inclusive of all taxes</p>
              <h4>SELECT SIZE</h4>
              <div className="size">
                {data.productsize ? (
                  <button
                    value="XS"
                    onClick={changeSize}
                    name="size"
                    className={addClass}
                  >
                    {data.productsize}
                  </button>
                ) : (
                  ""
                )}
                {data.productsize2 ? (
                  <button
                    name="size"
                    value="S"
                    onClick={changeSize}
                    className={addClass}
                  >
                    {data.productsize2}
                  </button>
                ) : (
                  ""
                )}
                {data.productsize3 ? (
                  <button
                    name="size"
                    value="M"
                    onClick={changeSize}
                    className={addClass}
                  >
                    {data.productsize3}
                  </button>
                ) : (
                  ""
                )}
                {data.productsize4 ? (
                  <button
                    name="size"
                    value="L"
                    onClick={changeSize}
                    className={addClass}
                  >
                    {data.productsize4}
                  </button>
                ) : (
                  ""
                )}
                {data.productsize5 ? (
                  <button
                    name="size"
                    value="XL"
                    onClick={changeSize}
                    className={addClass}
                  >
                    {data.productsize5}
                  </button>
                ) : (
                  ""
                )}
                {data.productsize6 ? (
                  <button
                    name="size"
                    value="XXL"
                    onClick={changeSize}
                    className={addClass}
                  >
                    {data.productsize6}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="buttonproduct">
              <div onClick={addCart} className="cart">
                ADD TO BAG
              </div>
              <div className="whislist">WISHLIST</div>
            </div>
          </div>
        </div>
        <Second></Second>
      </div>
    </>
  );
};
