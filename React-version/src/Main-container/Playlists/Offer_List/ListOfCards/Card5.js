import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/5.jpeg";

const Card5 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card5">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card5;