const body = document.body;
const screens = {
  menu: document.getElementById('screen-menu'),
  levels: document.getElementById('screen-levels'),
  game: document.getElementById('screen-game'),
  win: document.getElementById('screen-win'),
  lose: document.getElementById('screen-lose'),
};



const soundButton = document.getElementById('sound-button');
const musicButton = document.getElementById('music-button');

const soundIcon = document.getElementById('sound-icon');
const musicIcon = document.getElementById('music-icon');
const startButton = document.getElementById('start-button');
const levelsSound = document.getElementById('levels-sound');
const levelsMusic = document.getElementById('levels-music');
const levelsSoundIcon = document.getElementById('levels-sound-icon');
const levelsMusicIcon = document.getElementById('levels-music-icon');
const levelsGrid = document.getElementById('levels-grid');
const levelsCoinCount = document.getElementById('levels-coin-count');

const gameSound = document.getElementById('game-sound');
const gameMusic = document.getElementById('game-music');
const gameSoundIcon = document.getElementById('game-sound-icon');
const gameMusicIcon = document.getElementById('game-music-icon');
const exitButton = document.getElementById('exit-button');
const levelTitle = document.getElementById('level-title');
const coinCount = document.getElementById('coin-count');
const timerWrap = document.getElementById('timer-wrap');

const timerText = document.getElementById('timer');
const playfield = document.getElementById('playfield');
const answerRow = document.getElementById('answer-row');
const addTimeButton = document.getElementById('add-time');
const adTimeButton = document.getElementById('ad-time');








const nextLevelButton = document.getElementById('next-level');
const replayLevelButton = document.getElementById('replay-level');
const retryLevelButton = document.getElementById('retry-level');
const loseBackButton = document.getElementById('lose-back');

const wheel = document.getElementById('wheel');
const wheelCircle = document.getElementById('wheel-circle');
const wheelResult = document.getElementById('wheel-result');
const wheelSpin = document.getElementById('wheel-spin');
const wheelSpinAd = document.getElementById('wheel-spin-ad');
const wheelTimer = document.getElementById('wheel-timer');
const wheelClose = document.getElementById('wheel-close');

const audioClick = document.getElementById('audio-click');
const audioSuccess = document.getElementById('audio-success');
const audioFail = document.getElementById('audio-fail');
const audioCoin = document.getElementById('audio-coin');
const audioAlarm = document.getElementById('audio-alarm');
const audioMusic = document.getElementById('audio-music');

