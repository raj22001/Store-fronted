
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount , settotalAmount] = useState(0);

  useEffect(()=>{
    settotalAmount(cart.reduce( (acc , curr) => acc + curr.price , 0) );
  },[cart])

  return (
    <div>
        {
          cart.length > 0 ? (
            <div>
              <div>
                {
                  cart.map((item , index) =>{
                    return(
                      <CartItem key={item.id} item={item} itemindex = {index}/>
                    )
                  })
                }
              </div>
              <div>
                <p>Your Cart</p>
                <p>Summary</p>
                <p>Total Item : {cart.length}</p>
              </div>

              <div>
                <p>total amount ${totalAmount}</p>
                <button>
                  Check Out Now
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Cart Empty</h1>
              <Link to={"/"}>
                <button>
                  Shop Know
                </button>
              </Link>
            </div>
          )
        }
  </div>
  )
};

export default Cart;
