import {createRoot} from "react-dom/client"
import SweetHome from "./components/SweetHome"
import Collection from "./components/Collection"
import Story from "./components/Story"
import Footer from "./components/Footer"

import React from "react";
import Redvelvet from "./images/redvelvet.png"
import Chocolate from "./images/Chocolate.png"

export default function App() {

    const cakes = [
        {
            img: Redvelvet,
            alt: "RedVelvet",
            background: "linear-gradient(135deg, #2e0c13, #a03b4d)",
            footerBackground: "linear-gradient(100deg, #4a1621, #6b2330)"
        },
        {
            img: Chocolate,
            alt: "Chocolate",
            background: "linear-gradient(135deg, #1f120c, #6b4226)",
            footerBackground: "linear-gradient(100deg, #241711, #4a2d1c)"
        }
    ];

    const [currentCake, setCurrentCake] = React.useState(0);
    React.useEffect(() => {
    document.body.style.background =
        cakes[currentCake].background;
}, [currentCake]);
    return (
        <>
            <div 
                className="page" 
                style={{
                    background: cakes[currentCake].background
                }}>
            
                <SweetHome
                    currentCake={currentCake}
                    setCurrentCake={setCurrentCake}
                    cakes={cakes}
                />
                <Collection 
                currentCake={currentCake}
                cakes={cakes}
                />

                <Story 
                currentCake={currentCake}
                cakes={cakes}        
                />
                <Footer
                footerBackground={cakes[currentCake].footerBackground}
                    />
            </div>
            
            

        </>
            
    )
}
