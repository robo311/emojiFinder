import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/search'
import Emojis from './components/Emojis'

function App() {
  
  const [data, setData] = useState()
  const [search, setSearch] = useState("")

  /* const url = 'https://emoji-api.com/emojis?access_key=5c4ab71beed513aa8d09091e062387c884fc4303' */

  const url = `https://emoji-api.com/emojis?search=${search}&access_key=5c4ab71beed513aa8d09091e062387c884fc4303`

  

  useEffect(()=>{
    setTimeout(()=> {
      handleData()
    }, 200)
  },[search])

  const handleData = async () =>{
    try{
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }catch (error){
      console.error('Error: ', error)
    }
  }


  console.log(search)

  return (
    <>
      <header className=' flex flex-col gap-2 text-center mb-8'>
        <h1 className=' font-semibold text-[28px]'>Emoji finder</h1>
        <small>Search for any emoji!</small>
      </header>
      <Search setSearch={setSearch}/>
      <Emojis data={data}/>
    </>
  )
}

export default App
