import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer'; // Import Footer component

function App() {
    const marginTop = { marginTop: "20px" };

    return (
        <div className="App">
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Bienvenue />
                    </Col>
                </Row>
            </Container>
            <Footer /> {/* Include Footer here */}
        </div>
    );
}

export default App;
