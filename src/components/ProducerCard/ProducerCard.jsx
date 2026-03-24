import "./ProducerCard.css"

export default function ProducerCard({name, image, tempdescription}){

    return(
        <>
        <div className="producer-card">
            <h2 className="producer-name">{name}</h2> {/* MAKE THIS A NAVLINK TO producer PAGE LATER */}
            <img src={image} alt="producer image" /> {/* MAKE THIS A NAVLINK TO producer PAGE LATER */}
            <p>{tempdescription}</p>
            <button className="item-card-btn">View Details</button>{/* MAKE THIS A NAVLINK TO producer PAGE LATER */}
        </div>
        </>
    )
}