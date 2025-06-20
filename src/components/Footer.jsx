import { Facebook, Twitter } from "lucide-react"
import { Link } from "react-router-dom";

export const Footer = () => {
    return <div className="w-full  bg-[#252b46] flex flex-col sm:flex-row  gap-12 justify-between px-16 2xl:px-4 h-fit items-center py-12">
        <div className="flex flex-col sm:flex-row sm:gap-16 items-center gap-8">
            <div>
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg"/>
            </div>

            <Link to={"/#features"} className="text-lg text-gray-400 hover:text-gray-300">FEATURES</Link>
            <Link to={"/#downloads"} className="text-lg text-gray-400 hover:text-gray-300">DOWNLOAD</Link>
            <Link to={"/#faqs"} className="text-lg text-gray-400 hover:text-gray-300">FAQ</Link>
        </div>

        <div className="flex gap-6 text-white">
            <Link to={"/#home"}><Facebook/></Link>
            <Link to={"/#home"}><Twitter/></Link>
        </div>
    </div>
}