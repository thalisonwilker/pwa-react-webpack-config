import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component{

    render(){
        return (
            <section>
                <Grid >
                    <Row >
                        <Col xs={12} md={8} className="mx-auto">
                        <h1 className="text-center">
                            React bootstrap
                        </h1>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }

}

export default App;