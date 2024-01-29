import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/12.jpeg";

const Card12 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card12">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card12;