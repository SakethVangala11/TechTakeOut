import React from 'react';
import ReactDom from 'react-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const Food = (props) => {
    return (
        <div style={{flex:"1 0 21%",marginBottom:"20px"}}>
            <Card
                style={{
                    width:"300px",
                    backgroundColor: "#e0dfe8"
                    
                }}
            >
                <CardContent>
                    <img src={props.image} width='100%' height='200px' />
                    <h3 style={{}}>{props.item}</h3>
                    <p>{props.descr}</p>
                    <h3 style={{}}>{props.cost}</h3>


                </CardContent>
                                <hr  style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor : '#000000'
                }}/>
                <CardActions>
                    <Button size="medium" style={{backgroundColor:"#58627a",color:"white",textAlign:"center"}} >Order Now</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default Food;