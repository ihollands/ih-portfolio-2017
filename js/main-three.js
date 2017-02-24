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
    "<h2>Branding</h2><p>People don't interact with your business, they interact with your <em>brand</em>. That brand is your organization's identity, and it plays a vital role in your relationship with your customers and clients.</p><p>Awareness of the role of brand is vital to effective web design and development, and yet most developers lack this crucial skill.</p><p>With years of experience managing and executing strategic brand initiatives for a wide range of corporate clients, I always plan, design, and code with the brand and the mission in mind. </p>",
    "<h2>UI/UX</h2><p>Clean, fast user interface design and user experience testing is a vital component of any successful website, and it is arguably the most important consideration after branding.</p><p>Who are your users? Does your site layout information in a way that is intuitive for them? Help them achieve their goals? Make them want to come back? Tell their networks about it? Share it on social media?</p><p>Although I'm a developer first, I bring an awareness and expertise in UI/UX and messaging considerations into every project I do.</p><p>After all, a website without visitors isn't much good to anyone, and a website with the wrong users is as useful as one without any.</p>",
    "<h2>Print</h2><p>In addition to web, I've designed everything from fliers and brochures to conference banners and professional reports.</p><p>As any designer can tell you, there are different considerations when designing for print, and precision and measurements is key to getting the perfect final product.</p><p>Whatever the medium, I pride myself in bringing a careful attention to detail into my work.",
    "<h2>Art</h2><p>Graphic design has always been a passion, and my years of experience as the only designer at a small digital communications firm allowed me the freedom to expand my creative talents and explore new design avenues with exciting client work.</p><p>In my spare time, I like to deconstruct cool visual effects that I see around the web and teach myself new techniques for perfecting digital art and design. I'll never be \"done\" learning, but with professional level certification in Adobe Photoshop and as many years of experience with Illustrator, I know how to translate/incorporate digital art cleanly and efficiently into code.</p>"
  ];

  var graphicsArray = [
    "./images/design/mobile-devices.png",
    "./images/design/match.png",
    "./images/design/bear.png",
    "./images/design/print.png",
    "./images/design/hawk.png",
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
