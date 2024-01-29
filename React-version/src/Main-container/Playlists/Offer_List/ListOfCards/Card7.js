import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/7.jpeg";

const Card7 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card7">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card7;