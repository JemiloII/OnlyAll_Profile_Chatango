  // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      var player2;
      function onYouTubeIframeAPIReady() {
        // This is the player in the nav bar
        player = new YT.Player('player', {
          height: '0',
          width: '0',
          videoId: 'Fz_O-TViqwc',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        // This is the player in #landings section
        player2 = new YT.Player('player2', {
          height: '0',
          width: '0',
          videoId: '1m9SA-2MwCQ',
          events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        window.state = player.getPlayerState();
        player.setVolume(100);
        player_control();
        //   done = true;
        // }
        // if(state == 1){
        //   var current_volume = player.getVolume();
        //   // Volume Slider
        //   $(function() {
        //     $( "#slider_vertical" ).slider({
        //       orientation: "vertical",
        //       range: "min",
        //       min: 0,
        //       max: 100,
        //       value: 50,
        //       slide: function( event, ui ) {
        //         $( "#volume" ).val( ui.value );
        //         player.setVolume(ui.value);
        //       }
        //     });
        //   });
        //   $('#slider_vertical').find(".ui-slider-range").css('height', current_volume+'%');
          // call the function every 250 milisecond.
          //setInterval(displTime,250);  // PUT THIS STATEMENT JUST AFTER THE PLAYER HAS BEEN CREATED. 
        // }
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
 // 4. The API will call this function when the video player is ready.
      function onPlayerReady2(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done2 = false;
      function onPlayerStateChange2(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done2) {
        window.state2 = player2.getPlayerState();
        player2.setVolume(25);
        player2_control();
        //   done2 = true;
        // }
        // if(state2 == 1){
        //   var current_volume2 = player2.getVolume();
        //   // Volume Slider
        //   $(function() {
        //     $( "#slider_vertical2" ).slider({
        //       orientation: "vertical",
        //       range: "min",
        //       min: 0,
        //       max: 100,
        //       value: 50,
        //       slide: function( event, ui ) {
        //         $( "#volume2" ).val( ui.value );
        //         player2.setVolume(ui.value);
        //       }
        //     });
        //   });
        //   $('#slider_vertical2').find(".ui-slider-range").css('height', current_volume2+'%');
        //   // call the function every 250 milisecond.
        //   //setInterval(displTime2,250);  // PUT THIS STATEMENT JUST AFTER THE PLAYER HAS BEEN CREATED. 
        // }
      }

      
      function displTime2() {
        
        var mind2 = player2.getCurrentTime();   // returns elapsed time in seconds 
        var m2 = Math.floor(mind2 / 60);
        var secd2 = mind2 % 60;
        var s2 = Math.ceil(secd2)

        var dur2 = player2.getDuration();       // returns duration time in seconds

        var dm2 = Math.floor(dur2 / 60);
        var dsecd2 = dur2 % 60;
        var ds2 = Math.ceil(dsecd2)

        var playbackPercent2 = mind2/dur2;
        var sliderValue2 = playbackPercent2 * 100;
        var state2 = player2.getPlayerState();

        var getVolume2 = player2.getVolume();

        $("#time2").html("Current: " + m2 + ":" + n2(s2) + " | Duration: " + dm2 + ":" + n2(ds2) + " | PlayerState: " + state2 + " | Volume: " + getVolume2 + " | Slider Value: " + sliderValue2);  // Using the JQUERY library to write to body
        $( "#slider_timeline2" ).slider({ 
          range: "min",
          min:0,
          value: sliderValue2 });
        
        
        // adds a 0 to the seconds when the time is less than 9 seconds
        function n2(n){
          return n > 9 ? "" + n: "0" + n;
        }
      }
  $('#player_mute_button').click(playermute);
  function playermute(){
    playerVolume = player.getVolume();
    // set play mute icons
    if(playerVolume != 0){
      $('#player_mute_button').queue(function(pmute){
        $(this).removeClass('ui-icon-volume-on').addClass('ui-icon-volume-off');
        player.mute();
        pmute();
      });
    }else if(playerVolume == 0){
      $('#player_mute_button').queue(function(pmute){
        $(this).removeClass('ui-icon-volume-off').addClass('ui-icon-volume-on');
        player.unMute();
        pmute();
      });
    }
  }
  $('#player2_mute_button').click(playermute2);
  function playermute2(){
    player2Volume = player2.getVolume();
    // set player2 mute icons
    if(player2Volume != 0){
      $('#player2_mute_button').queue(function(pmute2){
        $(this).removeClass('ui-icon-volume-on').addClass('ui-icon-volume-off');
        player2.mute();
        pmute2();
      });
    }else if(player2Volume == 0){
      $('#player2_mute_button').queue(function(pmute2){
        $(this).removeClass('ui-icon-volume-off').addClass('ui-icon-volume-on');
        player2.unMute();
        pmute2();
      });
    }
  }
  // var state = player.getPlayerState();
  // var state2 = player2.getPlayerState();
  // $('#player_control_button').click(player_control);
  // function player_control(){
  //   if(state === 1){
  //     $("#player_control_button").removeClass('ui-icon-play').addClass('ui-icon-pause')
  //       .queue(function(pcontrol){
  //         player.pauseVideo();
  //         pcontrol();
  //       });
  //   }else if(state === 2){
  //     $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-play')
  //       .queue(function(pcontrol){
  //       player.playVideo();});
  //   }else if(state === 0){
  //     $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-arrowrefresh-1-e')
  //       .queue(function(pcontrol){
  //         player.playVideo();
  //         pcontrol();
  //       });
  //   }else{
  //     var donothing;
  //   }

  // }

  // set player value
  function player_control(){
    if(window.state === 1){
      $("#player_control_button").removeClass('ui-icon-play').addClass('ui-icon-pause').click(function(){player.pauseVideo();});
    }else if(window.state === 2){
      $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-play').click(function(){player.playVideo();});
    }else if(window.state === 0){
      $("#player_control_button").removeClass('ui-icon-pause').addClass('ui-icon-arrowrefresh-1-e').click(function(){player.playVideo();});
    }else{
      var donothing;
    }
  }
  function player2_control(){
    if(window.state2 === 1){
      $("#player2_control_button").removeClass('ui-icon-play').addClass('ui-icon-pause').click(function(){player2.pauseVideo();});
    }else if(window.state2 === 2){
      $("#player2_control_button").removeClass('ui-icon-pause').addClass('ui-icon-play').click(function(){player2.playVideo();});
    }else if(window.state2 === 0){
      $("#player2_control_button").removeClass('ui-icon-pause').addClass('ui-icon-arrowrefresh-1-e').click(function(){player2.playVideo();});
    }else{
      var donothing;
    }
  }