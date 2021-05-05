/* app per header */

const root = new Vue({
  el: "#root",
  data: {
    title: "Galleria immagini",
  },
});

/* app per slider */
const app = new Vue({
  el: "#app",
  data: {
    photos: [
      "assets/img/books.jpg",
      "assets/img/bridge-sun.jpg",
      "assets/img/bridge-moon.jpg",
      "assets/img/hiking.jpg",
    ],
    counterPhotos: 0,
    timer: 0,
  },
  methods: {
    prevPhoto() {
      this.counterPhotos--;
      if (this.counterPhotos < 0) {
        this.counterPhotos = this.photos.length - 1;
      }
    },
    nextPhoto() {
      this.counterPhotos++;
      if (this.counterPhotos === this.photos.length) {
        this.counterPhotos = 0;
      }
      return counterPhotos;
    },
    playerPhoto() {
      this.timer = setInterval(function () {
        app.nextPhoto();
      }, 2000);
    },
  },
});