const sentences = [
  'تشرق الشمس فوق المدينة الهادئة',
  'النسيم يحمل رائحة البحر',
  'ضحكات الاطفال تملأ الحديقة',
  'القط ينام فوق الوسادة',
  'الزهور تتفتح في الصباح',
  'الطيور تغني فوق الاشجار',
  'الحديقة مليئة بالالوان',
  'القمر يضيء الطريق ليلا',
  'المطر يطرق النوافذ بهدوء',
  'الطاهي يجهز العشاء اللذيذ',
  'السيارة تسير في الطريق الطويل',
  'الطلاب يكتبون الدروس بتركيز',
  'الصديق يرسل رسالة لطيفة',
  'الجد يحكي قصصا جميلة',
  'الموسيقى تعزف في المقهى',
  'الكتاب مفتوح على الصفحة الاخيرة',
  'الطائرة تحلق فوق الغيوم',
  'السمكة تقفز من الماء',
  'النافورة تتلألأ تحت الضوء',
  'الطريق يمر بين الجبال',
  'الرياح تدفع القارب الصغير',
  'الصبي يجمع الاحجار الملونة',
  'الام تطبخ خبزا طازجا',
  'الرسام يرسم لوحة جديدة',
  'المدرب يشجع الفريق بقوة',
  'الساعة تشير الى منتصف الليل',
  'العصافير تبني اعشاشها',
  'النجوم تلمع فوق الصحراء',
  'القهوة الساخنة في الصباح',
  'القطة تراقب الفراشة',
  'الطفلة تقفز فوق الحبل',
  'البحر هادئ في المساء',
  'الغابة مليئة بالاسرار',
  'السباح يقطع المسافة بسرعة',
  'الحلوى تزين الطاولة',
  'الشمس تغرب خلف التلال',
  'الصياد يعود مع السمك',
  'القطار يصل قبل الغروب',
  'العربة تمر في السوق',
  'الزهور تتمايل مع الهواء',
  'المعلم يشرح الدرس بوضوح',
  'الطفل يرسم نجمة صغيرة',
  'المزارع يسقي الحقول',
  'الكرة تدور في الملعب',
  'السماء صافية اليوم',
  'المكتبة تفتح ابوابها مبكرا',
  'البيت يلمع بعد التنظيف',
  'الورق يتطاير مع الريح',
  'الطائرة تهبط بسلاسة',
  'الثلج يغطي الطرقات',
  'الحداد يصنع اداة قوية',
  'القارب يرسو عند الميناء',
  'الطفلة تغني اغنية جميلة',
  'الجسر يعبر النهر الكبير',
  'الساعة تدق في القاعة',
  'الشجرة تعطي ظلا لطيفا',
  'السماء تمتلئ بالغيوم',
  'الحصان يجري في المروج',
  'الخباز يزين الكعكة',
  'العطر يفوح في الغرفة',
  'الطلاب يحتفلون بالنجاح',
  'المطر ينعش الارض',
  'الكتاب يروي مغامرة جديدة',
  'النافذة تطل على الحديقة',
  'الاوراق تتساقط في الخريف',
  'القطار يطلق صافرة عالية',
  'العائلة تتناول العشاء معا',
  'الزهرة البيضاء جميلة جدا',
  'الصخرة كبيرة وثابتة',
  'الريح تحرك الغيوم بسرعة',
  'الضوء يدخل من النافذة',
  'الاطفال يلعبون في الفناء',
  'الطبيب يبتسم للمريض',
  'السماء زرقاء صافية',
  'القصة تنتهي بسعادة',
  'المسرح يضيء بالالوان',
  'المسافر يحمل حقيبة ثقيلة',
  'العصفور يشرب من البركة',
  'الطفل يركب الدراجة',
  'الوردة حمراء وجميلة',
  'النجمة تلمع في السماء',
  'المعلم يصحح الواجبات',
  'العجوز يسير ببطء',
  'الكاتبة تنهي الرواية',
  'الغيم يغطي الشمس قليلا',
  'السوق مزدحم اليوم',
  'الرسالة وصلت في الوقت',
  'الطاهي يضيف البهارات',
  'الزهور تزين الحديقة',
  'الطفل يفتح الهدية',
  'القطة تلعق مخالبها',
  'الصخرة تقف عند النهر',
  'البيت دافئ في الشتاء',
  'الثلج يلمع تحت الضوء',
  'القارب يبتعد عن الشاطئ',
  'الطريق يلتف حول التل',
  'المتسلق يصل الى القمة',
  'القطار يمر بجانب البحيرة',
  'السمك يسبح في النهر',
  'الطائر يحلق فوق المزارع',
  'الاطفال يلوحون بالايدي',
  'المدينة تستيقظ مع الفجر',
];

const storageKeys = {
  unlocked: 'arabicShuffleUnlocked',
  coins: 'arabicShuffleCoins',
  sound: 'arabicShuffleSound',
  music: 'arabicShuffleMusic',
  order: 'arabicShuffleOrder',
  wheelTime: 'arabicShuffleWheelTime',
  wheelResult: 'arabicShuffleWheelResult',



};

let currentLevel = 1;

let correctWords = [];
let remainingTime = 0;
let timerId = null;
let warningPlayed = false;

let soundOn = localStorage.getItem(storageKeys.sound) !== 'off';
let musicOn = localStorage.getItem(storageKeys.music) !== 'off';
let coins = Number(localStorage.getItem(storageKeys.coins)) || 20;
let unlockedLevel = Number(localStorage.getItem(storageKeys.unlocked)) || 1;
let levelOrder = loadLevelOrder();

