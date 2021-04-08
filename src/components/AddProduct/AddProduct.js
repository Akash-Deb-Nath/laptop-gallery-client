import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [state, setState] = useState({
        productName:"",
        quantity:"",
        price:""
    });
    const onSubmit = (event) => {
        const eventData = {
           ...state,
            ImageURL: imageURL,
        }
        const url=`http://localhost:5000/addProduct`;
        console.log(eventData);
        fetch(url,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
        .then(data => {
            alert("Product is added ");
        })
    };

    const handleInputBlur = (event) => {
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
          }));
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'f4553f022206a2d036ea15fbfd192c18');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="mx-5 mt-5 p-5 add-product-field">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="mt-3">Laptop Name</h5>
                <input className="input-style" name="productName" defaultValue="Laptop" id="name" onBlur={handleInputBlur} ref={register} />

                <h5 className="mt-3">Add Quantity</h5>
                <input className="input-style" name="quantity" id="quantity"onBlur={handleInputBlur} />

                <h5 className="mt-3">Image</h5>
                <input className="input-style" name="exampleRequired" type="file" className="btn btn-danger" onChange={handleImageUpload} />

                <h5 className="mt-3">Add Price</h5>
                <input className="input-style" name="price" id="price" onBlur={handleInputBlur} />
                <br />

                <input type="submit" className="btn btn-warning mt-3" />
            </form>
        </div>
    );
};

export default AddProduct;