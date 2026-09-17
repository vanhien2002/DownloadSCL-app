
import "./css/Pagination.css"

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
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
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`page-btn ${number === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
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
