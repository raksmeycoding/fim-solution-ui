// import React, { FunctionComponent } from "react";
// import { useGetPhotoByIdQuery } from "./api/api";
// import Loader from "./Loader";

// interface Props {
//   photoId: number;
// }

// const PhotoCard: FunctionComponent<Props> = ({ photoId }) => {
//   const { data, isLoading, isError } = useGetPhotoByIdQuery(photoId);

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (isError || !data) {
//     return <div>Something went wrong</div>;
//   }

//   return (
//     <div>
//       <p>{data.title}</p>
//       <img
//         src={data.url}
//         alt={data.title}
//       />
//     </div>
//   );
// };

// export default PhotoCard;
