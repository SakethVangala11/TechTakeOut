import React from 'react';
import Button from '@material-ui/core/Button';
export default function Options() {
    return(
        <div style={{ backgroundColor: "#404552" }}>
            <div style={{display:"flex",justifyContent:"space-between",padding:"15px"}}>
                            <Button color="white" style={{ marginLeft:"200px",color:"white",backgroundColor: "#e7a358", marginRight: "20px",padding:"10px"}}>TakeAway</Button>
                            <Button color="inherit" style={{ color:"white",backgroundColor: "#e7a358" ,float:"right",marginRight: "20px",padding:"10px"}}>DineIn</Button>
                            <Button color="inherit" style={{ marginRight:"200px",color:"white",backgroundColor: "#e7a358" ,float:"right",padding:"10px"}}>Order</Button>
                        </div>
        </div>
    );

}
