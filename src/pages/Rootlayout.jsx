import { Outlet } from "react-router-dom"
import Header from "../component/Header"

const Rootlayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        
    </div>
  )
}

export default Rootlayout