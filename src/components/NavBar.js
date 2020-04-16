import React from 'react';

import {Link } from "react-router-dom";

const NavBar = ()=>{

    return (
        <nav style={{ marginBottom:20 }} className="navbar navbar-dark bg-primary">
            <Link to="/" className="navbar-brand" >Book Reading List</Link>
            <Link to="/addbook" className="navbar-brand">Add Book</Link>
        </nav>

    );

};
export default NavBar;