const dragState = {
  tile: null,
  offsetX: 0,
  offsetY: 0,
  originParent: null,
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('screen--active'));
  screens[name].classList.add('screen--active');
  body.className = `theme theme--${name}`;





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

function updateSoundIcons() {
  const soundSrc = soundOn ? 'assets/icons/sound-on.svg' : 'assets/icons/sound-off.svg';
  const musicSrc = musicOn ? 'assets/icons/music-on.svg' : 'assets/icons/music-off.svg';
  [soundIcon, levelsSoundIcon, gameSoundIcon].forEach((icon) => {
    icon.src = soundSrc;
  });
  [musicIcon, levelsMusicIcon, gameMusicIcon].forEach((icon) => {
    icon.src = musicSrc;
  });
  [soundButton, levelsSound, gameSound].forEach((btn) => btn.setAttribute('aria-pressed', String(soundOn)));
  [musicButton, levelsMusic, gameMusic].forEach((btn) => btn.setAttribute('aria-pressed', String(musicOn)));


}

function updateCoins() {
  coinCount.textContent = coins;
  levelsCoinCount.textContent = coins;
  localStorage.setItem(storageKeys.coins, String(coins));
}

function loadLevelOrder() {
  const stored = localStorage.getItem(storageKeys.order);
  if (stored) {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed) && parsed.length === sentences.length) {
      return parsed;
    }

  const order = sentences.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
   


   


  }

  localStorage.setItem(storageKeys.order, JSON.stringify(order));
  return order;
  }

}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

function getTimeLimit(wordsCount, level) {
  let base = 18;
  if (wordsCount <= 4) base = 20;
  if (wordsCount <= 6) base = 18;
  if (wordsCount <= 8) base = 15;
  if (wordsCount <= 10) base = 12;
  if (level % 4 === 0) {
    base = Math.max(8, base - 2);
  }
  return base;




}

function buildLevelsGrid() {
  levelsGrid.innerHTML = '';
  for (let i = 1; i <= sentences.length; i += 1) {

      const button = document.createElement('button');
    button.className = 'level-card';
    if (i === unlockedLevel) {
      button.classList.add('current');
    }
    if (i > unlockedLevel) {


        button.classList.add('locked');
      button.disabled = true;
    }
    const img = document.createElement('img');
    img.src = 'assets/icons/level.png';
    img.alt = `مرحلة ${i}`;
    button.appendChild(img);
    button.addEventListener('click', () => startLevel(i));


    levelsGrid.appendChild(button);
  } 
}
function getLevelSentence(level) {
  const index = levelOrder[level - 1];
  let sentence = sentences[index];
  if (level % 6 === 0) {
    const extraIndex = levelOrder[(level + 5) % sentences.length];
    sentence = `${sentence} ${sentences[extraIndex]}`;
  }
  return sentence;


}

function clearTimer() {
  clearInterval(timerId);
  timerId = null;
}






   
 

function startTimer() {
  timerText.textContent = formatTime(remainingTime);
  timerId = setInterval(() => {
    remainingTime -= 1;
    timerText.textContent = formatTime(remainingTime);
        if (remainingTime <= 5) {
      timerWrap.classList.add('warning');
      if (!warningPlayed) {
        playSound(audioAlarm);
        if (navigator.vibrate) {
          navigator.vibrate([120, 100, 120]);
        }
        warningPlayed = true;
      }
    }
    if (remainingTime <= 0) {
      handleLoss();
    }
  }, 1000);
}
function getRandomPosition(container, tile) {
  const bounds = container.getBoundingClientRect();
  const tileWidth = tile.offsetWidth || 70;
  const tileHeight = tile.offsetHeight || 34;
  const maxX = Math.max(8, bounds.width - tileWidth - 8);
  const maxY = Math.max(8, bounds.height - tileHeight - 8);
  return {
    x: Math.random() * maxX,
    y: Math.random() * maxY,
  };
}

function placeTile(tile, container) {
  const { x, y } = getRandomPosition(container, tile);
  tile.style.left = `${x}px`;
  tile.style.top = `${y}px`;
}

