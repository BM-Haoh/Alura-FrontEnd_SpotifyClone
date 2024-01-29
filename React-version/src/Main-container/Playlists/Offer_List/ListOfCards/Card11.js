import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/11.jpeg";

const Card11 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card11">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card11;