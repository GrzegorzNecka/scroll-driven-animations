// Grid List - Generate photo grid dynamically

document.addEventListener("DOMContentLoaded", () => {
  const photoGrid = document.getElementById("photoGrid");
  const numberOfPhotos = 60; // Number of photos to generate

  // Generate photo items
  for (let i = 1; i <= numberOfPhotos; i++) {
    const li = document.createElement("li");
    li.className = "photo";

    const img = document.createElement("img");
    img.src = `https://picsum.photos/seed/${i}/400/400`;
    img.alt = `Zdjęcie ${i}`;
    img.width = 400;
    img.height = 400;
    img.loading = "lazy"; // Lazy loading for better performance

    li.appendChild(img);
    photoGrid.appendChild(li);
  }

  console.log(`✅ Wygenerowano ${numberOfPhotos} zdjęć w gridu`);
});
