import { GrTransaction } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { IoMdHelp } from "react-icons/io";
import MenuItem from '../Components/MenuItem';
import Logo from '../assets/BrandLogo.png'
import BalanceWidget from "../Components/BalanceWidget";
import Header from "../Components/Header";
import Transactions from "../Components/Transactions";


const Dashboard = () => {

  return (
    <>
    <div className='mt-[120px] ml-1'>
    <img src={Logo} className="h-[120px] w-[120px]" alt="Logo" />
  </div>
      <div className="flex flex-col items-center justify-start h-full w-16 bg-gray-900 text-white ml-[33px] mt-[10px]">
      <MenuItem icon={<RxDashboard />} name="Dashboard" />
      <MenuItem icon={<AiOutlineStock />} name="Stock" />
      <MenuItem icon={<GrTransaction />} name="History"  />
      <MenuItem icon={<FaPlus />} name="New Stock"  />
      <MenuItem icon={<IoMdHelp />} name="Help"  />
    </div>

    <BalanceWidget/>
    <Header/>
    <Transactions/>
    </>
  
  );
};

export default Dashboard;
