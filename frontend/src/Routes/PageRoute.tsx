import Header from "../components/Header"
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Chat from "../pages/Chat"
import NotFound from "../pages/NotFound"

const PageRoute = () => {
  return (
    <>
        <Header/>
        <Routes>
            <Route path ="/" element = {<Home />}/>
            <Route path ="/login" element = {<Login />}/>
            <Route path ="/signup" element = {<Signup />}/>
            <Route path ="/chat" element = {<Chat />}/>
            <Route path ="*" element = {<NotFound />}/>
        </Routes>
    </>
  )
}

export default PageRoute