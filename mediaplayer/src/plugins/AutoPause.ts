import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  private player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    // DEFINIMOS QUE EL THIS SERÁ EL DE LA CLASE Y NO EL DE LA FUNCIÓN EJECUTANDOSE
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChance = this.handleVisibilityChance.bind(this);
  }

  run(player) {
    this.player = player;
    // const observer = new IntersectionObserver(handler, config);
    const observer = new IntersectionObserver(this.handleIntersection, {
      // Umbral. ¿Que % del elemento se debe ver para que te avise?
      threshold: this.threshold,
    });
    observer.observe(player.media);

    document.addEventListener("visibilitychange", this.handleVisibilityChance);
  }

  // Entries - Todos los objetos que observamos
  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChance() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
