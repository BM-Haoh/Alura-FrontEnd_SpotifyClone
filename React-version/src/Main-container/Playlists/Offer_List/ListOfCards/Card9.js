import React from "react";
import "../Cards.css";
import image from "../../../../assets/playlist/9.jpeg";

const Card9 = () => {
    return (
        <a href="a" class="cards">
            <div class="cards card9">
                <img src={image} alt=""/>
                <span>Boas festas</span>
            </div>
        </a>
    )
};

export default Card9;