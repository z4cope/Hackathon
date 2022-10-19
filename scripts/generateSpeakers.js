import speakers from "./speakersData.js";
const speakersWrapper = document.querySelector(".speakers-wrapper");

let singleCard = speakers.map((speaker) => {
  return `
    <div class="speaker-card">
        <img src="${speaker.image}" />
        <div class="speaker-content">
            <h3 class="speaker-name">${speaker.name}</h3>
            <h4 class="speaker-title">${speaker.title}</h4>
            <div class="hr-line"></div>
            <p>${speaker.text}</p>
        </div>
    </div>
    `;
});

singleCard = singleCard.join("");
speakersWrapper.innerHTML += singleCard;
