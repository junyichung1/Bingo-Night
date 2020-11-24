import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Footer.css'

function footer(props) {
    return(
        <div className="footerbar">
        <form onsubmit="setTimeout(function(){window.location.reload();},5000);">
        <div className="title">Don't Miss Out on Any Games!</div>
        <input className="inputbar" type="text" placeholder="Email" name="email"></input>
        <Popup trigger={<button className="submitbutton" type="submit">SIGN UP</button>} position="right center">
        <div>Your Email has been submitted</div>
        </Popup>
        
        </form>
        </div>
    )
}

export default footer;