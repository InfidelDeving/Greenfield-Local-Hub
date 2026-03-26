import "./ItemDetails.css"
import strawberry from "../../assets/strawberry.png"
import { useParams } from "react-router";
import { NavLink } from "react-router";

export default function ItemDetails({}){

    const fake_db= [
            {
                _id:"001",
                name:"Strawberry",
                image:strawberry,
                description:"SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
                price:"2.10",
                weight:"300",
                stock: 999,
            },
            {
                _id:"002",
                name:"Strawberry2",
                image:strawberry,
                description:"SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
                price:"2.10",
                weight:"300",
                stock: 999,
            },
    
        ]

    const _id = useParams(); 
    console.log(_id)
    const item_arr= fake_db.filter(fake_db => fake_db._id===_id.item);
    console.log(item_arr)




    if (item_arr[0] == undefined){

        return(
            <> 
                <h1 className="error-not-found">Error 404: Item not found</h1>
            </>
        )
    }else{

        return(
                <>      {/*the rendering in queston:*/}
                    <div className='page-cont'>
                        <div className="green-cont items-details-cont">
                            <h1 className="item-details-name">{item_arr[0].name}</h1>
                            <div className="item-details-layout-div">
                                <img  className="item-details-image" src={item_arr[0].image} alt={`${item_arr[0].name} image`} />
                                <div className="item-details-group-div-column">
                                    <p className="item-details-text">Cost: £{item_arr[0].price}</p>
                                    <p className="item-details-text">Weight: {item_arr[0].weight}g</p>
                                    <p className="item-details-text">Cost/KG: £{(item_arr[0].price / item_arr[0].weight) * 1000}</p>
                                    <p className="item-details-text">Stock Available: {item_arr[0].stock}</p>
                                </div>
                            </div>
                                <div className="item-details-group-div-row">
                                    <div className="item-details-group-div-column">
                                        <h2 className="item-details-description-title">Description</h2>
                                        <p className="item-details-description-text">{item_arr[0].description}</p>
                                    </div>
                                    <NavLink to="/shop" className="item-details-btn"><button>Go to shop</button></NavLink>
                                </div>
                            </div>
                        </div>
                </>
            )    
        }
}