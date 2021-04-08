import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons'


const AdminProfile = () => {
    return (
        <div className="container mt-5">
            <Router>
                <Container>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Admin Page</h1>
                            <p>
                                This is the admin page.Here you can add or manage product.
                            </p>
                        </Container>
                    </Jumbotron>
                    <Link className="btn btn-warning mx-5" to="/manageProduct"><FontAwesomeIcon icon={faTasks} /> Manage Product</Link>
                    <Link className="btn btn-warning" to="/addProduct"><FontAwesomeIcon icon={faPlusSquare} /> Add Product</Link>
                </Container>
                <Switch>
                    <Route path="/manageProduct">
                         <ManageProduct></ManageProduct>
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default AdminProfile;