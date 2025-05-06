import React from "react";

const Pagination = ({ page, setPage, lastPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(1)} disabled={page === 1}>
        ⏮ First
      </button>
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        ◀ Prev
      </button>
      <span>
        Page {page} of {lastPage}
      </span>
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page === lastPage}
      >
        Next ▶
      </button>
      <button
        onClick={() => setPage(lastPage)}
        disabled={page === lastPage}
      >
        Last ⏭
      </button>
    </div>
  );
};

export default Pagination;