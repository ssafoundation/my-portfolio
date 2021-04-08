import React from 'react';
import { Link } from 'react-router-dom';

const Registetion = () => {
    return (
        <div className="dashboard-body">
            <h1>Registetion form </h1>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Registetion;