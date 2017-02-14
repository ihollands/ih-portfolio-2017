$(function() {
  var links = $("#sub-two h2");

  var title = $("#main-two .main-text h2");
  var body = $("#main-two .main-text");
  var screen = $("#laptop img");

  var titles = [
    "Passionate Web Development",
    "Weight Mate",
    "Phrazberri",
    "Quali-Fi",
    "Salmon Says"
  ]

  var bodies = [
    "<h2>passionate web development</h2><p>For some developers, building websites is a hobby. For me, it's a passion.</p><p>From designing beautiful online homes for content to building powerhouse full-stack web applications, I'm always looking to test the limits with the latest and greatest coding frameworks, technologies, and techniques.</p><p>And yup, I speak Ruby, but my native tongue is JavaScript. Rest assured, whatever the language, I'm always eloquent :)</p>",
    "<h2>Weight Mate</h2><p>Moved to a new city and can't find the right gym partner for your schedule? Enter Weight Mate.</p><p>This full-stack web application connects you with other members just at your gym, displaying essential user profile information to help you find the right partner for your lifts, at your time, and on your schedule.</p><p>It's build with the MEAN (MongoDB | ExpressJS | AngularJS | NodeJS) stack and features full user credentialing, matching, and user-to-user messaging features.</p>",
    "<h2>phrazberri</h2><p>Every serious student of language knows how important it is to learn idioms, but until now, most language learning applications have focused almost exclusively on memorizing vocabulary in isolation.</p><p>Phrazberri is different.</p><p>This full-stack, Ruby on Rails web application allows you to catalogue the idioms you come across as you encounter them, encouraging you to record context, pronunciation, and translation notes to more effectively memorize the toughest part of any foreign language: phrases.</p>",
    "<h2>Quali-Fi (BETA)</h2><p>Employers and applicants in technical fields spend countless hours weeding through resumes and job postings to find the right fit for the position.</p><p>What if they didn't have to?</p><p>Quali-Fi matches employers with applicants (and vice versa) who meet the minimum technical qualifications associated with the job, crunching data on the available pool of active job seekers so that employers can spend less time looking and more time working.</p><p>Quali-Fi is Angular in the front(end) and Rails in the back(end), but whatever end, it's made with love.</p>",
    "<h2>Salmon Says</h2><p>Take a break from your work and have a go at Salmon Says, the first memory game knockoff to prominently feature our floppy, fresh-water friends</p><p>This vanilla HTML, CSS, and JavaScript/JQuery game tests your memory as well as your patience.</p><p>Are you as sharp as you think? Go ahead, test yourself!</p>",
  ];

  var screens = [
    "./images/screengrabs/google.png",
    "./images/screengrabs/weightmate.png",
    "./images/screengrabs/phrazberri.png",
    "./images/screengrabs/quali-fi.png",
    "./images/screengrabs/salmon-says.png",
  ]

  var siteLinks = [
    "",
    "https://secret-eyrie-51636.herokuapp.com/",
    "https://thawing-lowlands-40791.herokuapp.com/",
    "http://quali-fi.jackfive.io/",
    "https://ihollands.github.io/simon/"
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
    screen.parent().attr("href", siteLinks[i]);
    screen.fadeIn(800);
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
