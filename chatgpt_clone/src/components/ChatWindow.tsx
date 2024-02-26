import { LuUpload } from "react-icons/lu";
import { TbHexagon3D } from "react-icons/tb";
import { GrUploadOption } from "react-icons/gr";

import Pill from "./Pill";
import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MessageBody from "./MessageBody";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY


export default function ChatWindow() {
    const [prompt, setprompt] = React.useState("");
    const [chatting, setChatting] = React.useState(true);
    const [bucket, setBucket] = React.useState<{
        type:'user' | 'gemini';
        body:string;
    }[]>([]);

    function handlePrompt(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setprompt(event.target.value)
    }

    function handleEnter(event: React.KeyboardEvent){
        if(event.key == 'Enter'){
            event.preventDefault()
            promptSubmit()
        }
    }

    function promptSubmit() {
        if (prompt.trim().length == 0) {
            console.log("No Prompt")
            return
        }
        setChatting(true)
        const current_prompt = prompt

        setprompt('')
        setBucket([...bucket,{
            type:'user',body:current_prompt
        }])

        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        model.generateContent(current_prompt).then((result)=>{
            console.log(result.response.text())
            setBucket([...bucket,{
                type:'user',body:current_prompt
            },{
                type:'gemini',body:result.response.text()
            }])
        })

    }



    return (
        <div className="relative bg-neutral-800 h-screen flex flex-col overflow-auto">
            <div className="flex px-4 p-2 sticky z-10 top-0 bg-neutral-800 justify-between items-center">
                <a href="#" className="text-lg font-bold hover:bg-neutral-700 rounded-lg p-2">Gemini Pro</a>
                <div
                    className="p-2 hover:bg-neutral-700 rounded-lg border border-neutral-600"
                ><LuUpload size={15} /></div>
            </div>

            <div className="flex flex-col justify-between h-full relative text-neutral-200">
                {chatting == false ?
                    <div className="flex  flex-col p-10 items-center justify-between ">
                        <div>
                            <TbHexagon3D size={60} />
                        </div>
                        <div className="text-2xl font-bold">How Can I help you today?</div>
                    </div>
                    :
                    <div className="flex flex-col items-center gap-5 font-semibold">
                    {
                        bucket.map((item,index)=>(
                            <MessageBody key={index} type={item.type} body={item.body}/>
                        ))
                    }

                    </div>
                }


                <div className="flex flex-col items-center bg-neutral-800 relative">
                    {chatting == false ?
                        <div className="gap-3 mb-3 md:w-4/5 w-5/6 min-w-96 grid md:grid-cols-2">
                            <Pill title='Brainstorm Names'
                                description="for an orange cat we are adopting from a shelter"
                            />

                            <Pill title='Brainstorm Names'
                                description="for an orange cat we are adopting from a shelter"
                            />
                        </div>
                        :
                        <div></div>
                    }
                </div>
                <div className="w-full sticky z-10 bg-neutral-800 bottom-0 flex justify-center">
                    <div className="md:w-4/5 w-full m-1 min-w-96 pt-4 bottom-0 ">
                        <div className="relative">
                            <textarea value={prompt} onKeyDown={handleEnter} onChange={handlePrompt} rows={1} className=" w-full p-3  align-middle 
                        h-full resize-none bg-neutral-800 
                        border border-neutral-400
                        outline-none rounded-2xl" placeholder="Enter Text Here...">
                            </textarea>
                            <button onClick={promptSubmit} className="absolute right-0 m-3 hover:text-neutral-300 text-neutral-600"><GrUploadOption size={25} /></button>
                        </div>
                        <div className="text-center text-xs font-semibold p-2">Gemini Pro can make mistakes. Consider checking important information.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

