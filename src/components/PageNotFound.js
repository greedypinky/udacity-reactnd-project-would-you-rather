import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h1>Invalid Page:404 - Not Found!</h1>
        <Link to="/">Go back to Home</Link>
    </div>
);

export default PageNotFound;