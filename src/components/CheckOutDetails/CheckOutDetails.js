import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const CheckOutDetails = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { productName, price, quantity, ImageURL } = props.product;
    const history = useHistory();
    console.log(productName);
    console.log(loggedInUser);
    const handlePlaceOrderBtn = (productName) => {
        history.push(`/order/${productName}`)
        const eventData = {
            productName: productName,
            price: price,
            quantity: quantity,
            ImageUrl: ImageURL,
            ...loggedInUser,
            orderTime: new Date()
        }
        const url = `http://localhost:5000/addOrder`;
        console.log(eventData);
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    }
    return (
        <div className="container">
            {
                props.product.length === 0 && <Spinner className="mx-auto" animation="border" variant="info" />
            }
            <h1>Checkout</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>${price}</td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-warning ml-auto" onClick={() => handlePlaceOrderBtn(productName)}>Place Order</button>
        </div>
    );
};

export default CheckOutDetails;