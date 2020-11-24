import React from 'react';
import './Footer.css'

function footer(props) {
    return(
        <>
        <form>
        <div>Don't Miss Out on Any Games!</div>
        <input className="inputbar" type="text" placeholder="Email" name="email"></input>
        <button className="submitbutton" type="submit">SIGN UP</button>
        </form>
        </>
    )
}

export default footer;