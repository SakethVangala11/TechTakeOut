import React from 'react';
import ReactDOM from 'react-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Food from "./food";
import Data from "./data";
import Data_rest from './restaurants';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonAppBar from './ButtonAppBar';
import SearchField from "react-search-field";
import IconButton from '@material-ui/core/IconButton';
import Options from './Options';

import  Carouse from './Carosuel';
import Form from "react-bootstrap/Form";
import Login from "./login";
import SignUp from './signup';
import  { useState } from "react";




class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            renderView: 0
        };
    }

    render(){
        //const [openLoginRoute, setOpenLoginRoute] = useState({renderView:0});
         function clickBtn(e) {
            this.setState({
              renderView: 1
            });
          };
          function clickBtns(s) {
            this.setState({
              renderView: 2
            });
          };

          clickBtn = clickBtn.bind(this);
          clickBtns = clickBtns.bind(this);


            switch (this.state.renderView) {
            case 1:
              return <Login />;
            case 2:
              return <SignUp/>;
            default:
                return(
                    <div>
                        
                        <div style={{marginBottom:"20px"}}>
                            <ButtonAppBar onLoginBtnClick={clickBtn} onSigninBtnClick={clickBtns}></ButtonAppBar>
                        </div>
                       <div>
                       <Carouse></Carouse>
                       </div>
                        <div className="options" style={{marginTop:"20px",marginLeft:"50px",marginRight:"65px",marginBottom:"20px"}}>
                        <Options></Options>
                        </div>
                        
                       
                       
                       
                       
                    <div><h2 style={{textAlign:"center",marginBottom:"20px",backgroundColor:"#979ba6",display:"block",marginLeft:"50px",marginRight:"65px",padding:"10px"}}>Food</h2></div>
                    <div style={{display:"inline-block",display:"flex",flexWrap:"wrap",justifyContent:"space-around" ,marginLeft:"50px"}}>
                      
                            {
                                
                                Data.map(d=><Food item={d.name} image={d.image} cost={d.price} descr={d.Description}></Food>)}
                                
                                </div>
                                
                                <h2 style={{textAlign:"center",marginBottom:"20px",backgroundColor:"#979ba6",display:"block",marginLeft:"50px",marginRight:"65px",padding:"10px"}}>Restaurants</h2>
                                <div style={{display:"inline-block",display:"flex",flexWrap:"wrap",justifyContent:"space-around" ,marginLeft:"50px"}}>
                                {
                                Data_rest.map(d=><Food item={d.name} image={d.image} descr={d.Description}></Food>)
                            }
                            
                           
                        
                             
        
            </div>
            </div>
            )
          }

        // return(
        //                 <div>
                            
        //                     <div style={{marginBottom:"20px"}}>
        //                         <ButtonAppBar onLoginBtnClick="clickBtn"></ButtonAppBar>
        //                     </div>
        //                    <div>
        //                    <Carouse></Carouse>
        //                    </div>
        //                     <div className="options" style={{marginTop:"20px",marginLeft:"50px",marginRight:"65px",marginBottom:"20px"}}>
        //                     <Options></Options>
        //                     </div>
                            
                           
                           
                           
                           
        //                 <div><h2 style={{textAlign:"center",marginBottom:"20px",backgroundColor:"#979ba6",display:"block",marginLeft:"50px",marginRight:"65px",padding:"10px"}}>Food</h2></div>
        //                 <div style={{display:"inline-block",display:"flex",flexWrap:"wrap",justifyContent:"space-around" ,marginLeft:"50px"}}>
                          
        //                         {
                                    
        //                             Data.map(d=><Food item={d.name} image={d.image} cost={d.price} descr={d.Description}></Food>)}
                                    
        //                             </div>
                                    
        //                             <h2 style={{textAlign:"center",marginBottom:"20px",backgroundColor:"#979ba6",display:"block",marginLeft:"50px",marginRight:"65px",padding:"10px"}}>Restaurants</h2>
        //                             <div style={{display:"inline-block",display:"flex",flexWrap:"wrap",justifyContent:"space-around" ,marginLeft:"50px"}}>
        //                             {
        //                             Data_rest.map(d=><Food item={d.name} image={d.image} descr={d.Description}></Food>)
        //                         }
                                
                            
                                 
            
        //         </div>
        //         </div>
        //             )
        
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));