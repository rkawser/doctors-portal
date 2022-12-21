import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase.config';
import useAdmin from './hooks/UseAdmin';
import Loading from './Shared/Loading';

const RequirAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    const [admin,adminLoading] = useAdmin(user)
    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequirAdmin;
