import React, { useEffect, useState } from 'react';
import { Container, Jumbotron, Spinner } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Laptop Gallery!</h1>
                    <p>
                        Here you can buy your desire laptop.You can also sell laptop.If you want to sell laptop go to admin page.
                    </p>
                </Container>
            </Jumbotron>
            <div className="row">
                {
                    products.length === 0 && <Spinner className="mx-auto" animation="border" variant="info" />
                }
                {
                    products.map(product => <Products product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;