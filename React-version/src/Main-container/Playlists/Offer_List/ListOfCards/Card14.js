import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/14.jpeg";

const Card14 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card14">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card14;