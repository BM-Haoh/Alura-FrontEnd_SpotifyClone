import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/4.jpeg";

const Card4 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card4">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card4;