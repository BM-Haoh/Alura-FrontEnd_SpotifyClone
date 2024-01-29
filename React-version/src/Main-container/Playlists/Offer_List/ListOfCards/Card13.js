import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/13.jpeg";

const Card13 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card13">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card13;