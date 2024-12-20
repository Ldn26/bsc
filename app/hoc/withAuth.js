"use client"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext'; // Assuming you have an AuthContext

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
      if (!user) {
        router.replace('/login'); // Redirect to login if not authenticated
      }
    }, [user]);

    if (!user) {
      return null; // Render nothing while checking authentication
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
