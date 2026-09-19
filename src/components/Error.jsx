import './css/Error.css';

function Error({
  status = "error",
  title = "An Unhandled Error Occurred",
  message = "Something went wrong. Please try again.",
  errorCode,
  progress,
  stage,
  onRetry,
  onClose
}) {
   
  return (
    <div className='min-h-10 w-12/12 border-[#333] rounded-2xl mt-1.5 bg-[#ff7839bf]'>
      <p className='text-amber-50'>{message}</p>
    </div> 
  );
}

export default Error;