import React from "react";

export default function(props){
let badgeTest 
if (props.openSpots == 0){
    badgeTest = "SOLD OUT"
}else if (props.location == "Online")
    badgeTest = "ONLINE"

    return (
        <div className="card--wrap">
            {badgeTest && <div className="card-badge">{badgeTest}</div>} 
            <img 
                src={`../public/${props.coverImg}`}
                className="card--photo"
                alt="Main page image."
            />
            <div className="star--rating">
                <img 
                    src="./Star.png" 
                    className="card--star"
                    alt="Star icon."
                />
                <span>{props.stats.rating}</span>
                <span className="rating">{props.stats.reviewCount} •</span>
            <span className="rating">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--cost"><span className="cost--bold">{props.price}</span> / person</p>
        </div>
    )
}