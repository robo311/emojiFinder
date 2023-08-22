import React from 'react'

function Search({ setSearch }) {


  return (
    <section>
        <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className='px-4 py-2 rounded-lg w-[400px]'/>
    </section>
  )
}

export default Search