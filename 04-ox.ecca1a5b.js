function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}for(var ref,content=document.querySelector(".content"),KEY_X="keyX",KEY_O="keyO",CURRENT_PLAYER="player",player=localStorage.getItem(CURRENT_PLAYER)||"X",stepX=JSON.parse(localStorage.getItem(KEY_X))||[],stepO=null!==(ref=JSON.parse(localStorage.getItem(KEY_O)))&&void 0!==ref?ref:[],win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],markup="",i=1;i<=9;i+=1)markup+='<div class="item" data-id="'.concat(i,'"></div>');function onClick(e){if(!e.target.textContent){var t=Number(e.target.dataset.id);if("X"===player){stepX.push(t),localStorage.setItem(KEY_X,JSON.stringify(stepX));var r=checkWinner(stepX);if(e.target.textContent=player,r)return console.log("".concat(player," is Winner 😎")),void setTimeout((function(){reset()}),500)}else{stepO.push(t),localStorage.setItem(KEY_O,JSON.stringify(stepO));var n=checkWinner(stepO);if(e.target.textContent=player,n)return console.log("".concat(player," is Winner 😎")),void setTimeout((function(){reset()}),500)}player="X"===player?"O":"X",localStorage.setItem(CURRENT_PLAYER,player)}}function checkWinner(e){return win.some((function(t){return t.every((function(t){return e.includes(t)}))}))}function reset(){content.innerHTML=markup,localStorage.clear(),player="X",stepX=[],stepO=[]}content.insertAdjacentHTML("beforeend",markup),content.addEventListener("click",onClick),function(){try{_toConsumableArray(content.children).forEach((function(e){var t=Number(e.dataset.id);stepX.includes(t)?e.textContent="X":stepO.includes(t)&&(e.textContent="O")}))}catch(e){console.log("localStorage empty")}}();
//# sourceMappingURL=04-ox.ecca1a5b.js.map