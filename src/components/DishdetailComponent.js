import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component{
    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments(comments){
        const Comments=comments.map((Comment)=>{
            return(
                <ul className='list-unstyled'>
                    <li>-- {Comment.author}, {Comment.date}</li>
                    <li>{Comment.comment}</li>
                </ul>
            );
        });
        return(
            <div>
                <h4>Comments</h4>
                {Comments}
            </div>
        );
    }
    render(){
        const dish=this.props.dish;
        if (dish !=null)
            return(
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}
export default DishDetail;