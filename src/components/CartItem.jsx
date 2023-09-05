
import {MdDeleteSweep} from "react-icons/md"
import { useDispatch } from "react-redux";
import {removeItem } from "../redux/Slices/CartSlice"

const CartItem = ({ item , itemindex}) => {

  const dispatch = useDispatch();

  const removeCart = () =>{ 
    dispatch(removeItem(item.id))
  }

  return (
    <div>
      <div>
        <img src={item.image}/>
      </div>
      <div>
        <h1>
          {item.title}
        </h1>
        <h1>{
        item.decription}</h1>
      </div>
      <div>
        <p>
          {item.price}
        </p>
        <div onClick={removeCart}>
          <MdDeleteSweep/>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
