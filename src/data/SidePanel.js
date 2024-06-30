import { AiFillHome } from "react-icons/ai";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HiCreditCard } from "react-icons/hi";
import { RiBox2Fill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";



const sidePanelData = [
    {
        id: 1,
        icon: <AiFillHome/>,
        optionName: "Dashboard"
    },
    {
        id: 2,
        icon: <PiBuildingApartmentFill/>,
        optionName: "Tables"
    },
    {
        id: 3,
        icon: <HiCreditCard />,
        optionName: "Billing"
    },
    {
        id: 4,
        icon: <RiBox2Fill/>,
        optionName: "Virtual Reality"
    },
    {
        id: 5,
        icon: <FaTools />,
        optionName: "RTL"
    }
]

export default sidePanelData;