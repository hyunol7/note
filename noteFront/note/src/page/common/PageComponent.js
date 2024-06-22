import React from 'react';

const PageComponent = ({ serverData, movePage }) => {
  if (!serverData || !serverData.pageNumList) {
    return null; // serverData 또는 pageNumList가 없으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="m-6 flex justify-center">
      {serverData.prev ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({ page: serverData.prevPage })}
        >
          prev
        </div>
      ) : null}
      {/* 페이지 목록을 출력합니다. */}
      {serverData.pageNumList.map(pageNum => (
        <div
          key={pageNum}
          className={`m-2 p-2 w-12 text-center rounded shadow-md text-white ${
            serverData.current === pageNum ? 'bg-gray-500' : 'bg-blue-400'
          }`}
          onClick={() => movePage({ page: pageNum })}
        >
          {pageNum}
        </div>
      ))}
      {serverData.next ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({ page: serverData.nextPage })}
        >
          next
        </div>
      ) : null}
    </div>
  );
};

export default PageComponent;
