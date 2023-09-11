import React from "react";
import axios from "axios";
import { useState ,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { setCategory } from "../Redux/features/filters/filterSlice";
import { setPriceRange } from "../Redux/features/filters/filterSlice";
import { Link } from "react-router-dom";

const apiUrl = "https://fakestoreapi.com/products";

const Home = () => {


  const[list, setList] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.productFilter.selectedCategory);
  const priceRange = useSelector((state)=>state.productFilter.priceRange);

  const handlePriceRange = (e)=>{
    const { name, value } = e.target;
    dispatch(setPriceRange({ ...priceRange, [name]: (value) }));
  }

  // Filtered Product By Category
  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const filteredProducts = list.filter((product) => {
    const categoryFilter = selectedCategory === 'All' || product.category === selectedCategory;
    const priceFilter =
      product.price >= priceRange.min && product.price <= priceRange.max;
    return categoryFilter && priceFilter;
  });


    //  Api data fetching
    useEffect(() => {
      axios.get(apiUrl).then((response) => {
        setList(response.data);
      });
    }, []);


  return (
    <div>
      <div className="bg-gray-100 ">
        <div className="p-4 bg-white shadow-md">
          <div className="container items-center justify-between mx-auto md:flex">
            <h1 className="font-bold md:text-2xl">Product Listings</h1>
            <div>
            <input
      type="text"
      className="flex-1 px-4 py-2 my-3 border border-black md:my-0 rounded-l-md "
      placeholder="Search..."
          />
            </div>
          </div>
        </div>

        {/* Side Menu Filters */}
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="p-4 bg-white shadow-md">
            {/* Price Range Filter */}
            <h2 className="mb-2 text-lg font-semibold">Filters</h2>
            <h3 className="mb-1 font-semibold text-md">Price Range</h3>
            
            <input className="w-full px-3 border border-black" type="number" name="min" value={priceRange.min} onChange={handlePriceRange} />
            <input className="w-full px-3 my-3 border border-black" type="number" name="max" value={priceRange.max} onChange={handlePriceRange} />

              {/* <!-- Category filter--> */}
              <div className="relative my-10">
              <h3 className="mb-1 font-semibold text-md">Select Category</h3>
              <select className="w-full p-1 my-2 text-lg border border-black rounded"  
             value={selectedCategory} onChange={handleCategoryChange}>
                <option className="text-lg" value="All">All Categories</option>
                <option className="text-lg" value="electronics" >Electronics</option>
                <option className="text-lg" value="men's clothing">Men's Clothing</option>
                <option className="text-lg" value="jewelery">Jewelery</option>
                <option className="text-lg" value="women's clothing">Women's Clothing</option>
              </select>  
            </div>
            </div>

                {/* <!-- Product Cards Go Here --> */}
                <div className="col-span-2" >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" >
                    
                {filteredProducts.map((product,index)=>{
            return (
              <div key={index}>
                <Link to={`/single-product/${product.id}`}>
                <div className="p-4 bg-white shadow-md"  >
                <img
                  src={product.image}
                  alt="Product"
                  className="object-contain w-full h-48 mb-2"
                />
                 <h3 className="font-semibold text-md">{product.title}</h3> 
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
                <p className="text-sm text-gray-600">Category: {product.category}</p>
              </div>
              </Link>
              </div>
             
            )
                })}

            </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
