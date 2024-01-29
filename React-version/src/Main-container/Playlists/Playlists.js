import React from 'react';
import "./Playlists.css";
import Cards from "./Offer_List/Cards";

const Playlists = () => {
    return (
        <div class="playlist-container">
            <div id="result-playlists">
                <div class="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 class="session">Navegar por todas as seções</h2>
                </div>

                {/* LIST OF CARDS */}
                <Cards/>
                {/* /LIST OF CARDS */}

            </div>

            <div id="result-artist" class="hidden">
                <div class="grid-container">
                    <div class="artist-card" id="">
                        <div class="card-img">
                            <img id="artist-img" class="artist-img" alt=""/>
                            <div class="play">
                                <span class="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div class="card-text">
                            <a title="Foo Fighters" class="vst" href="a"></a>
                            <span class="artist-name" id="artist-name"></span>
                            <span class="artist-categorie">Artista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Playlists;