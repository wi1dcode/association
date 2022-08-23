import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const Hero = () => {
  const { slug } = useParams()
  const [Association, setAssociation] = useState(null)

  useEffect(() => {
    fetchAssociation()
  }, [])

  const fetchAssociation = async () => {
    const response = await fetch(`http://localhost:5000/Associations/${slug}`)
    const data = await response.json()
    setAssociation(data)
  }

  return (
    <section className="asso-page">
     {Association !== null && (
        <div className="asso-card">
            <h1 className="title">{Association.name}</h1>
            <p className="slogan">{Association.slogan}</p>
            <img src={Association.image} className="asso-img" alt={Association.name} />
            <p className="asso-desc">{Association.description}</p>
        </div>
    //   <div className="card-group">
    //   <div className="card">
    //       <img src={Association.image} className="card-img-top" alt={Association.name}/>
    //       <div className="card-body">
    //       <h5 className="card-title"><Link to={`/${Association.slug}`}>{Association.name}</Link></h5>
    //       <p className="card-text">{Association.description}</p>
    //       </div>
    //       <div className="footer">
    //       <p>{Association.slogan}</p>
    //       </div>
    //   </div>
    //   </div>
     )}
    </section>
  )
}

export default Hero