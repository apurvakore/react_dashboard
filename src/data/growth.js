import { HiCurrencyDollar } from "react-icons/hi2";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const growthData = [
    {
        title: "Today's Money",
       number: "$53,000",
        growth: 55,
        icon: <HiCurrencyDollar className='text-white text-[16px]'/>
    },
    {
        title: "Today's Users",
       number: "2,300",
        growth: 3,
        icon: <FaGlobeAmericas className='text-white text-[16px]' />

    },
    {
        title: "New Clients",
       number: "+3,462 ",
        growth: -2,
        icon: <FaTrophy className='text-white text-[16px]' />

    },
    {
        title: "Sales",
       number: "$103,430 ",
        growth: 5,
        icon: <FaShoppingCart className='text-white text-[16px]' />

    },
 
    
]

export default growthData
    
