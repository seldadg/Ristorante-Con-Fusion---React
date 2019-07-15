import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedDish: null
    //     }
    // }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }

    componentDidMount(){
        console.log('DishDetail Component componentDidMount invoked')
    }



    renderComment(comment) {

        if (comment != null) {
            const comments = comment.map(comm => {
                return (
                    <li key={comm.id}>
                        <div>
                            <p>{comm.comment}</p>
                            <p>--{comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}</p>
                        </div>
                    </li>
                )
            })
            return (comments);
        }
        else {
            return (
                <div></div>
            )
        }


    }

    render() {
        const dish = this.props.selectedDish;

        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle><h3>{dish.name}</h3></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComment(dish.comments)}
                        </ul>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}
export default DishDetail;


// class DishDetails extends Component {

//     renderDish = (selectedDish) => {
//         return (
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
//                     <CardBody>
//                         <CardTitle>{selectedDish.name}</CardTitle>
//                         <CardText>{selectedDish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     };

//     renderComments = (comments) => {
//         if (comments) {
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <h4>Comments</h4>
//                     <ul className="list-unstyled">
//                         {comments.map((value, index) => {
//                             return <li key={value.id}>
//                                 <p>{value.comment}</p>
//                                 <p> -- {value.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(value.date)))}</p>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//             )
//         }
//     };

//     render() {
//         const selectedDish = this.props.selectedDish;
//         if (selectedDish) {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderDish(selectedDish)}
//                         {this.renderComments(selectedDish.comments)}
//                     </div>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>

//                 </div>
//             );
//         }
//     }
// }

// export default DishDetails;