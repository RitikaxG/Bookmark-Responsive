import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCallback, useContext, useState } from "react";
import { FeatureContext } from "../context/FeatureContext";
export const Navbar = () => {
    // const navigate = useNavigate();

    return <div className="flex justify-between mx-16 2xl:mx-8 my-12">
        <div><img className="pt-3" src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg"/></div>

        <div className="flex gap-12 cursor-pointer">

            <div className="flex text-lg tracking-wider text-gray-400 pt-3 gap-12">

                <Link to="/#features" className="hover:text-red-500">FEATURES</Link>

                <Link to="/#downloads" className="hover:text-red-500">DOWNLOAD</Link>

                <Link to="/#faqs" className="hover:text-red-500">FAQ</Link>

            </div>

            <button className="text-lg text-white bg-[#f95657] rounded-lg px-10 py-3 mb-16 hover:border-2 hover:border-[#f95657] hover:bg-white hover:text-[#f95657] cursor-pointer">LOGIN</button>
        </div>
    </div>
}

export const NavbarMobile = () => {
    const { setSidebarOpen } = useContext(FeatureContext);

    return <div onClick={()=>{
        setSidebarOpen(true);
    }} className="fixed top-5 right-10 hover:bg-gray-400 p-2">
        <Menu/>
    </div>
}

export const NavbarOpen = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(FeatureContext);

    return <>{sidebarOpen ? <div className="flex fixed inset-0 bg-[#181f44] opacity-[90%] justify-center items-center w-full">
        <div className="flex flex-col gap-4 text-center">

            <div className="flex justify-between w-sm sm:w-xl 2xl:w-5xl">
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg"/>
                <X className="hover:bg-black text-white" onClick={()=>{
                    setSidebarOpen(false);
                }}/>
            </div>
            <Link className="text-white hover:text-red-500" to={"/#features"}>FEATURES</Link>
            <div className="w-full h-px bg-white"></div>

            <Link className="text-white hover:text-red-500" to={"/#downloads"}>DOWNLOAD</Link>
            <div className="w-full h-px bg-white"></div>

            <Link className="text-white hover:text-red-500" to={"/#faqs"}>FAQ</Link>
            <div className="w-full h-px bg-white"></div>

            <div className="text-white hover:text-red-500">LOGIN</div>
            
        </div>
    </div> : null}
    </>
}