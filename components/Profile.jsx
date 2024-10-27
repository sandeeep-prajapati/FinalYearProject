import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

const Profile = ({isLoading, error, user}) => {
//   const { isLoading, error, user } = useUser();
  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {/* <Image width={100} height={100} src={user.picture} alt="user.picture" /> */}
        <h1 className=" px-2">{user.name}</h1>
      </div>
    )
  );
};
export default Profile;
