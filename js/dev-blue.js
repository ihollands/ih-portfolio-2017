$(function() {
  var links = $("#sub-two h2");

  var title = $("#main-two .main-text h2");
  var body = $("#main-two .main-text p");
  var screen = $("#laptop img");

  var titles = [
    "passionate web development",
    "Weight Mate",
    "Phrazberri",
    "Quali-Fi",
    "Salmon Says"
  ]

  var bodies = [
    "For some developers, building websites is a hobby. For me, it's a passion. From designing beautiful online homes for content to building powerhouse full-stack web applications, I'm always looking to test the limits with the latest and greatest coding frameworks, technologies, and techniques. And yup, I speak Ruby, but my native tongue is JavaScript. Rest assured, whatever the language, I'm always eloquent :)",
    "this is the content for weightmate",
    "this is the content for phrazberri",
    "this is the content for quali-fi",
    "this is the content for salmon says",
  ];

  var screens = [
    "./images/screengrabs/google.png",
    "./images/screengrabs/weightmate.png",
    "./images/screengrabs/phrazberri.png",
    "./images/screengrabs/quali-fi.png",
    "./images/screengrabs/salmon-says.png",
  ]


//update content and manipulate class changes for viz effects
links.on("click", function() {
  links.each(function() {
    $(this).removeClass("active")
  })
  $(this).addClass("active");
  var i = $(this).index();
  screen.fadeOut(800, function() {
    screen.attr("src", screens[i]);
    screen.fadeIn(800);
  })
  title.fadeOut(800, function() {
    title.text(titles[i]);
    title.fadeIn(800);
  })
  body.fadeOut(800, function() {
    body.text(bodies[i]);
    body.fadeIn(800);
  })
})

})
