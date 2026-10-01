import { useState } from "react";

interface LoaddingDownloadProps {
  label: string;
  status?: boolean;
}

// khái báo kiểu React

// // Khai báo kiểu React.FC<LoadingDownloadProps>
// const LoadingDownload: React.FC<LoaddingDownloadProps> = ({
//   label = "No loading...",
//   status = false,
// }) => {
//   return <div>{status && label}</div>;
// };

const LoadingDownload:React.FC<LoaddingDownloadProps> = ({
    label="",
    status= false,
}) => {
    return <div>{label}</div>
}

export default LoadingDownload;



// function LoaddingDownload({
//   label = "No loadding ... ",
//   status = false,
// }: LoaddingDownloadProps) {
//   const renderContent = () => {
//     return (
//       <>
//         <div>{label}</div>
//       </>
//     );
//   };

//   return <>{renderContent()}</>;
// }

// export default LoaddingDownload;



