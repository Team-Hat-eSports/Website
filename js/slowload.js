const hasVisited = localStorage.getItem("teamHatVisited");

const loading = document.getElementById("loading");
const site = document.getElementById("site");

if (hasVisited) {
  // Returning visitor: no bullshit
  loading.style.display = "none";
  site.style.display = "block";
} else {
  // First visit: ritual must be endured
  const messages = [    "Aligning the Hat...",
  "Rolling the dice...",
  "Consulting ancient brackets...",
  "Almost there...",
  "Dude control is scanning your device",
  "Please wait.",
  "Finalizing setup...",
  "Dude, lost connection. Reconnecting...",
  "Re-establishing secure link...",
  "Dude control is almost done...",
  "Dude, just a bit longer...",
  "Dude control is verifying your credentials",
  "Dude is checking the Hat alignment",
  "Optimizing your experience...",
  "Loading epic content...",
  "Dude control is nearly finished...",
  "Dude is putting on the finishing touches...",
  "Due to high demand, this is taking longer than expected...",
  "Dude lost control! Rebooting systems...",
  "Recalibrating dude control...",
  "Dude control says you're good to go...",
  "Dude control has approved your device",
  "Preparing to launch...",
    "Dude control is initiating final sequence...",
    "Dude control is readying the Hat...",
    "Dude control is activating the experience...",
    "Dude control is giving you the green light...",
    "Dude control is about to complete the process...",
    "Dude control is finishing up...",
   "Dude control is wrapping things up...",
   "5... 4... 3... 2... 1... Launch!",
    "Dude control has successfully loaded the experience!", 
     "Blessing confirmed."
  ];

  let index = 0;

  function nextMessage() {
    if (index < messages.length) {
      loading.innerHTML = "<p>" + messages[index] + "</p>";
      index++;
      setTimeout(nextMessage, 900);
    } else {
      loading.style.display = "none";
      site.style.display = "block";
      localStorage.setItem("teamHatVisited", "true");
    }
  }

  nextMessage();
}