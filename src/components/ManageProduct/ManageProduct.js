import React, { useEffect, useState } from 'react';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';
import Products from '../Products/Products';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className=" container row">
            {
                products.map(product => <ManageProductDetails product={product}></ManageProductDetails> )
            }
        </div>
    );
};

export default ManageProduct;