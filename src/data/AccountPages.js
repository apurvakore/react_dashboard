import { BsPersonHeart } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";

const accountPagesData = [
    {
        id: 1,
        icon: <BsPersonHeart />,
        optionName: "Profile"
    },
    {
        id: 2,
        icon:<MdLibraryBooks />,
        optionName: "Sign In"
    },
    {
        id: 3,
        icon: <MdRocketLaunch />,
        optionName: "Sign Up"
    },
]

export default accountPagesData;