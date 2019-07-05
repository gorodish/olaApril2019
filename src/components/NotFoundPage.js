import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="content">
        404 - <Link to="/">Home Page</Link>
    </div>
);

export default NotFoundPage;