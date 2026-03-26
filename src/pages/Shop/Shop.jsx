import "./Shop.css"
import ItemCard from "../../components/ItemCard/ItemCard"
import strawberry from "../../assets/strawberry.png"
import BasketItemCard from "../../components/BasketItemCard/BasketItemCard"
import { NavLink } from "react-router"



export default function Shop(){

    return(
        <>
            <div className="page-cont-row">
                <div className="green-cont">
                    <div className="shop-title-layout-div">
                        <h1 className="shop-h1">Shop for produce</h1>
                        <h1 className="shop-h1">Search</h1>
                    </div>

                    <div className="shop-page-card-cont">
                        <ItemCard
                            image={strawberry}
                            name="Strawberry"
                            price="2.10"
                            weight={300}
                            stock={999}
                            home_page={false}
                            _id="001"
                        />
                    <ItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                        weight={300}
                        stock={999}
                        home_page={false}
                        _id="002"
                    />
                    <ItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                        weight={300}
                        stock={999}
                        home_page={false}
                    />
                    </div>
                    
                </div>
                <div className="green-cont basket-cont">
                    <h1 className="shop-h1">Basket</h1>
                    <div className="basket-card-cont">
                    <BasketItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                    />
                    <BasketItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                    />
                    <BasketItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                    />
                    <NavLink className="basket-checkout-button"><button>Checkout</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}