import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/1.jpeg";

const Card1 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card1">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card1;