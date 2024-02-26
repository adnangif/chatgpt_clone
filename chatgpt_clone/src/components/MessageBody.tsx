import { useEffect,useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { TbHexagon3D } from "react-icons/tb";
// import Markdown, { compiler } from "markdown-to-jsx";
import Markdown from "react-markdown";

export default function MessageBody({ type, body }: { type: 'user' | 'gemini'; body: string }) {
    const [streamingText, setStreamingText] = useState('');
    const [streaming, setStreaming] = useState(true)
    const scrollref = useRef<HTMLDivElement>(null);
    let idx = 0;

    useEffect(() => {
        const updateStreamingText = () => {
            if (idx >= body.length) return

            const newText = body[idx];
            idx++;
            setStreamingText(prevText => prevText + newText);
            if ( idx >= body.length) {
                clearInterval(intervalId)
                setStreaming(false)
            }
            

        };
        const intervalId = setInterval(updateStreamingText, 10);

        return () => clearInterval(intervalId);
    }, []);

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
            <div ref={scrollref} className="flex flex-col items-center justify-start">
                {type == 'user' ?
                    <div className=" w-full px-3 font-bold">You</div>
                    :
                    <div className="w-full px-3 font-bold">Gemini</div>
                }
                <div className=" py-1 px-3 relative  font-normal whitespace-pre-wrap">
                    {type == 'gemini' && (streaming || body == '' ) ?
                        <div  className="h-3 w-3 absolute bottom-0 bg-neutral-300 rounded-full"></div>
                        :
                        <div></div>
                    }
                    <Markdown>
                        {type == 'user' ?
                            body
                            :
                            streamingText
                        }
                    </Markdown>
                </div>
            </div>
        </div>
    )

}