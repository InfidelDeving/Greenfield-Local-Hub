import "./ItemCard.css"

export default function ItemCard({image, name, price, weight, stock, home_page}){

    return(
        <>
        <div className="item-card">
            <img src={image} alt={`${name} image`} /> {/* MAKE THIS A NAVLINK TO ITEM PAGE LATER */}
            <h2 className="item-name">{name}</h2> {/* MAKE THIS A NAVLINK TO ITEM PAGE LATER */}
            <p>£: {price}</p>
            <p>weight/unit: {weight}g</p>
            <p>Cost/KG: £{(price / weight) * 1000}</p>
            <p>Stock Available: {stock}</p>
            {home_page ? <button className="item-card-btn">View Details</button> : <button className="item-card-btn">Add to basket</button>}
        </div>
        </>
    )
}