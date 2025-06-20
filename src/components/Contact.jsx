import { Link } from "react-router-dom";

export const Contact = () => {
    return <div className="w-full bg-[#5368df] h-96 items-center justify-center flex flex-col gap-6">

        <div className="text-2xl text-white">35,000+ ALREADY JOINED</div>
        <div className="text-4xl font-bold text-white w-[50%] xl:w-[30%] text-center">Stay up-to-date with what we're doing</div>

        <div className="flex gap-2">
            <input type="text" placeholder="Enter your email address" className="p-4 rounded-lg text-gray-700 bg-white"/>
            <Link to={"/#home"} className="p-4 rounded-lg bg-[#f95657] hover:opacity-[80%] font-bold text-white">Contact Us</Link>
        </div>
    </div>
}