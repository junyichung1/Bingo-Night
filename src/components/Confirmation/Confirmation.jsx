import React from "react";
import confpic from '../../images/confirmation.png';
import './Confirmation.css'

function Confirmation(props) {
    return(
        <>
        <div><img className="confpic" src={confpic}></img></div>
        </>
    )
}

export default Confirmation;