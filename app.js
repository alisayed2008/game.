const screens = {
  menu: document.getElementById('screen-menu'),
  levels: document.getElementById('screen-levels'),
  game: document.getElementById('screen-game'),
  win: document.getElementById('screen-win'),
  lose: document.getElementById('screen-lose'),
};

const playButton = document.getElementById('play-button');
const levelsButton = document.getElementById('levels-button');
const soundButton = document.getElementById('sound-button');
const musicButton = document.getElementById('music-button');
const exitButton = document.getElementById('exit-button');
const levelsBack = document.getElementById('levels-back');
const levelsGrid = document.getElementById('levels-grid');
const highestLevelText = document.getElementById('highest-level');

const tileBank = document.getElementById('tile-bank');
const answerRow = document.getElementById('answer-row');
const timerText = document.getElementById('timer');
const scoreText = document.getElementById('score');
const adPlaceholder = document.getElementById('ad-placeholder');
const rewardedButton = document.getElementById('rewarded-ad');
const restartButton = document.getElementById('restart-button');
const backMenuButton = document.getElementById('back-menu');

const winScoreText = document.getElementById('win-score');
const winStarsText = document.getElementById('win-stars');
const nextLevelButton = document.getElementById('next-level');
const replayLevelButton = document.getElementById('replay-level');
const retryLevelButton = document.getElementById('retry-level');
const loseMenuButton = document.getElementById('lose-menu');

const audioClick = document.getElementById('audio-click');
const audioSuccess = document.getElementById('audio-success');
const audioFail = document.getElementById('audio-fail');
const audioMusic = document.getElementById('audio-music');

const sentences = [
  'Sunlight warms the quiet lake',
  'A gentle breeze moves the trees',
  'Music fills the bright hallway',
  'The puppy chased the red ball',
  'Fresh bread smells amazing today',
  'Stars shimmer above the desert',
  'We packed snacks for the hike',
  'The train arrived before noon',
  'Rain tapped softly on windows',
  'Her laughter lit the room',
  'The baker kneads dough carefully',
  'Morning coffee starts our day',
  'A kite danced in the sky',
  'The artist framed the sketch',
  'City lights glowed at dusk',
  'The coach praised the team',
  'Fireflies sparkled over the field',
  'Grandma tells the best stories',
  'The river bends around hills',
  'We saved seats for friends',
  'The chef chopped fresh herbs',
  'Pine trees whisper in wind',
  'The drumbeat echoed downtown',
  'A comet streaked past midnight',
  'Our class planted tiny seeds',
  'The cat napped on cushions',
  'Lanterns floated across the bay',
  'Clouds gathered before the storm',
  'The violinist tuned the strings',
  'We counted shells on shore',
  'The library opened early today',
  'A painter mixed bold colors',
  'The garden path smelled sweet',
  'Waves rolled under moonlight',
  'The toddler clapped with joy',
  'We traded recipes after dinner',
  'New neighbors waved hello',
  'The runner broke the record',
  'Snowflakes settled on scarves',
  'The baker iced the cake',
  'Birds nested in tall reeds',
  'We rode bikes through town',
  'The actor learned every line',
  'The popcorn popped loudly',
  'She wrote a thoughtful note',
  'Candles flickered during dinner',
  'The sailor mapped the route',
  'We shared soup with friends',
  'Daisies bloomed along the road',
  'The singer held a long note',
  'A rabbit darted through shrubs',
  'The twins solved the puzzle',
  'We watched the sunrise together',
  'The goalie blocked the shot',
  'Bubbles floated past the porch',
  'The teacher praised our effort',
  'We built a snowy fort',
  'The lighthouse guided the ship',
  'Crisp apples filled the basket',
  'The gardener watered the roses',
  'We toured the art museum',
  'The drummer kept perfect time',
  'A dolphin leapt beside us',
  'The pianist practiced every day',
  'We rolled dough for pizza',
  'The puppy learned new tricks',
  'Fire crackled in the hearth',
  'We explored the old castle',
  'The pilot announced smooth skies',
  'Paper boats sailed downstream',
  'The florist arranged bright lilies',
  'We spotted deer at dawn',
  'The magician amazed the crowd',
  'Cedar scent filled the cabin',
  'The band rehearsed after school',
  'We huddled by the campfire',
  'The painter signed the mural',
  'Little bells rang at sunset',
  'The diver surfaced with treasure',
  'We gathered stones by the creek',
  'The baker shared warm cookies',
  'Sunbeams danced on the floor',
  'The captain steered carefully',
  'We mailed postcards from abroad',
  'The sculptor shaped the clay',
  'Night owls hooted softly',
  'We strung lights on the patio',
  'The tailor stitched the jacket',
  'Leaves rustled underfoot',
  'We tasted honey at the market',
  'The student solved the riddle',
  'A meadow glowed with flowers',
  'The drummer tested new rhythms',
  'We painted fences white',
  'The barista poured latte art',
  'A rainbow arched after rain',
  'We listened to ocean waves',
  'The hikers reached the summit',
  'Fresh snow covered the bridge',
  'The orchestra opened the show',
  'We cheered for the winner',
];

