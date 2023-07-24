class Playable {

    constructor(name, list = []) {
        this.name = name;
        this.list = list;
    }

    play() {
        throw new Error("Play method needs to be implemented")
    }
    getPlaybackSpeed() {
        throw new Error("Get Playback Speed method needs to be implemented")
    }
    getName() {
        throw new Error("Get Name method needs to be implemented")
    }
}

class Playlist extends Playable {

    constructor(name, list = []) {
        super(name, list);
    }

    play() {
        console.log(`Playing playlist ${this.name}`)
    }

    setPlaybackSpeed() {
        // Set playback speed
    }

    getName() {
        return this.name;
    }

    add(item) {
        console.log('typeof item', Object.getPrototypeOf(item.constructor).name);

        if (Object.getPrototypeOf(item.constructor).name == "Playable") {
            this.list.push(item)
        } else {
            throw new Error("Type mismatch for given item")
        }
    }

    remove(item) {
        if (Object.getPrototypeOf(item.constructor).name == "Playable") {
            this.list = this.list.filter((i) => i !== item);
        } else {
            throw new Error("Type mismatch for given item")
        }
    }

    getList() {
        console.log(this.list);
    }
}

class Song extends Playable {

    constructor(name, artist, speed) {
        super(name)
        this.artist = artist;
        this.speed = speed;
        delete this.list;
    }

    play() {
        console.log(`Playing song ${this.name}`)
    }

    setPlaybackSpeed() {
        // Set playback speed
    }

    getName() {
        console.log(`${this.name}`)
    }

    getArtist() {
        console.log(`${this.artist}`)
    }

}



let song = new Song("Hello", "Eminem", 1.0);
song.getName()

let song1 = new Song("Sing for a moment", "Eminem", 1.0);
song1.getName()

let playlist = new Playlist("New Playlist", [song, song1]);
playlist.play()
playlist.list[1].play()

let song3 = new Song("Money Trees", "Kendrick Lamar", 1.0);
song3.getName()


playlist.add(song3);
playlist.getList();

playlist.remove(song3);
playlist.getList();