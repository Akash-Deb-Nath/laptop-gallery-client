import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CheckOutDetails from '../CheckOutDetails/CheckOutDetails';

const CheckOut = () => {
    const { productName } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/checkout/' + productName)
            .then(res => res.json())
            .then(data => setSelectedProduct(data[0]))
    }, [])
    return (
        <CheckOutDetails product={selectedProduct}></CheckOutDetails>
    );
};

export default CheckOut;