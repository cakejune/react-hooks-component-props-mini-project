import React from "react";

function About(props) {
    console.log(props)
    return (
        <div>
            <aside>
                <img src={props.image="../assets/logo.svg"} alt="blog logo" />
                <p>{props.text}</p>
            </aside>
        </div>
    )
}

export default About;