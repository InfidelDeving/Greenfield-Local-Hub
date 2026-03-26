import "./Shop.css"
import ItemCard from "../../components/ItemCard/ItemCard"
import strawberry from "../../assets/strawberry.png"
import BasketItemCard from "../../components/BasketItemCard/BasketItemCard"



export default function Shop(){

    return(
        <>
            <div className="page-cont-row">
                <div className="green-cont">
                    <h1 className="shop-h1">Shop for produce</h1>
                    <div className="shop-page-card-cont">
                    <ItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                        weight={300}
                        stock={999}
                        home_page={false}
                    />
                    <ItemCard
                        image={strawberry}
                        name="Strawberry"
                        price="2.10"
                        weight={300}
                        stock={999}
                        home_page={false}
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
                <div className="green-cont">
                    <h1 className="shop-h1">Basket</h1>
                    <div className="basket-cont">
                        <BasketItemCard name="Strawberry" image={strawberry} price="2.10">
                            
                        </BasketItemCard>
                    </div>

                </div>
            </div>
        </>
    )
}