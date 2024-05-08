import { useState } from 'react';
import Logo from '../assets/BrandLogo.png'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
  <div className="flex flex-col items-center justify-center h-screen">
  <div>
    <img src={Logo} className="h-40 w-40 mb-6" alt="Logo" />
  </div>
  <div className='mb-6'>
    <h1 className="text-3xl text-white text-center">Welcome Back</h1>
  </div>
  <form className="flex flex-col justify-center items-center">
  <input
      type="email"
      placeholder="Company email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-[330px] h-10 mb-4 px-2 bg-white rounded-2xl border border-[#121212] focus:border-[#121212]"
    />
    <input
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-[330px] h-10 mb-4 px-2 bg-white rounded-2xl border border-[#121212] focus:border-[#121212]"
    />
    <button className="bg-white hover:bg-gray-700 hover:text-white text-[#121212] font-bold py-2 px-4 rounded-md w-[180px] mt-5 text-[16px]">
      Sign In
    </button>
  </form>
  <div className='mt-5'>
    <p className="text-white text-center text-[12px]">Forgot Password? <a className="text-blue-500 hover:text-blue-700" href="/reset-password">Reset</a></p>
  </div>
  <div className='mt-8'>
    <p className="text-white text-center text-[14px]">Welcome to Pocket Investor enterprise platform, Don&apos;t have an account? <a className=" text-blue-500 hover:text-blue-700" href="/signup">Sign Up</a></p>
  </div>
</div>

  )
}

export default LoginPage
