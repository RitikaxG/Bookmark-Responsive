import { Book } from "lucide-react"

export const HeroScreen = () => {
    return <div className="flex mx-16 2xl:mx-8 mt-20">

        <div className="w-[40%]"><BookmarkManager/></div>


        <div className="bg-[#5368df] w-2xl h-80 rounded-full translate-y-30 translate-x-64 2xl:translate-x-128">
            <img className="-translate-y-48 2xl:-translate-x-64 -translate-x-56" src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"/>
        </div>

    </div>
    
}

export const HeroTab = () => {
    return <div className="flex flex-col xl:justify-start justify-center items-center mt-16">
        <div><img className="sm:w-[100%] sm:h-[100%] w-100 h-60" src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"/></div>
        <div><BookmarkManager/></div>
    </div>
}

const BookmarkManager = () => {
    return <div className="flex flex-row md:flex-col flex-wrap gap-8 sm:gap-16 justify-center xl:justify-start">

    <div className="font-bold text-center md:text-start text-2xl sm:text-4xl xl:text-6xl w-[100%]">A Simple Bookmark Manager</div>
    <div className="text-lg sm:text-2xl/8 text-gray-400 w-sm sm:w-xl lg:w-md lg:text-start text-center">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</div>

    <div className="flex curosr-pointer font-bold gap-4 lg:w-xl lg:justify-start justify-center">
        <div className="p-5 rounded text-white bg-[#5368df] hover:border-2 hover:border-[#5368df] hover:text-[#5368df] hover:bg-white">Get it on Chrome</div>
        <div className="p-5 rounded bg-gray-300 hover:border-2 hover:border-gray-400 hover:bg-white hover:text-gray-600 shadow-md">Get it on Firefox</div>
    </div>

</div>
}

