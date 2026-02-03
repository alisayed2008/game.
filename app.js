const screens = {
  menu: document.getElementById('screen-menu'),
  levels: document.getElementById('screen-levels'),
  game: document.getElementById('screen-game'),
  win: document.getElementById('screen-win'),
  lose: document.getElementById('screen-lose'),
};



const soundButton = document.getElementById('sound-button');
const musicButton = document.getElementById('music-button');


const levelsGrid = document.getElementById('levels-grid');




const timerText = document.getElementById('timer');








const nextLevelButton = document.getElementById('next-level');
const replayLevelButton = document.getElementById('replay-level');
const retryLevelButton = document.getElementById('retry-level');


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




};

let currentLevel = 1;

let correctWords = [];
let remainingTime = 0;
let timerId = null;


let soundOn = localStorage.getItem(storageKeys.sound) !== 'off';
let musicOn = localStorage.getItem(storageKeys.music) !== 'off';


const dragState = {
  tile: null,
  offsetX: 0,
  offsetY: 0,
  originParent: null,
};






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




}




   


   


  }


  }

}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}






}

function buildLevelsGrid() {
  levelsGrid.innerHTML = '';


      const button = document.createElement('button');



        button.classList.add('locked');
      button.disabled = true;
    }



    levelsGrid.appendChild(button);
  });
}



}


  clearInterval(timerId);
  timerId = null;
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


         
    tile.style.left = `${event.clientX - dragState.offsetX}px`;
    tile.style.top = `${event.clientY - dragState.offsetY}px`;
  });

  tile.addEventListener('pointerup', (event) => {



      const target = document.elementFromPoint(event.clientX, event.clientY);

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


         


        playSound(audioClick);
    checkSolution();
  });

  return tile;
}


  tile.classList.remove('dragging');



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





 





  }


   

}

function handleWin() {

    playSound(audioSuccess);






    if (currentLevel === unlockedLevel && unlockedLevel < sentences.length) {
    unlockedLevel += 1;
    localStorage.setItem(storageKeys.unlocked, String(unlockedLevel));
  }

    buildLevelsGrid();
  showScreen('win');
}

function handleLoss() {

    playSound(audioFail);
  showScreen('lose');
}

function startLevel(level) {



    currentLevel = level;

    correctWords = sentence.split(' ');


    answerRow.innerHTML = '';


    timerText.textContent = formatTime(remainingTime);


    showScreen('game');
  startTimer();
}



 




 



 

soundButton.addEventListener('click', () => {
  soundOn = !soundOn;
  localStorage.setItem(storageKeys.sound, soundOn ? 'on' : 'off');

  });

musicButton.addEventListener('click', () => {
  musicOn = !musicOn;
  localStorage.setItem(storageKeys.music, musicOn ? 'on' : 'off');
  updateSoundButtons();
  syncMusic();
});



});



});



});




   




});




 



});



 





document.addEventListener('pointerup', (event) => {


 
  const tile = dragState.tile;
  const target = document.elementFromPoint(event.clientX, event.clientY);

    const destination = dropZone || dragState.originParent;
  resetDraggedTile(tile, destination);
  playSound(audioClick);
  checkSolution();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {

      } else if (screens.game.classList.contains('screen--active')) {
    startTimer();
  }
});



buildLevelsGrid();
syncMusic();
