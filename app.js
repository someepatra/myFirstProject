$(() => {
  console.log("linked");

  //front screen showing all news
  const endpoint =
    "https://newsapi.org/v2/everything?q=news&apiKey=63fa7350c3b0494b91b7f042d7e9b001";
  console.log(endpoint);
  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    let text;
    let $showData = $("#show-data");
    for (i = 1; i < data.articles.length; i++) {
      text += data.articles[i].title + "<br>";
    }
    $showData.append(text);
  });
});
const $container = $(".container");

// when Sports is clicked
$("#sports").on("click", event => {
  const endpoint =
    "https://newsapi.org/v2/everything?q=sports&apiKey=63fa7350c3b0494b91b7f042d7e9b001";

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);

    for (let i = 0; i < 3; i++) {
      const $author = $("<h1>").text(data.articles[i].author);
      const $title = $("<h2>").text(data.articles[i].title);

      // const $img = $("<img>").attr("src", data.articles[i].urlToImage);

      $("#sports").append($title);
      //$("#sports").append($img);
    }
  });
});

// when Politics is clicked
$("#politics").on("click", event => {
  const endpoint =
    "https://newsapi.org/v2/everything?q=politics&apiKey=63fa7350c3b0494b91b7f042d7e9b001";

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);

    for (let i = 0; i < 3; i++) {
      const $author = $("<h1>").text(data.articles[i].author);
      const $title = $("<h2>").text(data.articles[i].title);
      //const $img = $("<img>").attr("src", data.articles[i].urlToImage);

      $("#politics").append($title);
      //$("#politics").append($img);
    }
  });
});

// when Movies is clicked
$("#movies").on("click", event => {
  const endpoint =
    "https://newsapi.org/v2/everything?q=movies&apiKey=63fa7350c3b0494b91b7f042d7e9b001";

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    for (let i = 0; i < 3; i++) {
      const $title = $("<h1>").text(data.articles[i].title);
      const $img = $("<img>").attr("src", data.articles[i].urlToImage);

      $("#movies").append($title);
      $("#movies").append($img);
    }
  });
});

//when Weather is clicked
$("#weather").on("click", event => {
  const endpoint =
    "https://newsapi.org/v2/everything?q=weather&apiKey=63fa7350c3b0494b91b7f042d7e9b001";

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    for (let i = 0; i < 3; i++) {
      const $title = $("<h1>").text(data.articles[i].title);
      const $img = $("<img>").attr("src", data.articles[i].urlToImage);

      $("#weather").append($title);
      $("#weather").append($img);
    }
  });
});
//when Current is clicked
$("#current").on("click", event => {
  const endpoint =
    "https://newsapi.org/v2/everything?q=current&apiKey=63fa7350c3b0494b91b7f042d7e9b001";

  $.ajax({
    url: endpoint
  }).then(data => {
    console.log(data);
    for (let i = 0; i < 3; i++) {
      const $title = $("<h1>").text(data.articles[i].title);
      const $img = $("<img>").attr("src", data.articles[i].urlToImage);

      $("#current").append($title);
      $("#current").append($img);
    }
  });
});
