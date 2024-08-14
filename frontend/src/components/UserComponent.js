import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query {
    user {
      id
      name
    }
  }
`;

const UserComponent = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {data.user.id}</p>
      <p>Name: {data.user.name}</p>
    </div>
  );
};

export default UserComponent;
