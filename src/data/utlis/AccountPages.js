import { BsPersonHeart } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";

const accountPagesData = [
    {
        id: 1,
        icon: <BsPersonHeart />,
        optionName: "Profile",
        path: "/profile"

    },
    {
        id: 2,
        icon:<MdLibraryBooks />,
        optionName: "Sign In",
        path: "/signin"
    },
    {
        id: 3,
        icon: <MdRocketLaunch />,
        optionName: "Sign Up",
        path: "/signup"
    },
]

export default accountPagesData;