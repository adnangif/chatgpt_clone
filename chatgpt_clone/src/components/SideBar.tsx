import ChatTitle from "./ChatTitle";
import SideBarFooter from "./SideBarFooter";
import SideBarHead from "./SideBarHead";
import SideBarLabel from "./SideBarLabel";

export default function SideBar() {
    return (
        <div className=" flex flex-col">
            <div className="hidden p-3 md:block 
        md:w-64
        bg-neutral-900
        overflow-auto
        scroll-smooth
        relative
        ">
                <div className=" sticky top-0 z-10">
                    <SideBarHead />
                </div>

                <div>
                    <SideBarLabel description="Today"/>
                    {/* These are dummy titles */}
                    <ChatTitle title='Nadsfasdfasdfadsfadsfadsdfasdfew chat' />
                    <ChatTitle title='New chat' />
                    <ChatTitle title='New chat' />
                </div>
                <div>
                    <SideBarLabel description="Previous 7 Days"/>
                    {/* These are dummy titles */}
                    <ChatTitle title='Nadsfasdfasdfadsfadsfadsdfasdfew chat' />
                    <ChatTitle title='New chat' />
                    <ChatTitle title='New chat' />
                    <ChatTitle title='Nadsfasdfasdfadsfadsfadsdfasdfew chat' />
                    <ChatTitle title='New chat' />
                </div>
                <div>
                    <SideBarLabel description="Previous 30 Days"/>
                    {/* These are dummy titles */}
                    <ChatTitle title='Nadsfasdfasdfadsfadsfadsdfasdfew chat' />
                    <ChatTitle title='New chat' />
                    <ChatTitle title='New chat' />

                </div>
            </div>
            <div className="hidden md:block">
                <SideBarFooter />
            </div>
        </div>

    )
}