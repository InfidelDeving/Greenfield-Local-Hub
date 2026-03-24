import ItemCard from '../../components/ItemCard/ItemCard'
import strawberry from "../../assets/strawberry.png"
import ProducerCard from '../../components/ProducerCard/ProducerCard'
import FarmerGoku from "../../assets/GokuRadish.webp"
import "./Home.css"

export default function Home(){


    return(
        <>
            <div className='home'>
                <div className='green-cont home-welcome'>
                    <h1 className='home-h1'>Welcome to Greenfield Local Hub</h1>
                    <p>We are a cooperative of farmers and producers aiming to provide organic, healthy and affordable produce for the local community.</p>
                    <p>Please take a look at some of our most popular products and producers below</p>
                </div>
                <div className='green-cont producers-cont'>
                    <h1 className='home-h1'>Producers</h1>
                    <div className='home-card-cont'>
                        <ProducerCard
                            image={FarmerGoku}
                            name="Farmer Goku"
                            tempdescription="GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!?"
                        />
                        <ProducerCard
                            image={FarmerGoku}
                            name="Farmer Goku"
                            tempdescription="GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!?"
                        />
                        <ProducerCard
                            image={FarmerGoku}
                            name="Farmer Goku"
                            tempdescription="GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!?"
                        />
                        <ProducerCard
                            image={FarmerGoku}
                            name="Farmer Goku"
                            tempdescription="GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!?"
                        />
                        <ProducerCard
                            image={FarmerGoku}
                            name="Farmer Goku"
                            tempdescription="GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!?"
                        />
                        <ProducerCard
                            image={FarmerGoku}
                            name="Farmer Goku"
                            tempdescription="GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!? GOKU!?"
                        />
                    </div>
                </div>
                <div className='green-cont items-cont'>
                    <h1 className='home-h1'>Best Selling Items</h1>
                    <div className='home-card-cont'>
                        <ItemCard
                            image={strawberry}
                            name="Strawberry"
                            price="2.10"
                            weight={300}
                            stock={999}
                            home_page={true}
                        />
                        <ItemCard
                            image={strawberry}
                            name="Strawberry"
                            price="2.10"
                            weight={300}
                            stock={999}
                            home_page={true}
                        />
                        <ItemCard
                            image={strawberry}
                            name="Strawberry"
                            price="2.10"
                            weight={300}
                            stock={999}
                            home_page={true}
                        />
                        <ItemCard
                            image={strawberry}
                            name="Strawberry"
                            price="2.10"
                            weight={300}
                            stock={999}
                            home_page={true}
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
            </div>
        </>
    )
}