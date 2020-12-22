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
            name: "From Cloudy Bay To Malibu",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist: "Nik Kershaw",
            audio: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3414/01.mp3",
            color: ["#1B134B", "#3A5198"],
            active: false
        },
        {
            id: uuidv4(),
            name: "The Wind Will Blow",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Paul Clarvis",
            audio: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3379/02.mp3",
            color: ["#1B134B", "#3A5198"],
            active: false
        },
        {
            id: uuidv4(),
            name: "Radiate Like The Sun",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            artist: "James Irvin",
            audio: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3374/03.mp3",
            color: ["#1B134B", "#3A5198"],
            active: false
        },
        {
            id: uuidv4(),
            name: "Can't Find Love ",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/686808356b2bbc6a368e372ea604150bc346c788-1024x1024.jpg",
            artist: " Jake Field",
            audio: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3373/06.mp3",
            color: ["#1B134B", "#3A5198"],
            active: false
        },
        {
            id: uuidv4(),
            name: "Long Live The Kine",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Nik Kershaw",
            audio: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3414/08.mp3",
            color: ["#1B134B", "#3A5198"],
            active: false
        },
        
    ]
}

export default songList;