
//your data, we are going to generate elements BASED off our data
var keys = [
  { letter: 'A', soundFile: 'clap.wav', sound: 'clap' },
  { letter: 'S', soundFile: 'hihat.wav', sound: 'hihat' },
  { letter: 'D', soundFile: 'kick.wav', sound: 'kick' },
  { letter: 'F', soundFile: 'openhat.wav', sound: 'openhat' },
  { letter: 'G', soundFile: 'boom.wav', sound: 'boom' },
  { letter: 'H', soundFile: 'ride.wav', sound: 'ride' },
  { letter: 'J', soundFile: 'snare.wav', sound: 'snare' },
  { letter: 'K', soundFile: 'tom.wav', sound: 'tom' },
  { letter: 'L', soundFile: 'tink.wav', sound: 'tink' }
]

keys.forEach(addKeysToBody)
window.addEventListener('keydown', playSound)


// functions
function playSound(event){
  //key character
  var key = event.key.toUpperCase()

  //find audio file by id ysing entered key
  var audioElement = document.getElementById(key)

  if(!audioElement) {
    return;
  }
  // play audio
  audioElement.currentTime = 0;
  audioElement.play()
  audioElement.parentNode.classList.add('play')
}


function addKeysToBody(key){
  //create new elements
  var element = document.createElement('div')
  var audio = document.createElement('audio')
  var span = document.createElement('span')

  //edit element
  element.textContent = key.letter;
  element.classList.add('key')

  // remove play event
  element.addEventListener('transitionend', function(){
    this.classList.remove('play')
  })

  //edit span & add to element
  span.textContent = key.sound.toUpperCase()
  element.appendChild(span)

  //edit audio element
  audio.src = 'sounds/' + key.soundFile
  audio.id = key.letter
  element.appendChild(audio)

  //append elements to page
  document.body.appendChild(element)

}
