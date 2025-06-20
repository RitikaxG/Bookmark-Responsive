import { useState, createContext } from "react";

export const FeatureContext = createContext();

export const FeatureProvider = ({children}) => {

    const [ feature1, setFeature1 ] = useState(true);
    const [ feature2, setFeature2 ] = useState(false);
    const [ feature3, setFeature3 ] = useState(false);

    const [sidebarOpen, setSidebarOpen ] =  useState(false);


    return <FeatureContext.Provider value={ {feature1, setFeature1, feature2, setFeature2, feature3, setFeature3, sidebarOpen, setSidebarOpen }}>
        {children}
    </FeatureContext.Provider>
}