import "./BasketItemCard.css"

export default function BasketItemCard(image, price, name){

    let amount = 1;


    return(
        <>
            <div className="basket-item-card">
                <div className="basket-item-card-layout-div">
                    <img className="basket-item-card-img" src={image} alt={`${name} image`} />
                    <p>{name}</p>
                </div>
                
                <div className="basket-item-card-layout-div">
                    <div className="qty-selector">
                        <div className="qty-selector-btn">-</div>
                        <div className="qty-selector-amount"><p>{amount}</p></div>
                        <div className="qty-selector-btn">+</div>
                    </div>
                    <p>£{price}</p>
                </div>
                
            </div>
        </>
    )
}