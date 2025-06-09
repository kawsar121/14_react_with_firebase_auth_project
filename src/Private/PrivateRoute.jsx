import React, { useContext } from 'react';
import { AuthCntx } from '../Provider/Authproiver';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,refresh} = useContext(AuthCntx)

    if(refresh){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(user){
        return children
    }

    return (
            <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;