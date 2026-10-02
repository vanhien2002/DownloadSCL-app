interface LoadingDownloadProps {
  label?: string;
  status?: boolean;
}

const LoadingDownload = ({
  label = "No loading...",
  status = false,
}: LoadingDownloadProps) => {
  const showLoadding = () => {
    if (status) {
      return (
        <div className="p-11 flex justify-center w-12/12 border rounded-2xl border-[#155dfc] h-20 flex items-center justify-center gap-2">
          <div inline-block >
            <div className="min-h-6 center block">
              <svg
                className="w-32 h-10"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="6"
                  className="fill-blue-600 animate-bounce [animation-delay:-0.3s]"
                />

                <circle
                  cx="60"
                  cy="20"
                  r="9"
                  className="fill-blue-600 animate-bounce [animation-delay:-0.15s]"
                />

                <circle
                  cx="100"
                  cy="20"
                  r="12"
                  className="fill-blue-600 animate-bounce"
                />
              </svg>
            </div>
            <div className="mb-3.5 block">{label}</div>
          </div>
        </div>
      );
    }
  };

  return showLoadding();
};

export default LoadingDownload;
