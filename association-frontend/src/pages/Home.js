import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
        <ul className="asso">
        {associations.map((associations) => {
          return (
            <>
            <div className="card-group">
                <div className="card">
                    <img src={associations.image} className="card-img-top" alt={associations.name}/>
                    <div className="card-body">
                    <h5><Link to={`/${associations.slug}`} className='card-title'>{associations.name}</Link></h5>
                    <p className="card-text">{associations.description}</p>
                    </div>
                    <div className="footer">
                    <p>{associations.slogan}</p>
                    </div>
                </div>
                </div>
            </>
          )
        })}
      </ul>

    </>
)}

export default Home
