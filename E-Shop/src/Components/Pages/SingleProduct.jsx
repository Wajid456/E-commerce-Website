import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../Redux/features/cart/cartSlice'

const SingleProduct = () => {

  const[list,setList] = useState({});
  const {id} = useParams();
  const dispatch = useDispatch();
  // api fetching for single product
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setList(response.data);
    });
  }, [id]);


  const handleAddToCart = (list) => {
    dispatch(addItem(list));
  };


  return (
    <div>
     <div className="mx-0 my-0 bg-gray-100 md:mx-10 md:my-10">
  <div className="container p-4 mx-auto">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="max-w-md mx-auto md:mx-0">
        <img src={list.image} alt="Product Image" className="md:w-[20rem] h-[20rem] w-full   rounded-lg shadow-lg" />
      </div>
      <div>
        <h1 className="mb-2 text-3xl font-semibold">{list.title}</h1>
        <p className="mb-4 text-gray-600">{list.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-lg font-semibold text-green-500">${list.price}</span>
          {/* <span className="ml-2 text-gray-500 line-through">$129.99</span> */}
        </div>
        <button onClick={()=>handleAddToCart(list)}  className="px-4 py-2 text-white transition duration-300 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default SingleProduct