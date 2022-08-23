import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const Association = () => {
  const { slug } = useParams()
  const [association, setAssociation] = useState(null)
  const [message, setMessage] = useState([])
  
  useEffect(() => {
    fetchAssociation()
    fetchMessage()
  }, [])

  const fetchAssociation = async () => {
    const response = await fetch(`http://localhost:5000/Associations/${slug}`)
    const data = await response.json()
    setAssociation(data)
}   

  const fetchMessage = async () => {
    const request = await fetch(`http://localhost:5000/message`)
    const response = await request.json()
    setMessage(response)
}

  return (
    <section className="asso-page">
     {association !== null && (
        <section>
            <div className="asso-card">
                <h1 className="title">{association.name}</h1>
                <p className="slogan">{association.slogan}</p>
                <img src={association.image} className="asso-img" alt={association.name} />
                <p className="asso-desc">{association.description}</p>
            </div>
        </section>
     )}
            <div className="asso-messages">
            <h2 className="title mt-5">Messages:</h2>
      {message.map((message) => {
        return (
            <>
                <div className="asso-mes-content">
                    <p className="m-object">Object: {message.object}</p>
                    <p className="m-content">Content: {message.content}</p>
                    <p className="m-date">{message.date}</p>

                </div>
            </>
        )
    }
    
    )}
    </div>
    </section>
  )
}

export default Association