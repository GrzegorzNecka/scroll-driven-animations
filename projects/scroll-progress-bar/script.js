// ## Core Concepts: scroll() and ScrollTimeline | Unleash the power of Scroll-Driven Animations

const scrollBar = () => {
  const progressBar = document.getElementById("progress");

  progressBar.style.transformOrigin = "0% 50%";
  progressBar.animate(
    {
      transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
      fill: "forwards",
      timeline: new ScrollTimeline({source: document.documentElement}),
    }
  );
};

// scrollBar();
