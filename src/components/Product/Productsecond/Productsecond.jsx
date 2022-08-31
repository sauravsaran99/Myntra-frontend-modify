import { Second } from "./Second/Second";
import "./Productsecond.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Product } from "../../Redux/Action/Product";
import { Productthunk } from "../../Redux/Action/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Productsecond = () => {
  const dispatch = useDispatch();
  const { gender } = useParams()
  const [radio, setReadio] = useState('')
  useEffect(() => {
    console.log(typeof(radio))
    if(radio[0] == 'P'|| radio[0] == 'R' || radio[0] == 'W' || radio[0] == 'N' || radio[0] == 'H' || radio[0] == 'D' || radio[0] == 'L' || radio[0] == 'A' || radio[0] == 'E' || radio[0] == 'S' || radio[0] == 'K' || radio[0] == 'I' || radio[0] == 'K' || radio[0] == 'V' || radio[0] == 'F') {
      console.log('bradn')
      axios.get(`https://fathomless-lowlands-62517.herokuapp.com/product?category=${gender=='men'?'mentshirts':'womenkurti'}&brand=${radio}`).then((res) => {
      dispatch(Product(res.data))
    })
    } else {
      if(radio == 174) {
        axios.get(`https://fathomless-lowlands-62517.herokuapp.com/product?min=${radio}&max=1631`).then((res) => {
          dispatch(Product(res.data))
        })
      } else if(radio == 1631) {
        axios.get(`https://fathomless-lowlands-62517.herokuapp.com/product?min=${radio}&max=3088`).then((res) => {
          dispatch(Product(res.data))
        })
      } else if(radio == 3088) {
        axios.get(`https://fathomless-lowlands-62517.herokuapp.com/product?min=${radio}&max=4545`).then((res) => {
          dispatch(Product(res.data))
        })
      }  else if(radio == 4545) {
        axios.get(`https://fathomless-lowlands-62517.herokuapp.com/product?min=${radio}&max=6002`).then((res) => {
          dispatch(Product(res.data))
        })
      }
    }
  }, [radio])
  return (
    <>
      {gender === "men" ? (
        <div className="productsecond">
          <div className="productsecondfirst">
            <div className="category">
              <h4>CATEGORIES</h4>
              <input
                onClick={(e) => setReadio(e.target.value)}
                type="radio"
                id="html"
                name="fav_language"
                value="Tshirts" checked="checked"
              />
              <label for="Tshirts">Tshirts</label>
              {/* <br />
              <input
                type="radio"
                id="Lounge Tshirts"
                name="fav_language"
                value="Lounge Tshirts"
                onClick={(e) => setReadio(e.target.value)}  
              /> */}
              {/* <label for="Lounge Tshirts">Lounge Tshirts</label>
              <br /> */}
            </div>
            <div className="brand">
              <h4>BRAND</h4>
              <input
                type="radio"
                id="Roadster"
                name="fav_language"
                value="Roadster"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Roadster">Roadster</label>
              <br />
              <input
                type="radio"
                id="WROGN"
                name="fav_language"
                value="WROGN"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="WROGN">WROGN</label>
              <br />
              <input
                type="radio"
                id="Puma"
                name="fav_language"
                value="Puma"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Puma">Puma</label>
              <br />
              <input
                type="radio"
                id="Nautica"
                name="fav_language"
                value="Nautica"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Nautica">Nautica</label>
              <br />
              <input
                type="radio"
                id="HRX"
                name="fav_language"
                value="HRX by Hrithik Roshan"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="HRX by Hrithik Roshan">HRX by Hrithik Roshan</label>
              <br />
              <input
                type="radio"
                id="Nike"
                name="fav_language"
                value="Nike"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Nike">Nike</label>
              <br />
              <input
                type="radio"
                id="DILLINGER"
                name="fav_language"
                value="DILLINGER"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="DILLINGER">DILLINGER</label>
              <br />
              <input
                type="radio"
                id="Levis"
                name="fav_language"
                value="Levis"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Levis">Levis</label>
              <br />
            </div>
            <div className="price">
              <h4>PRICE</h4>
              <input
                type="radio"
                name="fav_language"
                value="174"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="174">Rs. 174 to Rs. 1631</label>
              <br />
              <input
                type="radio"
                id="1631"
                name="fav_language"
                value="1631"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="1631">Rs. 1631 to Rs. 3088</label>
              <br />
              <input
                type="radio"
                name="fav_language"
                value="3088"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="3088">Rs. 3088 to Rs. 4545</label>
              <br />
              <input
                type="radio"
                id="4545"
                name="fav_language"
                value="4545"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="4545">Rs. 4545 to Rs. 6002</label>
              <br />
            </div>

            <div className="discount">
              <h4>DISCOUNT RANGE</h4>
              <input type="radio" id="tenper" name="fav_language" value="10" onClick={(e) => setReadio(e.target.value)} />
              <label for="tenper">10% and above</label>
              <br />
              <input
                type="radio"
                id="twentyper"
                name="fav_language"
                value="20"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="twentyper">20% and above</label>
              <br />
              <input
                type="radio"
                id="thrityper"
                name="fav_language"
                value="30"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="thrityper">30% and above</label>
              <br />
              <input
                type="radio"
                id="fortyper"
                name="fav_language"
                value="40"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="fortyper">40% and above</label>
              <br />
              <input
                type="radio"
                id="fiftyper"
                name="fav_language"
                value="50"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="fiftyper">50% and above</label>
              <br />
              <input
                type="radio"
                id="sixtyper"
                name="fav_language"
                value="60"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="sixtyper">60% and above</label>
              <br />
              <input
                type="radio"
                id="seventyper"
                name="fav_language"
                value="70"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="seventyper">70% and above</label>
              <br />
              <input
                type="radio"
                id="eightyper"
                name="fav_language"
                value="80"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="eightyper">80% and above</label>
              <br />
            </div>
          </div>
          <Second className="productsecondsecond" />
        </div>
      ) : (
        //   girls data structure designed to be used
        <div className="productsecond">
          <div className="productsecondfirst">
            <div className="category">
              <h4>CATEGORIES</h4>
              <input
                onClick={(e) => setReadio(e.target.value)}
                type="radio"
                id="Kurtas"
                name="fav_language"
                value="Kurtas"
              />
              <label for="Kurtas">Kurtas</label>
              <br />
              <input
                type="radio"
                id="Kurta Sets"
                name="fav_language"
                value="Kurta Sets"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Kurta Sets">Kurta Sets</label>
              <br />
            </div>
            <div className="brand">
              <h4>BRAND</h4>
              <input
                type="radio"
                id="Ethnic basket"
                name="fav_language"
                value="Ethnic basket"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Ethnic basket">Ethnic basket</label>
              <br />
              <input
                type="radio"
                id="Sangria"
                name="fav_language"
                value="Sangria"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Sangria">Sangria</label>
              <br />
              <input
                type="radio"
                id="Anouk"
                name="fav_language"
                value="Anouk"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Anouk">Anouk</label>
              <br />
              <input
                type="radio"
                id="KALINI"
                name="fav_language"
                value="KALINI"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="KALINI">KALINI</label>
              <br />
              <input
                type="radio"
                id="Indo Era"
                name="fav_language"
                value="Indo Era"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Indo Era">Indo Era</label>
              <br />
              <input
                type="radio"
                id="KAAJH"
                name="fav_language"
                value="KAAJH"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="KAAJH">KAAJH</label>
              <br />
              <input
                type="radio"
                id="Varanga"
                name="fav_language"
                value="Varanga"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Varanga">Varanga</label>
              <br />
              <input
                type="radio"
                id="Fabindia"
                name="fav_language"
                value="Fabindia"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="Fabindia">Fabindia</label>
              <br />
            </div>
            <div className="price">
              <h4>PRICE</h4>
              <input
                type="radio"
                name="fav_language"
                value={174}
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="174">Rs. 174 to Rs. 1631</label>
              <br />
              <input
                type="radio"
                id="1631"
                name="fav_language"
                value={1631}
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="1631">Rs. 1631 to Rs. 3088</label>
              <br />
              <input
                type="radio"
                name="fav_language"
                value={3088}
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="3088">Rs. 3088 to Rs. 4545</label>
              <br />
              <input
                type="radio"
                id="4545"
                name="fav_language"
                value={4545}
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="4545">Rs. 4545 to Rs. 6002</label>
              <br />
            </div>

            <div className="discount">
              <h4>DISCOUNT RANGE</h4>
              <input type="radio" id="tenper" name="fav_language" value="10" onClick={(e) => setReadio(e.target.value)} />
              <label for="tenper">10% and above</label>
              <br />
              <input
                type="radio"
                id="twentyper"
                name="fav_language"
                value="20"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="twentyper">20% and above</label>
              <br />
              <input
                type="radio"
                id="thrityper"
                name="fav_language"
                value="30"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="thrityper">30% and above</label>
              <br />
              <input
                type="radio"
                id="fortyper"
                name="fav_language"
                value="40"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="fortyper">40% and above</label>
              <br />
              <input
                type="radio"
                id="fiftyper"
                name="fav_language"
                value="50"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="fiftyper">50% and above</label>
              <br />
              <input
                type="radio"
                id="sixtyper"
                name="fav_language"
                value="60"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="sixtyper">60% and above</label>
              <br />
              <input
                type="radio"
                id="seventyper"
                name="fav_language"
                value="70"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="seventyper">70% and above</label>
              <br />
              <input
                type="radio"
                id="eightyper"
                name="fav_language"
                value="80"
                onClick={(e) => setReadio(e.target.value)}
              />
              <label for="eightyper">80% and above</label>
              <br />
            </div>
          </div>
          <Second className="productsecondsecond" />
        </div>
      )}
    </>
  );
};
