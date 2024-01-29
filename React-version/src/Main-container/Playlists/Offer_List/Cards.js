import React from "react";
import "./Cards.css";
import Card1 from "./ListOfCards/Card1";
import Card2 from "./ListOfCards/Card2";
import Card3 from "./ListOfCards/Card3";
import Card4 from "./ListOfCards/Card4";
import Card5 from "./ListOfCards/Card5";
import Card6 from "./ListOfCards/Card6";
import Card7 from "./ListOfCards/Card7";
import Card8 from "./ListOfCards/Card8";
import Card9 from "./ListOfCards/Card9";
import Card10 from "./ListOfCards/Card10";
import Card11 from "./ListOfCards/Card11";
import Card12 from "./ListOfCards/Card12";
import Card13 from "./ListOfCards/Card13";
import Card14 from "./ListOfCards/Card14";
import Card15 from "./ListOfCards/Card15";

const Cards = () => {
    return (
        <div class="offer__scroll-container">
            <div class="offer__list">
                <section class="offer__list-item">
                    <Card1/>
                    <Card2/>
                    <Card3/>
                    <Card4/>
                    <Card5/>
                    <Card6/>
                    <Card7/>
                    <Card8/>
                    <Card9/>
                    <Card10/>
                    <Card11/>
                    <Card12/>
                    <Card13/>
                    <Card14/>
                    <Card15/>
                </section>
            </div>
        </div>
    )
};

export default Cards;