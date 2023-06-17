import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";


const Cart = () => {
  const {emptyCart} = useCart();
  const history = useNavigate();
  const { t } = useTranslation();
  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } =
    useCart();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getEmail = localStorage.getItem("emailData");
  // const getPassword = localStorage.getItem("passwordData");
  const payButton = () => {
    if (getEmail == "Ulviyya") {
      Swal.fire({
        icon: 'succes',
        text: 'Odenisiniz ugurla heyata kecirildi',
      })
      emptyCart();
      
      //document.querySelector(".products").style.display = "none"
    } else {
    history('/Login');
    }
  };

  console.log(getEmail);

  // const navigate=useNavigate()
  return (
    <>
      <div title={t("cart.0")} />
      {isEmpty ? (
        <div className="cart d-flex justify-content-center">
          <h3 style={{ fontWeight: "bold" }}>Your cart is Empty</h3>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 products">
                  <table>
                   
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <>
                            <tr key={item.id} data-aos="fade-left">
                              <td>
                                <i
                                  class="fa-solid fa-xmark"
                                  onClick={() => removeItem(item.id)}
                                ></i>
                              </td>
                              <td>
                                <img src={item.img} alt="" />
                              </td>
                              <td>
                                <p>{item.title}</p>
                              </td>
                              <td>
                                <p>{item.price}$</p>
                              </td>
                              <td>
                                <div className="all-main2">
                                  <span
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                  <span>{item.quantity}</span>
                                  <span
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td>
                                <p>{item.quantity * item.price}$</p>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-12">
                  <div className="total d-flex justify-content-between" style={{ padding: ' 20px 70px ' , fontWeight:'bold'}}>
                    <h3 style={{fontWeight:'bold', padding:"0", margin:'0'}}>Subtotal : {cartTotal}$</h3>
                    <button className="btn btn-danger" style={{fontWeight:'bold'}}  onClick={payButton}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
