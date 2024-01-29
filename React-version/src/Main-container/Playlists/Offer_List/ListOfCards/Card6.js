import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/6.jpeg";

const Card6 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card6">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card6;