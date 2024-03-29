import React from "react";
import "./Sidebar.css";
import Logo from "../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGlobe, faHome, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div class="sidebar">
        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="a">
                    <img src={Logo} alt="Logo do spotify"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="a">
                        <span><FontAwesomeIcon icon={faHome}/> &nbsp; </span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="a">
                        <span><FontAwesomeIcon icon={faSearch}/> &nbsp; </span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="library">
            <div class="library__content">
                <button class="library__button">
                    <span><FontAwesomeIcon icon={faBook}/> &nbsp; </span>
                    <span>Sua Biblioteca</span>
                </button>
                <span><FontAwesomeIcon icon={faPlus}/> &nbsp; </span>
            </div>

            <section class="section-playlist">
                <div class="section-playlist__content">
                    <span class="text title">Crie sua primeira playlist</span>
                    <span class="text subtitle">É fácil, vamos te ajudar.</span>
                    <button class="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div class="cookies">
                <a href="a">Cookies</a>
            </div>

            <div class="languages">
                <button class="languages__button">
                    <span><FontAwesomeIcon icon={faGlobe}/> &nbsp; </span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;