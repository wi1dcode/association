import { useState, useEffect } from "react"
import "../App.css"

const Home = () => {
const [associations, setAssociations] = useState([])



useEffect(() => {
    fetchAssociation()
    }, [])
    
    const fetchAssociation = async () => {
    const request = await fetch("http://localhost:5000/associations")
    const response = await request.json()
    
    setAssociations(response)
}



return (
    <>
        <ul>
        {associations.map((associations) => {
          return (
            <>
            <h1>{associations.name}</h1>
            <h2>{associations.slogan}</h2>
            <img src={associations.image} />
            </>
          )
        })}
      </ul>

    </>
)}

export default Home
