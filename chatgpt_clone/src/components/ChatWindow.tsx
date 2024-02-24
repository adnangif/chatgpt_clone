import { LuUpload } from "react-icons/lu";
import { TbHexagon3D } from "react-icons/tb";

export default function ChatWindow() {
    return (
        <div className="relative bg-green-600 h-full flex flex-col">
            <div className="flex px-4 p-2 sticky top-0 bg-neutral-800 justify-between items-center">
                <a href="#" className="text-lg font-bold hover:bg-neutral-700 rounded-lg p-2">meta/llama-2-70b-chat</a>
                <div
                    className="p-2 hover:bg-neutral-700 rounded-lg border border-neutral-600"
                ><LuUpload size={15} /></div>
            </div>

            <div className="flex flex-col justify-between h-full">
                <div className="flex  flex-col justify-between bg-red-400">
                    <div>
                        <TbHexagon3D size={50} />
                    </div>
                    <div>How Can I help you today?</div>
                </div>
                <div className="bg-yellow-500">message box</div>
            </div>
        </div>
    )
}