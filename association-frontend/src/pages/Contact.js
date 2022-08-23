import { useState, useEffect } from "react"
import "../App.css"

const Home = () => {



    return (
        <>
        <h1 className="title">Contact Association</h1>
        <form className="contact-form">
        <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name"/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Message</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Message"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Select Association</label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option>unicef</option>
            <option>les restos du coeur</option>
            <option>konexio</option>
            </select>
        </div>
        <button type="submit" className="btn btn-success">Send</button>
        </form>
        </>
    )


}

export default Home
    