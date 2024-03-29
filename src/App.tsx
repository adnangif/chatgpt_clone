import SideBar from "./components/SideBar"
import './App.css'
import ChatWindow from "./components/ChatWindow"

export default function App() {
  return (
    <div className="
    text-neutral-300
    h-screen bg-neutral-800
    flex
    w-full">
      <SideBar/>
      <div className="h-screen w-64 flex-grow  bg-neutral-800">
        <ChatWindow/>
      </div>

    </div>
  )
}