const app = new Vue({
  el: "#app",
  data: {
    title: "Galleria immagini",
    photos: [
      "assets/img/books.jpg",
      "assets/img/bridge-sun.jpg",
      "assets/img/bridge-moon.jpg",
      "assets/img/hiking.jpg",
    ],
    counterPhotos: 0,
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
  },
});
