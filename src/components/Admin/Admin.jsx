import React from "react";
import AdminItem from "../AdminItem/AdminItem"
import "./Admin.css"

function admin(props) {
    let users = props.user ?
    <div className="table">
    <table className="center">
        
            <tr className="rows">
                <th className="head"><u>Name</u></th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <th className="head"><u>Email</u></th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tr>
        
    </table> 
    {props.users.map(user => (
        
                    <AdminItem 
                    name={user.name}
                    email={user.email}
                    />
                    ))}
                    </div>
    :
<>
<div>nothing to report</div>
</>
        
     return (
         <div>
             {users}
         </div>
     )   
    
}

export default admin;