$(function(){

  $('#increase').click(function(){
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    let newNameInput = document.createElement('input');
    newNameInput.classList.add('name');
    let newScoreInput = document.createElement('input');
    newScoreInput.classList.add('score');
    newItem.appendChild(newNameInput);
    newItem.appendChild(newScoreInput);
    const input = document.getElementById('input');
    input.appendChild(newItem);

    let newResult = document.createElement('p');
    newResult.innerHTML = 0;
    const resultContainer = document.getElementById('result-container');
    resultContainer.appendChild(newResult);
  });

  $('#decrease').click(function(){
    const input = document.getElementById('input');
    const lastItem = input.lastElementChild;
    lastItem.remove();
    const resultContainer = document.getElementById('result-container');
    const lastResult = resultContainer.lastElementChild;
    lastResult.remove();
  });

  $('#calc').click(function(){
    const scoreHtml = document.getElementsByClassName('score');
    const number = scoreHtml.length;
    let scoreSum = 0;
    for(i=0;i<number;i++){
      let scoreValue = [];
      scoreValue[i] = scoreHtml[i].value;
      scoreSum += Number(scoreValue[i]);
    }
    const scoreAve = scoreSum/number;
    let rate = $('.rate-value').val();
    for(i=0;i<number;i++){
      let scoreValue = [];
      scoreValue[i] = scoreHtml[i].value;
      let scoreMoney = [];
      let scoreEach = [];
      console.log(rate);
      scoreMoney[i] = (scoreValue[i] - scoreAve)*rate;
      scoreWrapper = document.getElementById('result-container');
      scoreEach[i] = scoreWrapper.children[i];
      scoreEach[i].innerHTML = Math.round(scoreMoney[i]);
    }
  });
});
