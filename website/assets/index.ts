import MediaPlayer from "../mediaplayer/MediaPlayer";
import AutoPlay from "../mediaplayer/plugins/AutoPlay";
import AutoPause from "../mediaplayer/plugins/AutoPause";
import Ads from "../mediaplayer/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector("#btn-play");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#btn-mute");
muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .catch((error) => console.log(error.message));
}
