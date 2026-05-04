import './App.css'
import { useEffect,useState } from 'react'

function App() {
  let [data, setData] = useState([]);
  let url = 'https://jsonplaceholder.typicode.com/users'
  async function fetchData(){
    let res = await fetch(url)
    let data1 = await res.json()
    setData(...data1)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(data)
  
  return (
    <div>
      <ul>
      <li>{data.name}</li>
      <li>{data.email}</li>
      </ul>
    </div>
  )
}

export default App
