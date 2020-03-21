import React from 'react';
import { Card, Button, ListGroup } from "react-bootstrap";

class Movie extends React.Component {
    htmlMovie = () => this.props.moviesList.map((movie, i) => {
        return (
            <div className="movieCard" key={i}>
                <Card className="col-md-xl-xs-3" style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title className="text-truncate">{movie.title}</Card.Title>
                        <Card.Text className="text-truncate">
                            {movie.overview}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>

                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    render() {
        return (
            <div className="row">
                {this.htmlMovie()}
            </div>)

    }
};



export default Movie;