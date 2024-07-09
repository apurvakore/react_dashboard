import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";


const transcationInfoData = {
    NEWEST: [
        {
            icon: <IoArrowDownCircleOutline className=" text-[24px] mt-1" />,
            name: "Netflix",
            price: -2500,
            date: "27 March 2020, at 12:30 PM"
        },
        {
            icon: <IoArrowUpCircleOutline className=" text-[24px] mt-1" />,
            name: "Apple",
            price: 2000,
            date: "27 March 2020, at 04:30 AM"
        }
    ],
    YESTERDAY: [
        {
            icon: <IoArrowUpCircleOutline className=" text-[24px] mt-1" />,
            name: "Stripe",
            price: 750,
            date: "26 March 2020, at 13:45 PM"
        },
        {
            icon: <IoArrowUpCircleOutline className=" text-[24px] mt-1" />,
            name: "HubSpot",
            price: 1000,
            date: "26 March 2020, at 12:30 PM"
        },
        {
            icon: <IoArrowUpCircleOutline className=" text-[24px] mt-1" />,
            name: "Creative Tim",
            price: 2500,
            date: "26 March 2020, at 08:30 AM"
        },
        {
            icon: <AiOutlineExclamationCircle className=" text-[24px] mt-1 text-[#344767]" />,
            name: "Webflow",
            price: "Pending",
            date: "26 March 2020, at 05:00 AM"
        }
    ]
};

export default transcationInfoData;
