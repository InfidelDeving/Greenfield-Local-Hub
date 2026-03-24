import "./ItemCard.css"

export default function ItemCard({image, name, price, weight, stock}){

    return(
        <>
        <div className="item-card">
            <img src={image} alt="item image" />
            <h2 className="item-name">{name}</h2>
            <p>£: {price}</p>
            <p>weight/unit: {weight}g</p>
            <p>Cost/KG: {price}</p> {/*todo change this to calc later */}
            <p>Stock Available: {stock}</p>
            <button className="item-card-btn">Add to cart</button>
        </div>
        </>
    )
}