function buildTile(word) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.textContent = word;
  tile.dataset.word = word;

  tile.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;

         
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
    tile.style.zIndex = '30';
    document.body.appendChild(tile);
  });

  tile.addEventListener('pointermove', (event) => {
    if (!dragState.tile || dragState.tile !== tile) return;

         
    tile.style.left = `${event.clientX - dragState.offsetX}px`;
    tile.style.top = `${event.clientY - dragState.offsetY}px`;
  });

  tile.addEventListener('pointerup', (event) => {
    if (!dragState.tile || dragState.tile !== tile) return;


      const target = document.elementFromPoint(event.clientX, event.clientY);
    const dropZone = target?.closest('.answer-row, .playfield');
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
    if (tile.classList.contains('dragging')) return;
    const destination = tile.parentElement === answerRow ? playfield : answerRow;
    moveTile(tile, destination);

         


        playSound(audioClick);
    checkSolution();
  });

  return tile;
}
function moveTile(tile, destination) {

  tile.classList.remove('dragging');
  tile.style.position = destination === playfield ? 'absolute' : 'relative';
  tile.style.left = destination === playfield ? '' : '';
  tile.style.top = destination === playfield ? '' : '';
  tile.style.width = '';
  tile.style.height = '';
  tile.style.zIndex = '';
  destination.appendChild(tile);
    if (destination === playfield) {
    placeTile(tile, playfield);
  } else {
    tile.style.position = 'relative';
  }
  dragState.tile = null;
  dragState.originParent = null;
}
function resetDraggedTile(tile, destination) {
  moveTile(tile, destination);
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

function animateCoinGain(amount) {
  playSound(audioCoin);
  const target = coinCount.getBoundingClientRect();
  for (let i = 0; i < amount; i += 1) {
    const coin = document.createElement('img');
    coin.src = 'assets/icons/coin.svg';
    coin.className = 'coin-fly';
    coin.style.left = `${window.innerWidth / 2}px`;
    coin.style.top = `${window.innerHeight / 2}px`;
    const dx = target.left - window.innerWidth / 2;
    const dy = target.top - window.innerHeight / 2;
    coin.style.setProperty('--dx', `${dx}px`);
    coin.style.setProperty('--dy', `${dy}px`);
    document.body.appendChild(coin);
    setTimeout(() => coin.remove(), 800);



 





  }


   

}

function handleWin() {
  clearTimer();
    playSound(audioSuccess);
  coins += 3;
  animateCoinGain(3);
  updateCoins();





    if (currentLevel === unlockedLevel && unlockedLevel < sentences.length) {
    unlockedLevel += 1;
    localStorage.setItem(storageKeys.unlocked, String(unlockedLevel));
  }

    buildLevelsGrid();
  showScreen('win');
}

function handleLoss() {
  clearTimer();
    playSound(audioFail);
  showScreen('lose');
}

function startLevel(level) {
  clearTimer();
  warningPlayed = false;
  timerWrap.classList.remove('warning');


    currentLevel = level;
  const sentence = getLevelSentence(level);
    correctWords = sentence.split(' ');
  const shuffled = [...correctWords];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

    answerRow.innerHTML = '';
  playfield.innerHTML = '';
  shuffled.forEach((word) => {
    const tile = buildTile(word);
    playfield.appendChild(tile);
    requestAnimationFrame(() => placeTile(tile, playfield));
  });
  remainingTime = getTimeLimit(correctWords.length, level);

    timerText.textContent = formatTime(remainingTime);
  levelTitle.textContent = `المرحلة رقم ${level}`;

    showScreen('game');
  startTimer();
}

function startFromMenu() {
  playSound(audioClick);
  screens.menu.classList.add('fade-out');
  setTimeout(() => {
    screens.menu.classList.remove('fade-out');
    showScreen('levels');
  }, 500);
}

 function updateWheelDisplay() {
  const lastTime = Number(localStorage.getItem(storageKeys.wheelTime)) || 0;
  const now = Date.now();
  const cooldown = 12 * 60 * 60 * 1000;
  const remaining = Math.max(0, cooldown - (now - lastTime));
  if (remaining > 0) {
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    wheelTimer.textContent = `تجدد بعد ${hours} ساعة و ${minutes} دقيقة`;
    wheelSpin.disabled = true;
  } else {
    wheelTimer.textContent = 'جاهزة للدوران';
    wheelSpin.disabled = false;
  }
  const result = localStorage.getItem(storageKeys.wheelResult);
  wheelResult.textContent = result ? `نتيجتك: ${result}` : 'جاهزة للدوران';
}


function spinWheel(isAd) {
  const lastTime = Number(localStorage.getItem(storageKeys.wheelTime)) || 0;
  const now = Date.now();
  const cooldown = 12 * 60 * 60 * 1000;
  if (!isAd && now - lastTime < cooldown) {
    return;
  }
  const options = [0, 10, 20, 30];
  const pick = options[Math.floor(Math.random() * options.length)];
  if (!isAd) {
    localStorage.setItem(storageKeys.wheelTime, String(now));
  }
  if (pick > 0) {
    coins += pick;
    updateCoins();
    animateCoinGain(1);
  }
  const resultText = pick === 0 ? 'فارغ' : `${pick} نقطة`;
  localStorage.setItem(storageKeys.wheelResult, resultText);
  wheelCircle.style.transform = `rotate(${Math.random() * 720 + 360}deg)`;
  wheelResult.textContent = `نتيجتك: ${resultText}`;
  updateWheelDisplay();
}

function addTimeWithCoins() {
  if (coins < 10) {
    return;
  }
  coins -= 10;
  remainingTime += 5;
  updateCoins();
  timerText.textContent = formatTime(remainingTime);
}

function addTimeWithAd() {
  remainingTime += 10;
  timerText.textContent = formatTime(remainingTime);
}

 



 

soundButton.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem(storageKeys.sound, soundOn ? 'on' : 'off');
  updateSoundIcons();
  });

