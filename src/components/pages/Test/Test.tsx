// import React, { useEffect, useState } from "react";
// import { useGetPostsQuery, UserProfile } from "../../apis/apiSlice";

// function UserProfileComponent() {
//   //   // Use the auto-generated hook in a component
//   //   const { data, error, isLoading, isSuccess } = useGetPostsQuery();

//   //   if (isLoading) {
//   //     return <div>Loading...</div>;
//   //   }

//   //   if (error) {
//   //     console.log("Error: " + error);
//   //     // return <div>Error: {error?.message}</div>;
//   //   }

//   //   if (!isSuccess || !data) {
//   //     return <div>No data available</div>;
//   //   }

//   //   // Render the user profile data if available
//   //   return <div>Username: {data.username}</div>;

//   const [data, setData] = useState<UserProfile | null>(null);
//   const [error, setError] = useState<Error | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8082/api/v1/user/noAuthUserProfile"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result: UserProfile = await response.json(); // TypeScript infers 'result' as 'unknown'
//         setData(result); // TypeScript error here
//       } catch (error: Error | any) {
//         setError(error); // TypeScript error here as well
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!data) return <div>No data available</div>;

//   return <div>Username: {data.username}</div>;
// }

// export default UserProfileComponent;
