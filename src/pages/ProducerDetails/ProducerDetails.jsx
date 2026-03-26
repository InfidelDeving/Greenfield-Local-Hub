import "./ProducerDetails.css"
import FarmerGoku from "../../assets/GokuRadish.webp"
import { useParams } from "react-router"


export default function ProducerDetails({}){


    //temporary solution to make this page , will later be replaced with real database in future versions

    const fake_db= [
        {
            _id:"001",
            name:"Farmer Goku",
            image:FarmerGoku,
            description:"the greatest producer to ever produce, incredible taste, tons of nutrients and all of that.  SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
            address_line1: "address_line1",
            address_line2:"address_line2",
            address_line3:"address_line3"
        },
        {
            _id:"002",
            name:"Farmer Goku2",
            image:FarmerGoku,
            description:"the greatest producer to ever produce, incredible taste, tons of nutrients and all of that.  SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT",
            address_line1: "address_line1",
            address_line2:"address_line2",
            address_line3:"address_line3"
        },

    ]


    const _id = useParams(); 
    console.log(_id)
    //filters database to show only the object with "_id" that match URL parameter, example /producer/001
    //this means the rendering is messy as it takes the object information from the object of index 0 in the array.
    // again, this is only temporary until real database and backend are functional
    const producer_arr= fake_db.filter(fake_db => fake_db._id===_id.producer);
    console.log(producer_arr)


    
    if (producer_arr[0] == undefined){

        return(
            <> 
                <h1 className="error-not-found">Error 404: Item not found</h1>
            </>
        )
    }else{

        return(
                <>      {/*the rendering in queston:*/}
                    <div className='page-cont'>
                        <div className="green-cont producer-details-cont">
                            <h1 className="producer-details-name">{producer_arr[0].name}</h1>
                            <img src={producer_arr[0].image} alt="producer image" className="producer-details-img"/>
                            <h2 className="producer-details-description-h2">Description</h2>
                            <p className="producer-details-description">{producer_arr[0].description}</p>
                            <h3 className="producer-details-Address-h3">Address</h3>
                            <p>{producer_arr[0].address_line1}</p>
                            <p>{producer_arr[0].address_line2}</p>
                            <p>{producer_arr[0].address_line3}</p>
                        </div>
                    </div>
                </>
            )    
        }
    }