import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Faqs = () => {
    return <div className="flex flex-col gap-8 items-center justify-center">
        <div className="font-bold text-2xl sm:text-4xl">Frequently Asked Questions</div>
        <div className="text-center w-[60%] sm:w-[30%]">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</div>
    </div>
}

const QuestionComponent = ({
    question,
    answer,
    isExpanded,
    onToggle
}) => {

    return <div className={`flex flex-col gap-4 items-center`}>

        <div 
        onClick={()=>{
            onToggle()
        }}
        className="flex text-gray-600 cursor-pointer justify-between w-[350px] sm:w-[640px]">
            <div className="hover:text-red-500">{question}</div>
            <div className={`${isExpanded ? "text-red-500 rotate-180":null}`}><ChevronDown/></div>
        </div>

        <div className={`${!isExpanded ? `hidden`: `text-slate-500 transition-all duration-3000 text-start w-[40%]`}`}>{answer}</div>

        <div className="w-[350px] sm:w-[630px] h-px bg-gray-300"></div>
    </div>
}

export const Accordians = () => {
    const [ expandedId, setExpandedId ] = useState(false);

    // Sets the id of accordian that's toggled
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    }

    const accordians = [
        {
            id       : 1,
            question : "What is Bookmark?",
            answer   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        },{
            id       : 2,
            question : "How can I request a new browser?",
            answer   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        },{
            id       : 3,
            question : "Is there a mobile app?",
            answer   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        },{
            id       : 4,
            question : "What about other Chromium browsers?",
            answer   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?"
        }
    ]

    return <div className="flex flex-col gap-12 items-center justify-center  w-full mt-16 mb-24">
    {accordians.map(accordian => (
        <QuestionComponent  key={accordian.id} 
                            question={accordian.question} 
                            answer={accordian.answer}
                            isExpanded={expandedId === accordian.id}      
                            onToggle={() => toggleExpand(accordian.id)} // Pass function to set the expanded id of acordian that is toggled 
        />
    ))}
    </div>
}