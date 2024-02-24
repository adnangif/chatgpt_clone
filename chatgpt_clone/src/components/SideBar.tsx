import { FaEdit } from "react-icons/fa";
import { TbHexagon3D } from "react-icons/tb";
import ChatTitle from "./ChatTitle";

export default function SideBar() {
    return (
        <div className="hidden p-3 sm:block h-screen sm:w-64 bg-neutral-900">
            <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800">
                <div className="flex justify-start gap-2 items-center">
                    <div className="text-gray-800 flex bg-neutral-300 rounded-full text-center justify-center p-1"><TbHexagon3D size={20} /></div>
                    <div className=" font-bold text-sm text-center" >New chat</div>
                </div>
                <FaEdit className="" />
            </a>

            <div>
                <div className="text-xs p-2 mt-6 font-bold text-neutral-700">Today</div>
                <ChatTitle title='New chat' />
                <ChatTitle title='New chat' />
                <ChatTitle title='New chat' />
            </div>
            <div>
                <div className="text-xs font-bold text-neutral-600">Previous 7 Days</div>

            </div>
            <div>
                <div className="text-xs font-bold text-neutral-600">Previous 30 Days</div>

            </div>
        </div>

    )
}