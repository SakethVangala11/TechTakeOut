import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchField from "react-search-field";
import Login from './login';
import Link from '@material-ui/core/Link';
import  { useState } from "react";

export default function ButtonAppBar(props) {

    //const [openLoginRoute, setOpenLoginRoute] = useState({renderView:0});
    // state={
    //     renderView:0
    //     };
        function clickBtn(e) {
            props.onLoginBtnClick();
          };
          function clickBtns(s) {
            props.onSigninBtnClick();
          };

          return (
            <div >
                <AppBar position="static" style={{ backgroundColor: "#404552" }}>
                    <Toolbar >
                        <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                            <div style={{display:"flex"}}>
                                <Typography variant="h6" style={{marginRight:"20px"}} >
                                    Tech Takeout
                                </Typography>
                                 <SearchField placeholder="Search..."  />
                            </div>
                            <div style={{display:"flex"}}>
                                
                                <Button color="inherit"  onClick={clickBtn } style={{ marginLeft:"20px",backgroundColor: "#e7a358", marginRight: "20px",float:"right"}}>Login</Button>
                                
                                <Button color="inherit" onClick={clickBtns} style={{ backgroundColor: "#e7a358" ,float:"right"}}>Signup</Button>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );

        //   switch (openLoginRoute.renderView) {
        //     case 1:
        //       return <Login />;
        //     default:
        //       return (
        //         <div >
        //             <AppBar position="static" style={{ backgroundColor: "#404552" }}>
        //                 <Toolbar >
        //                     <div style={{display:"flex"}}>
        //                         <div style={{display:"flex"}}>
        //                             <Typography variant="h6" style={{marginRight:"20px"}} >
        //                                 Tech Takeout
        //                             </Typography>
        //                             <SearchField placeholder="Search..."  />
        //                         </div>
        //                         <div style={{display:"flex"}}>
                                    
        //                             <Button color="inherit"  onClick={clickBtn } style={{ marginLeft:"20px",backgroundColor: "#e7a358", marginRight: "20px",float:"right"}}>Login</Button>
                                    
        //                             <Button color="inherit" style={{ backgroundColor: "#e7a358" ,float:"right"}}><a href="login.js" >Signup</a></Button>
        //                         </div>
        //                     </div>
        //                 </Toolbar>
        //             </AppBar>
        //         </div>
        //     );
        //   }

    
}