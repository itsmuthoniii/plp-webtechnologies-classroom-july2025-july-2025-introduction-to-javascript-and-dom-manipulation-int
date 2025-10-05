let club = "Manchester United";
let trophies = 68;              
let isGreatest = true;          
// Conditional
if (isGreatest) {
  console.log(club + " is one of the greatest football clubs with " + trophies + " trophies!");
} else {
  console.log(club + " still has more to achieve.");
}

// Function 1: Format club info
function formatClubInfo(name, trophies) {
  return `${name} has won ${trophies} major trophies!`;
}

// Function 2: Calculate win percentage
function winPercentage(wins, matches) {
  return ((wins / matches) * 100).toFixed(2) + "%";
}

// Example 1: Loop through rival clubs
let rivals = ["Manchester City", "Liverpool", "Arsenal"];
for (let i = 0; i < rivals.length; i++) {
  console.log("Rival club: " + rivals[i]);
}

// Example 2: Countdown to next match
let days = 5;
while (days > 0) {
  console.log("Next match in " + days + " days!");
  days--;
}

// 1. Show info when button clicked
document.getElementById("showInfo").addEventListener("click", function() {
  let info = formatClubInfo(club, trophies);
  document.getElementById("teamInfo").textContent = info;
});

// 2. Toggle club legends
document.getElementById("toggleLegends").addEventListener("click", function() {
  let legends = document.getElementById("legends");
  legends.style.display = (legends.style.display === "none") ? "block" : "none";
});

// 3. Countdown to next match on the page
let countdownDiv = document.getElementById("countdown");
let time = 5;
let timer = setInterval(function() {
  if (time > 0) {
    countdownDiv.textContent = "Next match begins in " + time + " days...";
    time--;
  } else {
    countdownDiv.textContent = "⚽ Match Day! Glory Glory Man United!";
    clearInterval(timer);
  }
}, 1000);
