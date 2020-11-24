import React from 'react';
import './AdminItem.css'

function AdminItem(props) {
    return(
<>
<table className="center">
    <tr className="rows">
        <td className="head">{props.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <td className="head">{props.email}</td>
    </tr>
</table>

</>
    )
}

export default AdminItem;