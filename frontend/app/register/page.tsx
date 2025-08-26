import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign up</h2>
        <form className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300" required />
          </div>
            
        
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300" required />
          </div>

          
          <button type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
            Sign in
          </button>
        </form>

      
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?
          <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>

  )
}

export default Signup