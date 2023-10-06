import React from 'react';
import {useAuth} from '../context/AuthContext';
import NoAuthComponent from '../components/NoAuthComponent';
import AuthComponent from '../components/AuthComponent';

const DetailScreen: React.FC = () => {
  const {user} = useAuth();

  if (!user) {
    return <NoAuthComponent />;
  }

  return <AuthComponent />;
};

export default DetailScreen;
