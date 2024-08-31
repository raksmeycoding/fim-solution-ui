// src/components/UserProfile.tsx

import React from "react";
import { useGetNoAuthUserProfileQuery } from "../../../redux/services/userProfileApi";

const UserProfile: React.FC = (): JSX.Element => {
  const { data, error, isLoading } = useGetNoAuthUserProfileQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {data?.data.id}</p>
      <p>Username: {data?.data.username}</p>
    </div>
  );
};

export default UserProfile;