const storageKeys = {
  unlocked: 'sentenceShuffleUnlocked',
  score: 'sentenceShuffleScore',
  sound: 'sentenceShuffleSound',
  music: 'sentenceShuffleMusic',
};

let currentLevel = 1;
let shuffledWords = [];
let correctWords = [];
let remainingTime = 0;
let timerId = null;
let totalScore = Number(localStorage.getItem(storageKeys.score)) || 0;
let unlockedLevel = Number(localStorage.getItem(storageKeys.unlocked)) || 1;
let soundOn = localStorage.getItem(storageKeys.sound) !== 'off';
let musicOn = localStorage.getItem(storageKeys.music) !== 'off';
let rewardedUsed = false;

const dragState = {
  tile: null,
  offsetX: 0,
  offsetY: 0,
  originParent: null,
};

function updateSoundButtons() {
  soundButton.textContent = `Sound: ${soundOn ? 'On' : 'Off'}`;
  soundButton.setAttribute('aria-pressed', String(soundOn));
  musicButton.textContent = `Music: ${musicOn ? 'On' : 'Off'}`;
  musicButton.setAttribute('aria-pressed', String(musicOn));
}

function playSound(audioEl) {
  if (!soundOn) {
    return;
  }
  audioEl.currentTime = 0;
  audioEl.play().catch(() => undefined);
}

function syncMusic() {
  if (!musicOn) {
    audioMusic.pause();
    return;
  }
  audioMusic.volume = 0.4;
  audioMusic.play().catch(() => undefined);
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('screen--active'));
  screens[name].classList.add('screen--active');
}

function getTimeLimit(wordsCount) {
  if (wordsCount <= 4) {
    return 20;
  }
  if (wordsCount <= 6) {
    return 18;
  }
  if (wordsCount <= 8) {
    return 15;
  }
  if (wordsCount <= 10) {
    return 12;
  }
  return 10;
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

function shuffleArray(list) {
  return list
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function buildLevelsGrid() {
  levelsGrid.innerHTML = '';
  sentences.forEach((sentence, index) => {
    const level = index + 1;
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = level;
    if (level > unlockedLevel) {
      button.classList.add('locked');
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      startLevel(level);
    });
    levelsGrid.appendChild(button);
  });
}

function updateHighestLevel() {
  highestLevelText.textContent = unlockedLevel;
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
}

function updateAdDisplay() {
  if (currentLevel % 3 === 0) {
    adPlaceholder.textContent = 'Interstitial Ad: Brand message goes here.';
  } else {
    adPlaceholder.textContent = 'Ad Space';
  }
}

function startTimer() {
  timerText.textContent = formatTime(remainingTime);
  timerId = setInterval(() => {
    remainingTime -= 1;
    timerText.textContent = formatTime(remainingTime);
    if (remainingTime <= 0) {
      handleLoss();
    }
  }, 1000);
}

function buildTile(word) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.textContent = word;
  tile.dataset.word = word;

  tile.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) {
      return;
    }
    dragState.tile = tile;
    dragState.originParent = tile.parentElement;
    const rect = tile.getBoundingClientRect();
    dragState.offsetX = event.clientX - rect.left;
    dragState.offsetY = event.clientY - rect.top;
    tile.setPointerCapture(event.pointerId);
    tile.classList.add('dragging');
    tile.style.position = 'fixed';
    tile.style.left = `${rect.left}px`;
    tile.style.top = `${rect.top}px`;
    tile.style.width = `${rect.width}px`;
    tile.style.height = `${rect.height}px`;
    tile.style.zIndex = '20';
    document.body.appendChild(tile);
  });

  tile.addEventListener('pointermove', (event) => {
    if (!dragState.tile || dragState.tile !== tile) {
      return;
    }
    tile.style.left = `${event.clientX - dragState.offsetX}px`;
    tile.style.top = `${event.clientY - dragState.offsetY}px`;
  });

  tile.addEventListener('pointerup', (event) => {
    if (!dragState.tile || dragState.tile !== tile) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dropZone = target?.closest('.answer-row, .tile-bank');
    const destination = dropZone || dragState.originParent;
    resetDraggedTile(tile, destination);
    playSound(audioClick);
    checkSolution();
  });

  tile.addEventListener('pointercancel', () => {
    if (dragState.tile === tile) {
      resetDraggedTile(tile, dragState.originParent);
    }
  });

  tile.addEventListener('click', () => {
    if (tile.classList.contains('dragging')) {
      return;
    }
    const destination = tile.parentElement === tileBank ? answerRow : tileBank;
    destination.appendChild(tile);
    playSound(audioClick);
    checkSolution();
  });

  return tile;
}

