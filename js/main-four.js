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
        hebrew: "",
        french: "Facile à apprendre, difficile à maîtriser",
        portuguese: ""
      }
    },
    body: {
      english: {
        russian: "I started to learn Russian my first year in college, and I immediately fell in love. The numerous declensions and conjugations which define the nominal system of Russian reminded me of Latin, and Russia's mysterious history and unique cultural identity have kept me actively interested through to this very day.",
        arabic: "I began studying Arabic out of curiosity, and I continued to study it out of determination. I mastered spoken Arabic during a semester of study abroad in Cairo, Egypt in 2009, and went on to work for Saudi Arabian Airlines for a number of years after college. Although Arabic is quite difficult to learn, the Arab Middle East possesses a rich literary history to reward the effort.",
        hebrew: "",
        french: "When I first began studying French in college, I must admit that I wasn't very good. What French lacked in inflected case endings, it more than made up in complicated sentence structure, intractable agreement rules, and ubiquitous homophones. Not being one to back down from a challenge, I eventually found the difficulties of French more alluring than off-putting, and after extensive personal study, I now use it quite regularly in work for my French-speaking clientele.",
        portuguese: ""
      },
      foreign: {
        russian: "Я начал изучать русский язык на первом курсе в университете, и я сразу же влюбился в него. Многочисленные склонения и спряжения, которые определяют систему существительных в русском языке, напомнили мне о латинском языке, который мне прежде очень нравился. До сегодняшнего дня, загадочная история России и ее уникальное культурное самосознание глубоко меня интересуются.",
        arabic: "بدأت دراسة اللغة العربية بدافع الفضول، وأنا واصلت دراستها بدافع التقرير. أنا حسنت العربية المحكية (العامية) خلال فصل دراسي في الخارج في القاهرة، مصر في عام ٢٠٠٩، وبعد ذلك عملت من أجل الخطوط الجوية العربية السعودية لعدة سنوات بعد التخرج من الجامعة. على الرغم من أن اللغة العربية هي صعبة جدا، الشرق الأوسط العربي يمتلك تاريخا الأدبيا غنيا لمكافأة الجهود في تعلمها",
        hebrew: "",
        french: "Quand j'ai commencé à étudier le français à l'université, je dois avouer que je n'étais pas très bon. Ce que le français manquait dans les terminaisons de cas inflexé, il a plus que compensé par la complexité de la structure de la phrase, les règles d'accord intraitables et les homophones omniprésents. N'étant pas du genre à avoir peur d'un défi, j'ai finalement trouvé les difficultés du français plus séduisants que déconcertants, et après l'étude personnelle approfondie, j'utilise le français maintenant régulièrement dans le travail pour des clients francophones.",
        portuguese: ""
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
      // image.attr("src", )
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
