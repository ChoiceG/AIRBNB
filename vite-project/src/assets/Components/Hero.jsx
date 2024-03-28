import React from "react";

export default function Hero( {setHero} ){
    return(
        <section className="hero--wrapper">
            <img 
                src="./Group.png" 
                className="hero--picture"
                alt="AirBnB Experience."
            />
            <h1 className="Header">Online Experiences</h1>
            <p className="Greetings">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}