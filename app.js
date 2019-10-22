$(() => {
  //front screen showing all news
  const endpoint =
    "https://newsapi.org/v2/everything?q=news&apiKey=98fb96b5fe05420980f849c30e2c1424";
  console.log(endpoint);

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    let $leftShowData = $(".left-container");
    let $rightShowData = $(".right-container");

    for (i = 0; i < 20; i++) {
      const $title = $("<h6>").text(data.articles[i].title);
      let $img = $("<img>").attr("src", data.articles[i].urlToImage);
      let $url = $("<a>").attr("href", data.articles[i].url);
      $url.attr("class", "link");
      $url.text("read more....");
      $img.attr("title", data.articles[i].description);

      if (i < 10) {
        $leftShowData.append($img);
        $leftShowData.append($title);
        $leftShowData.append($url);
      } else {
        $rightShowData.append($img);
        $rightShowData.append($title);
        $rightShowData.append($url);
      }
    }
  });
});
const option = ["current", "sports", "politics", "movies", "weather"];
// default values
let whenSelect = "current";
let currentIndex = 0;

// fetch data according to

const fetchData = topic => {
  const endpoint = `https://newsapi.org/v2/everything?q=${topic}&apiKey=98fb96b5fe05420980f849c30e2c1424`;

  $.ajax({
    url: endpoint
  }).then(data => {
    $("#list-data").empty();
    for (let i = 0; i < data.articles.length; i++) {
      const $title = $("<h6>").text(data.articles[i].title);
      const $img = $("<img>").attr("src", data.articles[i].urlToImage);
      let $url = $("<a>").attr("href", data.articles[i].url);
      $url.attr("class", "link");
      $url.text("read more....");
      $("#list-data").append($img);
      $("#list-data").append($title);
      $("#list-data").append($url);
      $img.attr("title", data.articles[i].description);
    }
  });
};
//"https://newsapi.org/v2/everything?q=National&apiKey=98fb96b5fe05420980f849c30e2c1424"
$("#searchButton").on("click", () => {
  const $str = $("#search").val();
  $("#search").val("");
  fetchData($str);
});
// //when hover
// $(".img").hover(() => {
//   const $desc = $("<h5>")
//     .text(data.articles[i].description)
//     .attr("class", "desc");
// });
// when Buttons  clicked
const slideForeword = () => {
  if (currentIndex < option.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
    whenSelect = option[0];
  }
  whenSelect = option[currentIndex];
  $(".option").css("background-color", "red");
  $(`#${whenSelect}`).css("background-color", "green");
  //console.log(whenSelect);
  fetchData(whenSelect);
};

slideBackword = () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = option.length - 1;
    whenSelect = option[option.length - 1];
  }
  whenSelect = option[currentIndex];
  $(".option").css("background-color", "red");
  $(`#${whenSelect}`).css("background-color", "green");
  //console.log(whenSelect);
  fetchData(whenSelect);
};
//const slide = setInterval(slideForeword, 3000);

//audio play on click

let audio = new Audio("bensound-clearday.mp3");
$(".news").on("click", event => {
  audio.play();
  setInterval(() => {
    audio.pause();
  }, 10000);
});
$(".option").on("click", event => {
  //clearInterval(slide);
  whenSelect = event.currentTarget.id;
  $(".option").css("background-color", "red");
  $(`#${whenSelect}`).css("background-color", "green");
  for (let i = 0; i < option.length; i++) {
    if (option[i] === event.currentTarget.id) {
      currentIndex = i;
    }
  }
  fetchData(whenSelect);
});
// when direction buttons clicked

$(".direction-buttons").on("click", event => {
  if (event.currentTarget.id === "next") {
    slideForeword();
  } else {
    slideBackword();
  }
});
fetchData(whenSelect);
