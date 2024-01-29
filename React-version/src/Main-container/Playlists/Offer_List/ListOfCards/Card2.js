import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/2.png";

const Card2 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card2">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card2;