function resetDraggedTile(tile, destination) {
  tile.classList.remove('dragging');
  tile.style.position = '';
  tile.style.left = '';
  tile.style.top = '';
  tile.style.width = '';
  tile.style.height = '';
  tile.style.zIndex = '';
  destination.appendChild(tile);
  dragState.tile = null;
  dragState.originParent = null;
}

function checkSolution() {
  if (answerRow.children.length !== correctWords.length) {
    return;
  }
  const arranged = Array.from(answerRow.children).map((child) => child.dataset.word);
  const isCorrect = arranged.every((word, index) => word === correctWords[index]);
  if (isCorrect) {
    handleWin();
  }
}

function calculateScore() {
  const base = 100;
  const bonus = remainingTime * 5;
  return base + bonus;
}

function calculateStars() {
  const ratio = remainingTime / getTimeLimit(correctWords.length);
  if (ratio >= 0.65) {
    return '★★★';
  }
  if (ratio >= 0.35) {
    return '★★☆';
  }
  return '★☆☆';
}

function handleWin() {
  resetTimer();
  playSound(audioSuccess);
  const score = calculateScore();
  totalScore += score;
  localStorage.setItem(storageKeys.score, String(totalScore));
  scoreText.textContent = totalScore;
  winScoreText.textContent = score;
  winStarsText.textContent = calculateStars();
  if (currentLevel === unlockedLevel && unlockedLevel < sentences.length) {
    unlockedLevel += 1;
    localStorage.setItem(storageKeys.unlocked, String(unlockedLevel));
  }
  updateHighestLevel();
  buildLevelsGrid();
  showScreen('win');
}

function handleLoss() {
  resetTimer();
  playSound(audioFail);
  showScreen('lose');
}

function startLevel(level) {
  resetTimer();
  rewardedUsed = false;
  rewardedButton.disabled = false;
  currentLevel = level;
  const sentence = sentences[level - 1];
  correctWords = sentence.split(' ');
  shuffledWords = shuffleArray([...correctWords]);
  tileBank.innerHTML = '';
  answerRow.innerHTML = '';
  shuffledWords.forEach((word) => tileBank.appendChild(buildTile(word)));
  remainingTime = getTimeLimit(correctWords.length);
  timerText.textContent = formatTime(remainingTime);
  scoreText.textContent = totalScore;
  updateAdDisplay();
  showScreen('game');
  startTimer();
}

playButton.addEventListener('click', () => {
  startLevel(unlockedLevel);
});

levelsButton.addEventListener('click', () => {
  buildLevelsGrid();
  showScreen('levels');
});

levelsBack.addEventListener('click', () => {
  showScreen('menu');
});

soundButton.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem(storageKeys.sound, soundOn ? 'on' : 'off');
  updateSoundButtons();
});

musicButton.addEventListener('click', () => {
  musicOn = !musicOn;
  localStorage.setItem(storageKeys.music, musicOn ? 'on' : 'off');
  updateSoundButtons();
  syncMusic();
});

exitButton.addEventListener('click', () => {
  showScreen('menu');
});

restartButton.addEventListener('click', () => {
  startLevel(currentLevel);
});

backMenuButton.addEventListener('click', () => {
  showScreen('menu');
});

rewardedButton.addEventListener('click', () => {
  if (rewardedUsed) {
    return;
  }
  remainingTime += 5;
  rewardedUsed = true;
  rewardedButton.disabled = true;
  adPlaceholder.textContent = 'Rewarded Ad Complete: +5 seconds!';
});

nextLevelButton.addEventListener('click', () => {
  const nextLevel = Math.min(currentLevel + 1, sentences.length);
  startLevel(nextLevel);
});

replayLevelButton.addEventListener('click', () => {
  startLevel(currentLevel);
});

retryLevelButton.addEventListener('click', () => {
  startLevel(currentLevel);
});

loseMenuButton.addEventListener('click', () => {
  showScreen('menu');
});

document.addEventListener('pointerup', (event) => {
  if (!dragState.tile) {
    return;
  }
  const tile = dragState.tile;
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const dropZone = target?.closest('.answer-row, .tile-bank');
  const destination = dropZone || dragState.originParent;
  resetDraggedTile(tile, destination);
  playSound(audioClick);
  checkSolution();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    resetTimer();
  } else if (screens.game.classList.contains('screen--active')) {
    startTimer();
  }
});

updateSoundButtons();
updateHighestLevel();
buildLevelsGrid();
syncMusic();
