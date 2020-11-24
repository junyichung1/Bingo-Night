import React from 'react';


function AdminItem(props) {
    return(
<>
<table>
    <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
    </tr>
</table>

</>
    )
}

export default AdminItem;