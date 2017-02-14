$(function() {
  var links = $("#sub-three h2");

  var title = $("#main-three .main-text .text-contain h2");
  var body = $("#main-three .main-text .text-contain");
  var graphic = $("#design-graphic img");

  var titles = [
    "The Design Skills to Get The Job Done",
    "Branding",
    "UI/UX",
    "Print",
    "Art"
  ]

  var bodies = [
    "<h2>the design skills to get it done</h2><p>Lot's of developers know how to code, but how many also have experience with design?</p><p>These days, function and visual harmony are absolutely essential factors in developing a stellar online product.</p><p>You may have the best app in the world, but if it doesn't look sleek and modern, or if it's teeming with bugs, you won't accumulate or retain the userbase that you want.</p>",
    "<h2>Branding</h2><p>I'm really hoping that when this content is longer it won't be weirdly spaced.</p>",
    "<h2>UI/UX</h2><p>UI/UX content</p>",
    "<h2>Print</h2><p>Print content</p>",
    "<h2>Art</h2><p>Art content</p>"
  ];

  var graphicsArray = [
    "./images/design/mobile-devices.png",
    "./images/design/match.png",
    "./images/screengrabs/phrazberri.png",
    "./images/screengrabs/quali-fi.png",
    "./images/screengrabs/salmon-says.png",
  ]

//update content and manipulate class changes for viz effects
links.on("click", function() {
  links.each(function() {
    $(this).removeClass("active");
  })
  $(this).addClass("active");
  var i = $(this).index();
  graphic.fadeOut(800, function() {
    graphic.attr("src", graphicsArray[i]);
    graphic.fadeIn(800);
  })
  title.fadeOut(800, function() {
    title.text(titles[i]);
    title.fadeIn(800);
  })
  body.fadeOut(800, function() {
    body.html(bodies[i]);
    body.fadeIn(800);
  })
})

})
