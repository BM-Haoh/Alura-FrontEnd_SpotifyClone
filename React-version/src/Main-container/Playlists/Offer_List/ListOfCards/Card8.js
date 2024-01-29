import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/8.jpeg";

const Card8 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card8">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card8;