import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeItem,clearCart } from '../Redux/features/cart/cartSlice';

const Cart = () => {

  const cartItems = useSelector((state)=>state.cart.items);
  const dispatch = useDispatch();
  const[quantity,setQuantity] = useState(1);
  const[totalPrice,setTotalPrice] = useState(0);

  const handleRemoveFromCart = (elem) => {
    dispatch(removeItem(elem));
  };

 

  return (
    <div>
      <div className="bg-gray-100">

<div className="container py-10 mx-auto">
   
 <div className='items-center justify-between md:flex'> 
  <h1 className="mb-4 text-2xl font-semibold">Your Shopping Cart</h1>
 <button onClick={()=>{dispatch(clearCart())}} className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded-lg shadow-md hover:bg-red-600">Clear  Cart</button>
 </div>
  
    {/* <!-- Product Item 1 --> */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((elem,index)=>{
          return (
            <div key={index}>
            <div className="p-4 bg-white rounded-lg shadow">
           <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">{elem.title}</h2>
          <button onClick={() => handleRemoveFromCart(elem)} className="text-red-500">Remove</button>
        </div>
        <div className="mb-2">
          <img src={elem.image}  alt="Product 2" className="w-24 h-auto" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span>Price: ${elem.price}</span>
          <div className="flex items-center">
        <button disabled={quantity<=1} 
        onClick={()=>{
          setQuantity(quantity-1);
          setTotalPrice(elem.price*(quantity-2));        

        }} 

        className="px-2 py-1 text-white bg-blue-500 rounded ">-</button>

        <span className="px-2">{quantity}</span>
        <button disabled={quantity>=5} 
        onClick={()=>{
          setQuantity(quantity+1); 
          setTotalPrice(quantity*elem.price);        
        }}
        
        
        
        className="px-2 py-1 text-white bg-blue-500 rounded ">+</button>
    </div>

        </div>
        <div className="flex items-center justify-between">
          <span>Total: ${(totalPrice+elem.price)}</span>
        </div> 
            </div>
    </div>
          )
        })}
            

    {/* <!-- Product Item 2 --> */}
    {/* <div className="p-4 bg-white rounded-lg shadow"> */}
      {/* <!-- Similar structure as Product Item 1 --> */}
    {/* </div> */}

    {/* <!-- Add more product items here --> */}

  </div>

  <div className="p-4 mt-8 bg-white rounded-lg shadow">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-semibold">Order Summary</h2>
    </div>
    <div className="flex items-center justify-between mb-2">
      {/* <span>Subtotal: $59.98</span> */}
    </div>
    <div className="flex items-center justify-between mb-2">
      {/* <span>Shipping: $5.00</span> */}
    </div>
    <div className="flex items-center justify-between">
      <span className="text-xl font-semibold">Total:  ${cartItems.reduce((total, item) => total + item.price+totalPrice, 0)}</span>
    </div>
    <button className="w-full py-2 mt-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">Proceed to Checkout</button>
  </div>
</div>

</div>
      
    </div>
  )
}

export default Cart