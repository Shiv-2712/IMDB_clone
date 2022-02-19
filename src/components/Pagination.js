import React from 'react';

function Pagination({pageProp,goBack,goAhead}) {
    console.log(JSON.stringify(pageProp),"pageNo");
  return <>

    <div className='w-full flex justify-center mb-8'>
        <button className='p-2 border-2 
            border-indigo-500 text-indigo-500  rounded-l-xl border-r-0' 
            onClick={goBack}
            >Previous</button>

        <button className='p-2 border-2 
            border-indigo-500 bg-gray-300 text-indigo-500' >
                {pageProp}
                </button>

        <button className='p-2 border-2 border-l-0 rounded-r-xl
            border-indigo-500 text-indigo-500'
            onClick={goAhead}
            >Next</button>
        </div>
  </>;
}

export default Pagination;
