
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
var input, filter, ul, li, a, i;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
div = document.getElementById("myDropdown");
a = div.getElementsByTagName("a");
for (i = 0; i < a.length; i++) {
  txtValue = a[i].textContent || a[i].innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    a[i].style.display = "";
  } else {
    a[i].style.display = "none";
  }
}
}/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})



try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();





$(function() {
    $(".carousel").on("slide.bs.carousel", function(e) {
      var prev = $(this)
        .find(".active")
        .index();
      var next = $(e.relatedTarget).index();
      var video = $("#video-player")[0];
      var videoSlide = $("#video-player")
        .closest(".carousel-item")
        .index();
      if (next === videoSlide) {
        if (video.tagName == "IFRAME") {
          player.playVideo();
        } else {
          createVideo(video);
        }
      } else {
        if (typeof player !== "undefined") {
          player.pauseVideo();
        }
      }
    });
  });
  
  function createVideo(video) {
    var youtubeScriptId = "youtube-api";
    var youtubeScript = document.getElementById(youtubeScriptId);
    var videoId = video.getAttribute("data-video-id");
  
    if (youtubeScript === null) {
      var tag = document.createElement("script");
      var firstScript = document.getElementsByTagName("script")[0];
  
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = youtubeScriptId;
      firstScript.parentNode.insertBefore(tag, firstScript);
    }
  
    window.onYouTubeIframeAPIReady = function() {
      window.player = new window.YT.Player(video, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          rel: 0
        }
      });
    };
  }
  