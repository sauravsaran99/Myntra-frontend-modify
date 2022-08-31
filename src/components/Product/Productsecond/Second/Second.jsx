import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { Productthunk } from "../../../Redux/Action/Product";
import { Link, useParams } from "react-router-dom";
export const Second = () => {
  const { gender } = useParams();

  // const dispatch = useDispatch();
  const data = useSelector((Store) => Store.product.pdata);
  const [products, getProducts] = useState([]);
  const [cate, setCate] = useState("");
  // useEffect(() => {
  //   dispatch(Productthunk());
  // }, [dispatch]);
// console.log('sau', data)
  useEffect(() => {
    getProducts([...data]);
  }, [data]);

  useEffect(() => {
    if (gender === "men") {
      setCate("mentshirts");
    } else {
      setCate("womenkurti");
    }
  }, [gender]);

  // console.log(cate)
  return (
    <>
      <div className="productsecondsecond">
        {products.map((e) => {
            
          if (e.imgsrc !== "" && e.category === cate && e.dprice) {
            return (
<Link to={`/product/${gender}/${e._id}`}>
              <div className="uibox">
                <div className="uiboximg">
                  <img
                    src={e.imgsrc}
                    alt={e.productdec}
                    width="100%"
                    height="10%"
                  />
                </div>
                <div className="textpadding">{e.brand}</div>
                <div className="textpadding">{e.productdec}</div>
                <div className="textpadding">₹ {e.dprice}</div>
                <div className="textpadding"><s>₹ {e.strike}</s></div>
                {/* <div className="textpadding">
                  {e.dper}</div> */}
              </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};
