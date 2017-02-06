$(function() {
  var hello = $("#hello");
  var im = $("#im");
  var ih = $("#ih");
  var and = $("#and");
  var im2 = $("#im2");
  var a = $("#a");
  var web = $("#web");
  var role = $("#role");

  var brain = $("#brain img");

  var images = [
    "./images/brain/brain-red.png",
    "./images/brain/brain-green.png",
    "./images/brain/brain-yellow.png",
    "./images/brain/brain-blue.png",
  ];

  var content = [
    "designer",
    "strategist",
    "enthusiast",
    "developer",
  ]

  var colors = [
    "#fb3640",
    "#6fb249",
    "#ffe74c",
    "#23aab8",
  ]

  var counter = 0;

  hello.slideDown(1500, function() {
    im.fadeTo(800, 1.0, function() {
      ih.fadeTo(1500, 1.0, function() {
        and.fadeTo(300, 1.0, function() {
          im2.fadeTo(300, 1.0, function() {
            a.fadeTo(300, 1.0, function() {
              web.fadeTo(800, 1.0, function() {
                brain.fadeTo(1500, 1.0);
                role.fadeTo(1500, 1.0, changeColors);
                  })
                })
              })
            })
          })
        })
      })

  function changeColors() {
    if (counter === 3) {
      console.log ('cycle done');
    } else {
      role.fadeOut(1000, function() {
        role
          .text(content[counter])
          .css("color", colors[counter]);
        })
      brain.fadeOut(1000, function() {
        brain.attr("src", images[counter]);
        ih.css("color", colors[counter]);
        hello.css("border", "2px solid "+colors[counter]);
        role.fadeIn(2000, function() {
          counter++;});
        brain.fadeIn(2000, changeColors);
      });
    }

  }

})
