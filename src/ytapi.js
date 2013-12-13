/* Player Created by JemiloII/OnlyAll               */
/* Go to my github for the full source code!        */
/* https://github.com/JemiloII/Youtube-Audio-Player */


// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'naOBXOdLiig',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

//    The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    var state = player.getPlayerState();
    done = true;
  }
  if(state == 1){
    //var current_volume = player.getVolume();
    // call the function every 250 milisecond.
    //setInterval(displTime,250);  // PUT THIS STATEMENT JUST AFTER THE PLAYER HAS BEEN CREATED. 
  }
  $('#player_mute_button').click(playermute);
function playermute(){
  Volume = player.getVolume();
  // set play mute icons
  if(Volume != 0){
    $('#player_mute_button').queue(function(pmute){
      $(this).removeClass('ui-icon-volume-on').addClass('ui-icon-volume-off');
      player.mute();
      pmute();
    });
  }else if(Volume == 0){
    $('#player_mute_button').queue(function(pmute){
      $(this).removeClass('ui-icon-volume-off').addClass('ui-icon-volume-on');
      player.unMute();
      pmute();
    });
  }
}
  // set player value
  if(player.getPlayerState() == 1){
    $("#player_control_button").removeClass('ui-icon-play').addClass('ui-icon-pause').click(function(){player.pauseVideo();});
  }else if(player.getPlayerState() == 2){
    $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-play').click(function(){player.playVideo();});
  }else if(player.getPlayerState() == 0){
    $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-arrowrefresh-1-e').click(function(){player.playVideo();});
  }else{
    var donothing;
  }
}


function displTime() {
  
  var mind = player.getCurrentTime();   // returns elapsed time in seconds 
  var m = Math.floor(mind / 60);
  var secd = mind % 60;
  var s = Math.ceil(secd)

  var dur = player.getDuration();       // returns duration time in seconds

  var dm = Math.floor(dur / 60);
  var dsecd = dur % 60;
  var ds = Math.ceil(dsecd)

  var playbackPercent = mind/dur;
  var sliderValue = playbackPercent * 100;
  var state = player.getPlayerState();

  var getVolume = player.getVolume();
  // set player value
  if(state == 1){
    $("#player_control_button").removeClass('ui-icon-play').addClass('ui-icon-pause').click(function(){player.pauseVideo();});
  }else if(state == 2){
    $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-play').click(function(){player.playVideo();});
  }else if(state == 0){
    $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-arrowrefresh-1-e').click(function(){player.playVideo();});
  }else{
    var donothing;
  }

  // set play mute icons
  if(getVolume != 0){
    $('#player_mute_button').removeClass('ui-icon-volume-off').addClass('ui-icon-volume-on').click(function(){player.mute();});
  }else{
    $('#player_mute_button').removeClass('ui-icon-volume-on').addClass('ui-icon-volume-off').click(function(){player.unMute();});
  }

  $("#time").html("Current: " + m + ":" + n(s) + " | Duration: " + dm + ":" + n(ds) + " | PlayerState: " + state + " | Volume: " + getVolume + " | Slider Value: " + sliderValue);  // Using the JQUERY library to write to body
  $( "#slider_timeline" ).slider({ 
    range: "min",
    min:0,
    value: sliderValue });
  
  
  // adds a 0 to the seconds when the time is less than 9 seconds
  function n(n){
    return n > 9 ? "" + n: "0" + n;
  }
}