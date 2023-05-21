const jokes = [
  "Why did the drag queen bring a ladder to the bar? Because she heard the drinks were on the house!",
  "What's a drag queen's favorite kind of beverage? A CosMOPolitan!",
  "Why did the drag queen carry a purse full of breadcrumbs? In case she got lost and needed a trail of fabulousness to find her way back!",
  "How does a drag queen make her coffee? She adds a little \"sashay\" and a lot of \"chanté\"!",
  "Why did the drag queen go to the bakery? She wanted a little extra \"glam\" in her donuts!",
  "What do you call a drag queen that enters a contest but loses? A runner-lip-syncer!",
  "Why did the drag queen become an electrician? Because she loves to light up the room!",
  "How do drag queens like their eggs cooked? Served sunny-side slay!",
  "Why was the drag queen's hair always on point? She never wigged out!",
  "Why did RuPaul go to the bank? To cash her charisma, uniqueness, nerve, and talent!",
  "What do you call a drag queen with a summer job? A drag queen with benefits!",
  "Why did RuPaul open a bakery? To serve up some sickening buns!",
  "What do you get when you mix RuPaul and a famous rapper? A fierce collaboration called RuPac!",
  "Why did the drag queen bring a ladder to the club? To reach new heights of fabulousness!",
  "How does a drag queen cook her meals? With a lot of shade and a pinch of extra!",
  "What did RuPaul say to her competition? Sashay away, unless you're ready to slay!",
  "Why did the drag queen start a garden? She wanted to grow her own eleganza extravaganza!",
  "What do you call a drag queen with a pet parrot? A fabulous squawk of art!",
  "Why did the drag queen go to the gym? To work on her abs-olutely fierce body!",
  "What do you call a drag queen with a green thumb? A queen who can make any garden werk!",
  "Why did the drag queen become a math teacher? She loved adding a little extra to every equation!",
  "What do you get when you cross RuPaul and a scientist? A queen who can lip-sync and atomize!",
  "Why did the drag queen become an astronaut? To explore the fabulous unknown!",
  "What do you call a drag queen who's always ready to fight? A knockout queen!",
  "Why did the drag queen become a hair stylist? She wanted to tease and spray her way to the top!",
  "What do you call a drag queen who loves to hike? A queen who can slay any mountain!",
  "Why did the drag queen join a circus? She wanted to show off her fierce balancing act!",
  "What do you get when you cross RuPaul and a painter? A queen who can brush on the charisma!",
  "Why did the drag queen become a lifeguard? She wanted to serve lewks and save lives!",
  "What do you call a drag queen who loves puzzles? A queen who can slay any crossword!",
  "Why did the drag queen become a detective? She knew how to uncover the fiercest secrets!",
  "What do you get when you mix RuPaul and a magician? A queen who can make any illusion fabulous!",
  "Why did the drag queen start a dance studio? She wanted to teach the world how to twirl with fierceness!",
  "What do you call a drag queen who's great at math? A queen who can calculate her way to the top!",
  "Why did the drag queen become a pilot? She wanted to take her charisma to new heights!",
  "What do you get when you cross RuPaul and a fashion designer? A queen who can sew and slay!",
  "Why did the drag queen become a DJ? She knew how to spin the fiercest beats!",
  "What do you call a drag queen with a sweet tooth? A queen who can sashay and eat cake!",
  "Why did the drag queen become a gardener? She knew how to make any bloom gag-worthy!",
  "What do you get when you mix RuPaul and a chef? A queen who can serve sickening dishes!",
  "Why did the drag queen become a lawyer? She knew how to argue with style and finesse!",
  "What do you call a drag queen who loves roller coasters? A queen who can slay any ride!",
  "Why did the drag queen become a firefighter? She knew how to bring the heat and save the day!",
  "What do you get when you cross RuPaul and a photographer? A queen who can capture the perfect shot!",
  "Why did the drag queen become a teacher? She knew how to educate with sass and fabulousness!",
  "What do you call a drag queen who's great at puzzles? A queen who can slay any jigsaw!",
  "Why did the drag queen become a detective? She knew how to uncover the fiercest secrets!",
  "What do you get when you mix RuPaul and a magician? A queen who can make any illusion fabulous!",
  "Why did the drag queen start a dance studio? She wanted to teach the world how to twirl with fierceness!",
  "What do you call a drag queen who's great at math? A queen who can calculate her way to the top!",
  "Why did the drag queen become a pilot? She wanted to take her charisma to new heights!",
  "What do you get when you cross RuPaul and a fashion designer? A queen who can sew and slay!",
  "Why did the drag queen become a DJ? She knew how to spin the fiercest beats!",
  "What do you call a drag queen with a sweet tooth? A queen who can sashay and eat cake!",
  "Why did the drag queen become a gardener? She knew how to make any bloom gag-worthy!",
  "What do you get when you mix RuPaul and a chef? A queen who can serve sickening dishes!",
  "Why did the drag queen become a lawyer? She knew how to argue with style and finesse!",
  "What do you call a drag queen who loves roller coasters? A queen who can slay any ride!",
  "Why did the drag queen become a firefighter? She knew how to bring the heat and save the day!",
  "What do you get when you cross RuPaul and a photographer? A queen who can capture the perfect shot!",
  "Why did the drag queen become a teacher? She knew how to educate with sass and fabulousness!",
  "What do you call a drag queen who's great at puzzles? A queen who can slay any jigsaw!",
  "Why did Michelle Visage become a judge on Drag Race? To keep the queens in check and snatch those edges!",
  "What do you call Michelle Visage when she's not happy with a queen's look? The shade police!",
  "Why did Michelle Visage always wear a large necklace on Drag Race? To make sure the queens knew who was the boss!",
  "What's Michelle Visage's favorite type of weather? Shady with a 100% chance of reading!",
  "Why did Michelle Visage become a vocal coach on Drag Race? To ensure the queens hit every note and shade!",
  "What did Michelle Visage say to a queen with a messy wig? 'Girl, you better sashay away and fix that tragedy!'",
  "Why did the queens get nervous when Michelle Visage walked into the workroom? They knew the shade storm was coming!",
  "What's Michelle Visage's secret weapon on Drag Race? The power of the side-eye and a perfectly timed read!",
  "Why did Michelle Visage bring a fan to the judging panel? To cool down the queens when they're feeling the heat of her shade!",
  "What's Michelle Visage's favorite type of music? The sound of a queen's soul being snatched by her critiques!",
  "What do you call a drag queen with a time machine? A glam traveler!"
];

