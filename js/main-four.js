$(function() {
  var links = $("#sub-four h2");
  var linguist = $("#linguist");
  var language = $(".language");
  var english = $("#english");
  var image = $("#image");
  var foreign = $("#foreign");


  var content = {
    header: {
      english: {
        russian: "My first linguistic love",
        arabic: "A new way to think about language",
        hebrew: "A little help from an old friend",
        french: "Easy to learn, tough to master",
        portuguese: "Romantic to the last morpheme"
      },
      foreign: {
        russian: "Моя первая языковая любовь",
        arabic: "طريقة جديدة للتفكير في اللغة",
        hebrew: "קצת עזרה מחבר ותיק",
        french: "Facile à apprendre, difficile à maîtriser",
        portuguese: "Romântica até o último morfema"
      }
    },
    body: {
      english: {
        russian: "I started to learn Russian my first year in college, and I immediately fell in love. The numerous declensions and conjugations which define the nominal system of Russian reminded me of Latin, and the deceptively simple verbal system challenged me to rethink my concept of verbal tense. To this very day, the Russian language, together with its mother country's mysterious history and unique cultural identity, keep me actively intrigued and hungry to learn more.",
        arabic: "I began studying Arabic out of curiosity, and I continued to study it out of determination. I mastered spoken Arabic during a semester of study abroad in Cairo, Egypt in 2009, and went on to work for Saudi Arabian Airlines for a number of years after college. Although Arabic is quite difficult to learn, the Arab Middle East possesses a rich literary history to reward the effort.",
        hebrew: "You can't understand the Middle East if you don't understand Hebrew. As one of the major languages of the region, and the original language of the Old Testament, Hebrew is a window to one of the most significant religious and cultural traditions still alive today. Arabic and Hebrew share many similarities of grammar and lexicon, and I enjoy comparing them to reinforce their linguistic proximity and highlight the potential for cooperation inherent to the region as a whole.",
        french: "When I first began studying French in college, I must admit that I wasn't very good. What French lacked in inflected case endings, it more than made up in complicated sentence structure, intractable agreement rules, and ubiquitous homophones. Not being one to back down from a challenge, I eventually found the difficulties of French more alluring than off-putting, and after extensive personal study, I now use it quite regularly in work for my French-speaking clientele.",
        portuguese: "In 2012, I quit my job at Saudi Arabian Airlines in order to see the world and get a better perspective on my life. My friend and I planned a trip to South America, where I picked up a passion for Brazilian Portuguese. Portuguese is like Spanish, but with more interesting sounds, more complicated grammar, and more varied vocabulary. I don't get many opportunities to speak portuguese, but I read Brazilian news and watch Brazilian movies whenever I get the chance."
      },
      foreign: {
        russian: "Я начал изучать русский язык на первом курсе в университете, и я сразу же влюбился в него. Многочисленные склонения и спряжения, которые определяют систему существительных в русском языке, напомнили мне о любимом латинском языке, и обманчиво простая система глаголов вызвала меня пересмотреть мое представление о времени действия. До сегодняшнего дня, русский язык, вместе с загадочной историей своей родины и ее уникальным культурным самосознанием глубоко меня интересуются.",
        arabic: "بدأت دراسة اللغة العربية بدافع الفضول، وأنا واصلت دراستها بدافع التقرير. أنا حسنت العربية المحكية (العامية) خلال فصل دراسي في الخارج في القاهرة، مصر في عام ٢٠٠٩، وبعد ذلك عملت من أجل الخطوط الجوية العربية السعودية لعدة سنوات بعد التخرج من الجامعة. على الرغم من أن اللغة العربية هي صعبة جدا، الشرق الأوسط العربي يمتلك تاريخا الأدبيا غنيا لمكافأة الجهود في تعلمها",
        hebrew: "אתה לא יכול להבין את המזרח התיכון אם אתה לא מבין עברית. בתור אחד השפות העיקריות של האזור, ואת השפה המקורית של התנ׳׳ך, עברית היא חלון לאחת המסורות הדתיות ותרבותיות המשמעותיות ביותר עדיין בחיים היום. עברית וערבית שותפות קווי דמיון רבים של דקדוק ולקסיקון, ואני נהנה השוואות ביניהם לחזק הקרבה הלשונית שלהם ולהדגיש את הפוטנציאל לשיתוף פעולה אינהרנטי לאזור בכללותו",
        french: "Il faut que j'avoue que je parlais très mauvais quand je commençais à étudier le français à l'université. Ce que le français manquait comme des terminaisons de cas inflexé, il a plus que compensé par la complexité de la structure de la phrase, les règles d'accord intraitables et les homophones omniprésents. N'étant pas du genre à avoir peur d'un défi, j'ai finalement trouvé les difficultés du français plus séduisantes que déconcertantes, et après l'étude personnelle approfondie, j'utilise le français maintenant régulièrement dans le travail pour des clients francophones.",
        portuguese: "Em 2012, eu parei meu trabalho na Saudi Arabian Airlines para ver o mundo e ter uma perspectiva melhor da minha vida. Meu amigo e eu planejamos uma viagem para a América do Sul, onde eu peguei uma paixão pelo português brasileiro. O português é como o espanhol, mas com sons mais interessantes, gramática mais complicada e vocabulário mais variado. Agora não tenho muitas oportunidades de falar português, mas leio notícias brasileiras e vejo filmes brasileiros sempre que tenho a chance."
      }
    },
    font: {
      russian: '"PT Sans Narrow", sans-serif',
      arabic: '"Amiri", serif',
      hebrew: '"David Libre", serif',
      french: '"Abel", sans-serif',
      portuguese:'"Abel", sans-serif',
    },
    align: {
      russian: 'left',
      arabic: 'right',
      hebrew: 'right',
      french: 'left',
      portuguese:'left',
    },
    images: {
      russian: 'url(./images/languages/russia.png)',
      arabic: 'url(./images/languages/egypt.png)',
      hebrew: 'url(./images/languages/israel.png)',
      french: 'url(./images/languages/paris_3.png)',
      portuguese: 'url(./images/languages/rio.png)',
    }
  }

  links.on("click", function() {
    var which = $(this).text()
    links.each(function() {
      $(this).removeClass("active");
    })
    $(this).addClass("active");
  //update content and manipulate class changes for viz effects
    if (which === "linguist" && linguist.css("display") === "none") {
      language.fadeOut(800, () => {
        language.children("div").empty();
        linguist.fadeIn(800);
      });
    } else if (which !== "linguist" && linguist.css("display") !== "none") {
      linguist.fadeOut(800, () => {
        language.children("div").empty();
        carousel();
      });
    } else if (which !== "linguist" && linguist.css("display") === "none") {
      language.fadeOut(800, () => {
        language.children("div").empty();
        carousel();
      });
    }
    function carousel() {
      english.find("div").append("<h2>"+content.header.english[which]+"</h2>");
      english.find("div").append("<p>"+content.body.english[which]+"</p>");
      image.css("backgroundImage", content.images[which]);
      foreign.find("div").append("<h2>"+content.header.foreign[which]+"</h2>");
      foreign.find("div").append("<p>"+content.body.foreign[which]+"</p>");
      foreign.css("font-family", content.font[which]);
      foreign.css("text-align", content.align[which]);
      english.fadeIn(500, function() {
        image.fadeIn(500, function() {
          foreign.fadeIn(500);
        })
      })
    };
  });
});
