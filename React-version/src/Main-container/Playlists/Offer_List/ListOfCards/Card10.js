import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/10.jpeg";

const Card10 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card10">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card10;