const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const clickAudio = document.getElementById("click-sound");

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.textContent = data.joke;
}

generateJoke();

// Listeners
jokeBtn.addEventListener("click", generateJoke);
