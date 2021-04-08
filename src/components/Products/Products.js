import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { productName, ImageURL, quantity, price } = props.product;
    return (
        <div className="card col-md-3 p-2 mx-5 my-3">
            <img src={ImageURL} style={{ height: '300px' }} className="card-img-top" alt="" />
            <h3 className="card-title">{productName}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <Link to={`/checkout/${productName}`}><button className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button></Link>
        </div>
    );
};

export default Products;