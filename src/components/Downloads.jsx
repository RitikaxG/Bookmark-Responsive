export const Download = () => {
    return <div className="flex flex-col gap-10 items-center mt-16">
        <div className="font-bold text-3xl md:text-4xl">Download the extension</div>
        <div className="text-gray-400 text-center w-[70%] sm:w-[50%] xl:w-[30%]">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</div>
    </div>
}

export const Extensions = () => {
    const extensions = [
        {
            browserImg     : "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg",
            browserName    : "Chome",
            browserVersion : "62"
        },{
            browserImg     : "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg",
            browserName    : "Firefox",
            browserVersion : "55"
        },{
            browserImg     : "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg",
            browserName    : "Opera",
            browserVersion : "46"
        }
    ]

    return <div className="flex sm:flex-row flex-col items-center justify-center gap-12 mt-16 mb-24 w-full">
        {extensions.map(extension => (
            <ExtensionComponent browserImg={extension.browserImg} browserName={extension.browserName} browserVersion={extension.browserVersion}/>
        ))}
    </div>
}

const ExtensionComponent = ({
    browserImg,
    browserName,
    browserVersion
}) => {
    return <div className={`${browserName === "Firefox"? "translate-y-4": ""} ${browserName === "Opera" ? "translate-y-8" : ""} flex flex-col shadow-xl py-12 justify-center items-center w-[60%] sm:w-[28%] xl:w-[20%]`}>

        <div className="mb-8">
            <img src={browserImg} alt={browserName}/>
        </div>

        <div className="flex font-bold text-2xl mb-4">
            <div className="pr-2">Add to</div>
            <div>{browserName}</div>
        </div>

        <div className="flex text-gray-400 mb-4">
            <div className="pr-2">Minimum Version</div>
            <div>{browserVersion}</div>
        </div>

        <div class="w-full h-1 bg-[repeating-linear-gradient(to_right,_#cbd5e1_0,_#cbd5e1_4px,_transparent_4px,_transparent_16px)] mb-8"></div>

        <div className="bg-[#5368df] text-white rounded-lg px-2 xl:px-4 py-4 hover:bg-white hover:text-[#5368df] hover:border-2 hover:border-[#5368df] text-center w-50">Add & Install Extension</div>
    </div>
}