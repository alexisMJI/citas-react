import { useState, useEffect } from 'react';


function Error({children}) {

  return (

    <div>
        <div className="font-bold text-center text-lg uppercase bg-red-600 text-white px-5 py-5 mb-5 rounded">
            {children}
        </div>      
    </div>


  )
}

export default Error