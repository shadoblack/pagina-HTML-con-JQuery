$(document).ready(() => {
  console.log("JQuery...OK");
  //slider
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: false,
    slideWidth: 1200,
  });

  //Posts
  var posts = [
    {
      title: "prueba de titulo 1",
      date: "publicado con fecha: " + moment().format("MMM Do YYYY"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "prueba de titulo 2",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "prueba de titulo 3",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "prueba de titulo 4",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "prueba de titulo 5",
      date: new Date(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  console.log(posts);
  posts.forEach((item, index) => {
    //ojo con las comillas,tiene que ser acento abierto.
    var post = `<article class="post"><h2> ${item.title} </h2><span class="date"> ${item.date} </span><p> ${item.content} </p><a href="#" class="button-more">leer más</a></article>`;
    console.log(post);
    $("#posts").append(post);
  });

  //selector de tema
  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  //scroll arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
