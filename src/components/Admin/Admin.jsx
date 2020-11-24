import React from "react";
import AdminItem from "../AdminItem/AdminItem"
import "./Admin.css"

function admin(props) {
    let users = props.users ?
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th> 
                <th>Email</th>
            </tr>
        </thead> 
    </table> 
    {props.users.map(user => (
        
                    <AdminItem 
                    name={user.name}
                    email={user.email}
                    />
                    ))}
                    </>
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