interface AudioPlayer {
    audioVolume: number,
    soundDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    details: {
        author: "Ed Sheeran",
        year: 2015
    },
    song: "Mess",
    soundDuration: 30

}


const {song: anotherSong,} = audioPlayer
const {details} = audioPlayer

const {author,year} = details

console.log(`Song : ${anotherSong}`)
console.log(`Details : ${details.toString()}`)
console.log(`Author : ${author} - Year ${year}`)

export {};