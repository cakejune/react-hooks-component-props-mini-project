import React from "react";

function About({img="https://via.placeholder.com/215", text}) {
    return (
        <div>
            <aside>
                <img src={img} alt="blog logo" />
                <p>{text}</p>
            </aside>
        </div>
    )
}

export default About;