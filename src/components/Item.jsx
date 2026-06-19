export default function Item(props) {

    return (
        <div className="item">
            <img 
                src={props.img.src}
                alt={props.img.alt}
            />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="stock-price">
            <p>Stock:  {props.stock}</p>
            <p>Price:  {props.price}</p>
            </div>

        </div>
    )
}