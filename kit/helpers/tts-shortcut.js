/* 	Quick and dirty JS helper pour tests

		Cf. API SpeechSynthesis
		https://developer.mozilla.org/en/docs/Web/API/SpeechSynthesis
*/

r(function() {
if ('speechSynthesis' in window) {
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	var body = document.getElementsByTagName('body')[0];
	var menu = document.createElement('div');
	var text = body.innerText;
 	var utterance = new SpeechSynthesisUtterance(text);
	utterance.pitch = 1;
	utterance.lang = 'fr-FR';
	var controls = ['speak', 'pause', 'stop'];
	
	for (var i = 0; i < controls.length; i++) {
	  var control = controls[i];
		var button = document.createElement('button');
		button.setAttribute('role', 'button');
		button.classList.add('tts-control');
		button.id = control;
		button.innerText = control;
		menu.appendChild(button);
		button.addEventListener('touchend', speak, true);
		button.addEventListener('click', speak, true);
	}
	
	menu.id = 'tts-menu';	
	body.insertBefore(menu, body.firstChild);
	
	style.setAttribute('type', 'text/css');
	style.textContent = 'button {cursor: pointer; font-size: 1rem; padding: 0.5rem 1.5rem; border: 2px solid black; background-color: white; transition: 300ms all; margin: 0 1%}  #menu {display: block; margin: 1.75em auto; text-align: center} #menu:first-child {margin-left: 0;} #menu:last-child {margin-right: 0;} .tts-active {background-color: #333; color: white; transition: 300ms all;}';

  head.appendChild(style);
	  
	function speak(e) {
	  e.preventDefault();
		var tts = this.id;
		
		switch(tts) {
			case 'speak':
				utterance.paused ? speechSynthesis.resume() : speechSynthesis.speak(utterance);
				break;
			
			case 'pause':
				speechSynthesis.pause();
				utterance.paused = true;
				break;
			
			case 'stop':
				speechSynthesis.cancel();
				utterance.paused = false;
				break;
			
			default:
				console.log('Eh merde. Ça a buggé.');
			};
			
			toggleActive();
			this.classList.add('tts-active');
	};
	
	function toggleActive() {
		var toggle = document.getElementsByClassName('tts-active')[0];
		  if (toggle) {
				toggle.classList.toggle('tts-active');
			}
		}
	
	utterance.onend = function(e) {
		toggleActive();
		utterance.paused = false;  // Back to default
	}
}
});
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}	