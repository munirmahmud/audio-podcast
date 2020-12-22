import { v4 as uuidv4 } from 'uuid';

function songList() {
    return [
        {
            id: uuidv4(),
            name: "Melting Into You",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            artist: "Sula May Andrade Deane",
            audio: "https://res.cloudinary.com/munirmahmud/video/upload/v1608634164/audio/tracks/01_krzowt.mp3",
            color: ["#F8B365", "#907995"],
            active: true
        },
        {
            id: uuidv4(),
            name: "I Do Believe",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Nik Kershaw",
            audio: "https://res.cloudinary.com/munirmahmud/video/upload/v1608634168/audio/tracks/05_gr4tac.mp3",
            color: ["#DA597F", "#D8A2BA"],
            active: false
        },
        {
            id: uuidv4(),
            name: "Midnight Hour",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Josh Oliver",
            audio: "https://res.cloudinary.com/munirmahmud/video/upload/v1608634168/audio/tracks/05_gr4tac.mp3",
            color: ["#1B134B", "#3A5198"],
            active: false
        },
    ]
}

export default songList;