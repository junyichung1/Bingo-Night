import React from 'react';
import Eventspic from '../../images/Group-14.png'

function events(props) {
    let event = props.user ?
    <div>

        <>
        <div className="miditem">
        
            <img src={Eventspic}></img>
            
        </div>
        </>
    </div>
    :

    <div><h3 className="logout">Please Log in to see the Rankings & Upcoming Events</h3>
    </div>
    return(
        <div>

            {event}
        </div>
    )
}

export default events;