const loadingText = document.getElementById('loading-text');
const statusText = document.getElementById('status-text');

let usedJokes = [];
let statusMessages = [
  "Just a moment",
  "Hang in there",
  "Almost there",
  "Still loading",
  "Patience is a virtue",
  "Keep waiting",
  "Loading... again",
  "Stay fabulous",
  "One more second"
];

window.addEventListener('DOMContentLoaded', (event) => {
  const headerText = document.querySelector('#header-text');
  const bgColor = window.getComputedStyle(document.body).backgroundColor;

  let isFadingOut = false;

  setInterval(() => {
    if (!isFadingOut) {
      headerText.style.opacity = '0';
      isFadingOut = true;
    } else {
      headerText.style.opacity = '1';
      headerText.style.transition = 'opacity 2s';
      headerText.style.color = bgColor;
      setTimeout(() => {
        headerText.style.transition = '';
        headerText.style.color = '';
      }, 2000);
      isFadingOut = false;
    }
  }, 4000);
});

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  if (usedJokes.includes(joke)) {
    return getRandomJoke(); // Get another joke if it has already been used
  }
  usedJokes.push(joke);
  return joke;
}

function getRandomStatusMessage() {
  const randomIndex = Math.floor(Math.random() * statusMessages.length);
  return statusMessages[randomIndex];
}

function changeJoke() {
  const jokeText = getRandomJoke();
  loadingText.textContent = jokeText;
}

function changeStatusMessage() {
  const randomStatusMessage = getRandomStatusMessage();
  statusText.innerText = randomStatusMessage;
}

setInterval(changeJoke, 5000);
setInterval(changeStatusMessage, 10000);

