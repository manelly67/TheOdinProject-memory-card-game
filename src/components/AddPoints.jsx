function AddPoints(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  
  let itemSelected = arg1;
  let score = arg2;
  let setScore = arg3;
  let clickHistory = arg4;
  let setClickHistory = arg5;
  let bestScore = arg6;
  let setBestScore = arg7;

  let tempScore = score;

  switch (clickHistory.includes(itemSelected)) {
    case true:
      checkBestScore(score,bestScore, setBestScore);
      setScore(0);
      clearHistory(setClickHistory);
      break;
    case false:
      ++tempScore;
      setScore(tempScore);
      saveHistory(itemSelected, clickHistory, setClickHistory);
      break;
  }
}

function checkBestScore(score,bestScore, setBestScore) {
  let newScore = score;
  if (newScore > bestScore) {
    setBestScore(newScore);
  }
}

function saveHistory(itemSelected, clickHistory, setClickHistory) {
   setClickHistory([...clickHistory,itemSelected]);
}

function clearHistory(setClickHistory) {
  setClickHistory([]);
}

export { AddPoints };

