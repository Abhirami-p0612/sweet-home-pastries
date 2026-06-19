import Header from "./Header"
import data from "../data"
import Item from "./Item"
import Info from "./Info"
export default function Collection(
    {
    currentCake,
    cakes
}) {
    const Items = data.map((item) => {
        return (
            <Item
                key={item.id}
                {...item}
            />
        )
    })
    

    return (
        <>
            <div 
                id="collection"
                key={currentCake}
                className="page-collection">
                    <Info />
                <div className="container-c" >
                    
                    <h1> Our Collections</h1>
                    <div className="collection">
                        {Items}
                    </div>
                </div>

            </div>

        </>
    )
}