musicButton.addEventListener('click', () => {
  musicOn = !musicOn;
  localStorage.setItem(storageKeys.music, musicOn ? 'on' : 'off');
    updateSoundIcons();
  syncMusic();
});

levelsSound.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem(storageKeys.sound, soundOn ? 'on' : 'off');
  updateSoundIcons();

});

levelsMusic.addEventListener('click', () => {
  musicOn = !musicOn;
  localStorage.setItem(storageKeys.music, musicOn ? 'on' : 'off');
  updateSoundIcons();
  syncMusic();

});

gameSound.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem(storageKeys.sound, soundOn ? 'on' : 'off');
  updateSoundIcons();

});

gameMusic.addEventListener('click', () => {
  musicOn = !musicOn;
  localStorage.setItem(storageKeys.music, musicOn ? 'on' : 'off');
  updateSoundIcons();
  syncMusic();


   




});


startButton.addEventListener('click', startFromMenu);

 wheelSpin.addEventListener('click', () => spinWheel(false));
wheelSpinAd.addEventListener('click', () => spinWheel(true));
wheelClose.addEventListener('click', () => {
  wheel.style.display = 'none';



});



 addTimeButton.addEventListener('click', addTimeWithCoins);
addTimeButton.addEventListener('pointerdown', () => playSound(audioClick));

adTimeButton.addEventListener('click', addTimeWithAd);

exitButton.addEventListener('click', () => showScreen('levels'));

nextLevelButton.addEventListener('click', () => startLevel(Math.min(currentLevel + 1, sentences.length)));
replayLevelButton.addEventListener('click', () => startLevel(currentLevel));
retryLevelButton.addEventListener('click', () => startLevel(currentLevel));
loseBackButton.addEventListener('click', () => showScreen('levels'));



document.addEventListener('pointerup', (event) => {

  if (!dragState.tile) return;
 
  const tile = dragState.tile;
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const dropZone = target?.closest('.answer-row, .playfield');
    const destination = dropZone || dragState.originParent;
  resetDraggedTile(tile, destination);
  playSound(audioClick);
  checkSolution();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearTimer();
      } else if (screens.game.classList.contains('screen--active')) {
    startTimer();
  }
});


updateSoundIcons();
updateCoins();
buildLevelsGrid();
updateWheelDisplay();
syncMusic();
