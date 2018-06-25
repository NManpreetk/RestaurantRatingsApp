import React, {Component} from 'react';

function ListRestaurants(props){
        
        return ( 
        
            <div className = 'restaurant-list' > 
            {props.restaurants.map((restaurant) => ( 
                    <div key ={restaurant.id}  className='restaurant-list-item' > 
                    <div className = "restaurant-avatar"/>
                    <img src = {restaurant.avatarURL}/>
                    <div className ='restaurant-details'/>
                    <p>{restaurant.name}</p>
                    <p>{restaurant.description}</p>
                    <button onClick={()=>props.increaseRating(restaurant)} className="restaurant-add">
                    +
                    </button> 
                    <span>{restaurant.rating}</span>
                    <button onClick={()=>props.decreaseRating(restaurant)} className="restaurant-remove">
                    -
                    </button> 
                    <span>{}</span>
            </div>

                    ))
            }) 
            </div>
        )
        render: {
                return(
        <div className='print-message' >
       {JSON.stringify(this.state)}
        <div className='print-message-top'>
          <input
            className='messages'
            type='text'
            placeholder='comment'
            value={this.state.message}
            onChange={(event) => this.updateMessage(event.target.value)}
          />
        </div>
        </div>
                )
        }
    }

export default ListRestaurants