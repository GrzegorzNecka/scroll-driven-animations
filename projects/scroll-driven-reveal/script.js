const revealImages = () => {
  const images = document.querySelectorAll(".revealing-image");

  images.forEach((image) => {
    image.animate(
      [
        {opacity: 0, clipPath: "inset(45% 20% 45% 20%)"},
        {opacity: 1, clipPath: "inset(0% 0% 0% 0%)"},
      ],
      {
        timeline: new ViewTimeline({
          subject: image,
          axis: "block",
          range: "entry 25% cover 50%",
        }),
      }
    );
  });
};

// revealImages();
