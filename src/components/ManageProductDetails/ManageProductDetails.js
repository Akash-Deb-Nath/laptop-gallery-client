import React from 'react';
import { useHistory } from 'react-router';

const ManageProductDetails = (props) => {
    const { productName, ImageURL, quantity, price, _id } = props.product;
    const history = useHistory();

    function handleDeleteBtn(id) {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert("deleted")
            })
    }
    return (
        <div className="card col-md-2 p-2 mx-3 my-3">
            <h6 className="card-title">{productName}</h6>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <button className="btn btn-danger" onClick={() => handleDeleteBtn(_id)}>Delete</button>
        </div>
    );
};

export default ManageProductDetails;