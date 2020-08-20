const mood = document.getElementById("MoodFace");
const buttons = document.querySelectorAll("button");
const moods = [
  { mood: "◉‿◉", color: "hotpink" },
  { mood: "ಥ_ಥ", color: "cornflowerblue" },
  { mood: "ლಠ益ಠ)ლ", color: "red" },
  { mood: "(☉_☉)", color: "lightgray" },
  { mood: "(⌐■_■)", color: "yellow" },
];

function setMood(type, payload) {
  store.dispatch({ type, payload });
  const state = store.getState();
  mood.innerText = state.mood;
  document.body.style.background = state.color;
}

function getRandomMood() {
  return moods[Math.floor(Math.random() * 5)];
}

buttons.forEach(function (btn) {
  btn.addEventListener("click", async function () {
    switch (btn.id) {
      case "happy":
        setMood("HAPPY", moods[0]);
        break;
      case "sad":
        setMood("SAD", moods[1]);
        break;
      case "angry":
        setMood("ANGRY", moods[2]);
        break;
      case "confused":
        setMood("CONFUSED", moods[3]);
        break;
      case "random":
        const randomMood = await getRandomMood();
        setMood("RANDOM", randomMood);
        break;
      default:
        break;
    }
  });
});
