import { useContext } from "react";
import { FeatureContext } from "../context/FeatureContext";
export const Features = () => {
    const { feature1, feature2, feature3, setFeature1, setFeature2, setFeature3 } = useContext(FeatureContext);

    return <div className="flex flex-col gap-4 items-center mb-36">

        <div className="flex sm:flex-row flex-col gap-8 sm:gap-20 mt-6 cursor-pointer items-center">
            <div onClick={()=>{
                setFeature1(true)
                setFeature2(false);
                setFeature3(false);
            }} className={`text-xl pb-4 hover:text-red-500 ${feature1 ? "border-b-4 border-b-red-500":null}`}>Simple Booking</div>

            <div className="sm:hidden w-sm sm:w-xl h-px bg-gray-300 -translate-y-8"></div>

            <div onClick={()=>{
                setFeature2(true);
                setFeature1(false);
                setFeature3(false);
            }} className={`text-xl pb-4 hover:text-red-500 ${feature2 ? "border-b-4 border-b-red-500":null}`}>Speedy Searching</div>

            <div className="sm:hidden w-sm sm:w-xl h-px bg-gray-300 -translate-y-8"></div>

            <div onClick={()=>{
                setFeature3(true);
                setFeature1(false);
                setFeature2(false);
            }} className={`text-xl pb-4 hover:text-red-500 ${feature3 ? "border-b-4 border-b-red-500":null}`}>Easy Sharing</div>
        </div>

        <div className="w-sm sm:w-xl h-px bg-gray-300 -translate-y-4"></div>
    </div>
}

export const FeatureShow = () => {
    const { feature1, feature2, feature3 } = useContext(FeatureContext);

    return <>
        {feature1 ? <Design 
                    img={"https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"}
                    title={"Bookmark in one click"}
                    description={"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."}/>
        : null
        }

        { feature2 ? <Design
                    img={"https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"}
                    title={"Intelligent search"}
                    description={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."}/>
        :null
        }

        { feature3 ? <Design 
                     img={"https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg"}
                     title={"Share your bookmarks"}
                     description={"Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button"}/>
        : null
        }
    </>
}

export const Design = ({
    img,
    title,
    description
}) => {
    const { feature2 } = useContext(FeatureContext);
    
    return <div className="flex sm:flex-row flex-col items-center 2xl:gap-48 xl:gap-64 gap-32 sm:gap-48 mx-16">

        <div className="xl:bg-[#5368df] xl:w-6xl h-70 xl:rounded-full xl:translate-y-16 xl:-translate-x-64">
            <img className={`xl:-translate-y-36 ${!feature2 ? "xl:translate-x-80" : "xl:translate-x-96"}`} src={img}/>
        </div>

        <div flex className="flex flex-col gap-12 sm:justify-start sm:items-start items-center sm:-translate-y-20 sm:-translate-x-28">
            <div className="text-3xl xl:text-4xl font-bold sm:text-start text-center">{title}</div>
            <div className="sm:text-start text-center  text-gray-400 w-[100%] text-lg xl:w-[70%]">{description}</div>
            <div className="bg-[#5368df] font-bold text-white px-4 py-4 rounded w-32 text-center hover:bg-white hover:border-2 hover:border-[#5368df] hover:text-[#5368df]">More Info</div>
        </div>

    </div>
}