import{React, Component} from 'react';
import img1 from "./../img1.jpg"
import img2 from "./../img2.jpg"

export class Card extends Component{

    render(){

        return(

        <div className="bigcard" >
            <div className="card" >
                <div className="item1" >
                <img src={img1}  className="image"/>
                </div>
                <div className="item2" >
                        <p>Stays</p>
                        <p>Homes,boutique,hotel et more</p>
                </div>
        </div>

        <div className="card" >
                <div className="item1" >
                <img src={img2}  className="image"/>
                </div>
                <div className="item2" >
                    <p>Experience</p>
                    <p>Activities hosted by locals</p>
                </div>
        </div>

        <div className="card" >
                <div className="item1" >
                <img src="/img3.jpg"  className="image" /> 
                </div>
                <div className="item2" >
                    <p>Adventures</p>
                    <p>Hotel trips including lodging</p>
                </div>
        </div>

            <div className="card" >
                <div className="item1" >
                <img src="/img4.jpg"  className="image" /> 
                </div>
                <div className="item2" >
                    <p>Restaurants</p>
                    <p>Popular spots ro eat et drink</p>
                </div>
            </div>

        </div>

        )
    }
        

}
