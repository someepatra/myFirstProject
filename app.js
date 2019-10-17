$(() => {
  //front screen showing all news
  const endpoint =
    "https://newsapi.org/v2/everything?q=news&apiKey=63fa7350c3b0494b91b7f042d7e9b001";
  console.log(endpoint);

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    let $leftShowData = $(".left-container");
    let $rightShowData = $(".right-container");

    console.log(data.articles.length);
    for (i = 0; i < 20; i++) {
      const $title = $("<h6>").text(data.articles[i].title);
      let $img = $("<img>").attr("src", data.articles[i].urlToImage);
      let $url = $("<a>").attr("href", data.articles[i].url);
      $url.text("read more....");

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
let whenSelect = "movies";
let currentIndex = 3;
// fetch data
const fetchData = topic => {
  const endpoint = `https://newsapi.org/v2/everything?q=${topic}&apiKey=63fa7350c3b0494b91b7f042d7e9b001`;

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    $("#list-data").empty();
    for (let i = 0; i < 7; i++) {
      const $title = $("<h6>").text(data.articles[i].title);
      const $img = $("<img>").attr("src", data.articles[i].urlToImage);
      let $url = $("<a>").attr("href", data.articles[i].url);
      $url.text("read more....");
      $("#list-data").append($img);
      $("#list-data").append($title);
      $("#list-data").append($url);
    }
  });
};
// when Buttons  clicked
$(".option").on("click", event => {
  whenSelect = event.currentTarget.id;

  for (let i = 0; i < option.length; i++) {
    if (option[i] === event.currentTarget.id) {
      currentIndex = i;
      //console.log(currentIndex);
    }
  }
  fetchData(whenSelect);
});
// when direction buttons clicked
//currentIndex = 0;
$(".direction-buttons").on("click", event => {
  if (event.currentTarget.id === "next") {
    if (currentIndex < option.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
      whenSelect = option[0];
    }
    whenSelect = option[currentIndex];
    console.log(whenSelect);
  } else {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = option.length - 1;
      whenSelect = option[option.length - 1];
    }
    whenSelect = option[currentIndex];
    console.log(whenSelect);
  }

  fetchData(whenSelect);
});
fetchData(whenSelect);
