
import "./css/Pagination.css"

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageItems = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 2, "...", currentPage, "...", totalPages - 1, totalPages];
  };

  const pageItems = getPageItems();

  return (
    <div className="pagination-container">
      {/* Nút Trang trước */}
      <button 
        className="page-btn prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo; Trước
      </button>
      {/* Các nút số trang */}
      <div className="page-numbers">
        {pageItems.map((item, index) =>
          item === "..." ? (
            <span key={`dots-${index}`} className="page-dots">
              ...
            </span>
          ) : (
            <button
              key={item}
              className={`page-btn ${item === currentPage ? "active" : ""}`}
              onClick={() => onPageChange(item)}
            >
              {item}
            </button>
          )
        )}
      </div>
      {/* Nút Trang sau */}
      <button 
        className="page-btn next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Sau &raquo;
      </button>
    </div>
  );
}

export default Pagination;
