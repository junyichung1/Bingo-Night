import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Footer.css'

function footer(props) {
    return(
        <div className="footerbar">
        <form action="/confirmation">
        <div className="title">Don't Miss Out on Any Games!</div>
        <input className="inputbar" type="text" placeholder="Email" name=""></input>
        <button className="submitbutton" type="submit">SIGN UP</button>
        
        
        </form>
        </div>
    )
}

export default footer;