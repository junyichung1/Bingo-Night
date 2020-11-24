import React from 'react';
import Rankpic from '../../images/rankpic.png'

function rankings(props) {
    let ranking = props.user ?
    <div>

        <>
        <div className="miditem">

        <img src={Rankpic}></img>
        </div>
        </>
        </div>
        :
        <div>
            <h3 className="logout"></h3>
        </div>
    
    return(
<>
{ranking}
</>
    )
}

export default rankings;