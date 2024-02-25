import { CiUser } from "react-icons/ci";
import { TbHexagon3D } from "react-icons/tb";


export default function MessageBody({ type, body }: { type: 'user' | 'gemini'; body: string }) {
    return (
        <div className="flex relative p-3 w-full min-w-xl  max-w-3xl ">
            <div>
                {type == 'user' ?
                    <div className="bg-gray-700 rounded-full p-1">
                        <CiUser size={20} />
                    </div>
                    :
                    <div className="bg-green-700 rounded-full p-1">
                        <TbHexagon3D size={20} />
                    </div>
                }
            </div>
            <div className="flex flex-col items-center justify-start">
                {type == 'user' ?
                    <div className="text-lg w-full px-3 font-semibold">You</div>
                    :
                    <div className="text-lg w-full px-3 font-semibold">Gemini</div>
                }
                <div className=" py-2 px-3 text-lg">
                    {body}
                </div>
            </div>
        </div>
    )

}