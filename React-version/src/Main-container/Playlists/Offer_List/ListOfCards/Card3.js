import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/3.jpeg";

const Card3 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card3">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card3;