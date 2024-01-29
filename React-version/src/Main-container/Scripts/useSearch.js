import { useState } from "react";


export default function useSearch() {
    const searchInput = useState('search-input');
    const resultsArtist = useState('result-artist');
    const resultPlaylist = useState('result-playlists');

    function requestAPI(searchTerm) {
        const url = `http://localhost:3001/artists?name_like=${searchTerm}`
        fetch(url)
            .then((response) => response.json())
            .then((result) => displayResults(result))
    }

    function displayResults(result) {
        resultPlaylist.classList.add('hidden');
        const artistName = document.getElementById('artist-name');
        const artistImage = document.getElementById('artist-img');

        result.forEach(element => {
            artistName.innerText = element.name;
            artistImage.src = element.urlImg;
        });

        resultsArtist.classList.remove('hidden');
    }

    document.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === '') {
            resultPlaylist.classList.remove('hidden');
            resultsArtist.classList.add('hidden');
            return;
        }

        requestAPI(searchTerm);
    });
    
    return{ searchInput, resultsArtist, resultPlaylist};
};