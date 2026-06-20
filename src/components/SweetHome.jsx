import React from "react";
import Header from "./Header"
import Redvelvet from "../images/redvelvet.png"
import Chocolate from "../images/Chocolate.png"
import ButterCream from "../images/butter cream.png"
export default function SweetHome({
                    currentCake,
                    setCurrentCake,
                    cakes
                }) 
{


    

    function Swap() {
        setCurrentCake((prev) => (prev + 1) % cakes.length);
    }
    return (
        <>
        <div 
        id="sweethome"
        key={currentCake}
                className="page-sweet-home">
            <Header />
            <div className="container" >
                <div className="sweet-home">
                    <h1>A Slice of Luxury</h1>
                    <p>Experience handcrafted cakes inspired by artistry and flavor. 
                        Thoughtfully baked, beautifully presented, and created to make every moment unforgettable.

                        Explore a world of signature creations where rich flavors, delicate textures, 
                            and elegant presentation come together in perfect harmony. Each cake is a 
                            celebration of craftsmanship, carefully designed to offer a unique experience with every bite.

                            Indulge in our collection and discover the beauty of desserts reimagined through creativity, passion, and timeless baking traditions.</p>
                        
                </div>
                <div className="cake-wrapper">
                    <button onClick={Swap} className="explore">
                        <img 
                        src={cakes[currentCake].img} 
                        alt={cakes[currentCake].alt}
                        key={currentCake}/>
                    </button>
                </div>
            </div>
            </div>
           

        </>
    )
}