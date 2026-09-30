"use client";
import './css/Error.css';

interface ErrorProps {
  status?: string;
  title?: string;
  message?: string;
  errorCode?: string;
  progress?: any;
  stage?: any;
  onRetry?: any;
  onClose?: any;
}

function Error({
  status = "error",
  title = "An Unhandled Error Occurred",
  message = "Something went wrong. Please try again.",
  errorCode,
  progress,
  stage,
  onRetry,
  onClose
}: ErrorProps) {
   
  return (
    <div className='min-h-24 
    flex 
    justify-center 
    items-center 
     w-12/12 
     rounded-[7px] mt-1.5
     border
     border-solid
     border-[#ff7433]
     '>
      <svg 
      className="ml-[10px] w-5 h-5 text-red-500 shrink-0" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
        clipRule="evenodd" 
      />
    </svg>
      <p className='text-[#333]'>{message}</p>
    </div> 
  );
}

export default Error;
