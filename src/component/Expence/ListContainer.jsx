import React, { useState } from "react";
// interface Props{
//     list : string[],
// }
function ListContainer(){
    const a = ["adsf","daf"];
    const [selectedIndex,setSelectedIndex]=useState(-1);
    return(
        <>
            <ul className="list-group">
                {
                    a.map(
                        (item,index) => selectedIndex===index?
                        <li className ="list-group-item active" 
                        onClick={()=>setSelectedIndex(index)}> 
                        {item+" "+index}</li>
                        :
                        <li className ="list-group-item " 
                        onClick={()=>setSelectedIndex(index)}> 
                        {item+" "+index}</li>
                    )
                }
            </ul>
        </>
    );
}
export default ListContainer;