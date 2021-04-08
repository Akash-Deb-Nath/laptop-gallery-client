import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Container, Jumbotron, Spinner } from 'react-bootstrap';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { productName } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/order/' + productName)
            .then(res => res.json())
            .then(data => {
                setProduct(data[0])
                console.log(data)
            })
    }, [])
    console.log(product);
    const { name, email, imageURL, price, quantity, orderTime } = product;
    return (
        <div className="container">
            {
                product.length === 0 && <Spinner className="mx-auto" animation="border" variant="info" />
            }
            <Jumbotron fluid>
                <Container>
                    <h1>Order Details</h1>
                    <p>
                        Hello sir,Here is your order details.
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Jumbotron>
                    <div>
                        <p>This order placed in {orderTime}</p>
                        <p>
                            <b>Order placed by: </b> {name}
                        </p>
                        <p>
                            <b>Product:</b> {productName}
                        </p>
                        <p>
                            <b>Product quantity:</b> {quantity}
                        </p>
                        <p>
                            <b>Price: </b> ${price}
                        </p>
                        <p>
                            The product will reached in your home within 7 days.
                            You will notify with the <b>{email}</b>.
                        </p>
                        <p style={{backgroundColor: 'red'}} className="p-2">
                            If you have faced any problem with our products or if you don't get your ordered product ontime,you can contact with us by <b>017********</b>.
                        </p>
                    </div>
                </Jumbotron>
            </Container>
        </div>
    );
};

export default Order;