import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/15.jpeg";

const Card15 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card15">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card15;