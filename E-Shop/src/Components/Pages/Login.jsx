import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  
      <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-full p-8 bg-white rounded shadow-md sm:w-96">
        <h1 className="mb-4 text-2xl font-semibold">Login</h1>
        <form>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" className="w-full p-2 mt-1 border rounded-md" />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="w-full p-2 mt-1 border rounded-md" />
            </div>
            <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                Log in
            </button>
        </form>
        <p className="mt-3 text-sm text-gray-600">Don't have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Sign up</Link></p>
        
    </div>
</div>
    
  )
}

export default Login