// youtube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  // div id = "player"
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 여부
      loop: true, // 반복 재생 여부
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID
    },
    events: {
      onReady: function (event){
        event.target.mute() // 음소거
      }
    }
  });
}