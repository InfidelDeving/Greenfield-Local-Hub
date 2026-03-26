import "./ProducerCard.css"
import { NavLink } from "react-router"

export default function ProducerCard({name, image, tempdescription, _id}){

    console.log(_id)

    return(
        <>
        <div className="producer-card">
            <NavLink to={`/producer/${_id}`} className="producer-name">
                <h2 className="producer-name">{name}</h2>
            </NavLink>
            <img src={image} alt="producer image" />
            <p>{tempdescription}</p>
            <NavLink to={`/producer/${_id}`} className="item-card-btn">
                <button className="item-card-btn">View Details</button>
            </NavLink>
        </div>
        </>
    )
}