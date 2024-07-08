import { AiFillHome } from "react-icons/ai";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HiCreditCard } from "react-icons/hi";
import { RiBox2Fill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

const sidePanelData = [
    {
        id: 1,
        icon: <AiFillHome />,
        optionName: "Dashboard",
        path: "/dashboard"
    },
    {
        id: 2,
        icon: <PiBuildingApartmentFill />,
        optionName: "Tables",
        path: "/tables"
    },
    {
        id: 3,
        icon: <HiCreditCard />,
        optionName: "Billing",
        path: "/billing"
    },
    {
        id: 4,
        icon: <RiBox2Fill />,
        optionName: "Virtual Reality",
        path: "/virtual-reality"
    },
    {
        id: 5,
        icon: <FaTools />,
        optionName: "RTL",
        path: "/rtl"
    }
]

export default sidePanelData;
