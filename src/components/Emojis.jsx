import React from 'react'

function Emojis({ data }) {
  return (
    <section className=' bg-white p-4 h-[200px] rounded-lg my-2 grid grid-cols-7 justify-center overflow-scroll overflow-x-hidden gap-2'>
        {data?.map((emoji, index)=>(

            <span key={index}>{emoji.character}</span>

        ))}
        
    </section>
  )
}

export default Emojis