import { IoIosMore } from "react-icons/io";
import { RiArchiveLine } from "react-icons/ri";

export default function ChatTitle({title}:{title:string}){
    return(
        <div>
        <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800">
            <div className=" font-semibold text-sm text-center" >{ title }</div>
            <div className="flex gap-2">
                <IoIosMore size={15} className=" hover:text-neutral-400 "/>
                <RiArchiveLine size={15} className=" hover:text-neutral-400"/>
            </div>
        </a>
        </div>
    )
}