import React, { Component } from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './HomelessSheltersList.css';

class HomelessShelter extends Component {

    editShelter() {
        console.log("Editing shelter");
    }

    deleteShelter() {
        console.log("Deleting shelter");
    }

    render() {
        const shelter = this.props.shelter;
        return (
            <Card className="card">
                <div id="color_gradient">Hi</div>
                <CardBody>
                    <CardTitle>{shelter.name}</CardTitle>
                    <CardSubtitle> {shelter.address} </CardSubtitle>
                    <CardText> {shelter.phone} </CardText>
                    <CardText> {shelter.freeBeds} beds available</CardText>
                    <Button color="warning" onClick={this.editShelter} href="EditHomelessShelter">Edit</Button>
                    <Button color="danger" onClick={this.deleteShelter}>Delete</Button>
                </CardBody>
            </Card>
        );
    }
}

export default HomelessShelter;
