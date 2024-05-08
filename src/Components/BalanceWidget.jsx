import React from 'react';
import Logo from '../assets/Almat.png'

function BalanceWidget() {
  return (
    <div className=''>
        <div className='ml-[45px] mt-5'>
            <img src={Logo} className="h-[40px] w-[40px]" alt="Company Logo" />
        </div>
      <div className="bg-[#000000] w-[360px] h-[160px] rounded-[20px] absolute right-[80px] top-[150px]">
        <div className="flex flex-col inset-0 justify-center items-center relative top-3 bg-[#000000]">
        <p className='text-gray-300 bg-[#000000] text-[22px] pb-2 pt-4'>Total Balance</p>
          <p className='text-white text-[28px] bg-[#000000]'>$500. 00</p>
          <p className='text-white bg-[#000000] text-[18px]'>...</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceWidget;
