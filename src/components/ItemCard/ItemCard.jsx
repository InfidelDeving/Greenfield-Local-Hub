import { NavLink } from "react-router"
import "./ItemCard.css"

export default function ItemCard({image, name, price, weight, stock, home_page, _id}){

    return(
        <>
        <div className="item-card">
            <img src={image} alt={`${name} image`} />
            <NavLink to={`/item/${_id}`} className="item-name"><h2 className="item-name">{name}</h2></NavLink>
            <p>£: {price}</p>
            <p>weight/unit: {weight}g</p>
            <p>Cost/KG: £{(price / weight) * 1000}</p>
            <p>Stock Available: {stock}</p>
            {home_page ? <NavLink className="item-card-btn" to={`/item/${_id}`}><button className="item-card-btn">View Details</button></NavLink>  : <button className="item-card-btn">Add to basket</button>}
        </div>
        </>
    )
}