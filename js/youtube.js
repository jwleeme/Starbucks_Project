var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 id
    playerVars : {
        autoplay: true, // 자동 재생유무
        loop: true,     // 반복 재생유무
        playlist: 'An6LvWQuj_8' // 반복재생할 유튜브 영상 id 목록
    },
    events: {
        onReady: function(event) {
            event.target.mute() //음소거
        }
    }
  });
}


