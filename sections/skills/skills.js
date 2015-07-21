function printLang(lang) {
	var el = document.createElement("div");
	el.setAttribute("id", "cont-lang");


	for (var i = 0; lang[i]; i++)
	{
		var lg = document.createElement("div");
		lg.setAttribute("class", "lg");
		lg.innerHTML = "<div class=\"lg-name\">" + lang[i]["name"] + "</div>";
		if (lang[i]["level"] === 4)
			lg.innerHTML += "<div class=\"lg-lvl lg-lvl" + lang[i]["level"] + "\">Native</div>";
		else if (lang[i]["level"] === 3)
			lg.innerHTML += "<div class=\"lg-lvl lg-lvl" + lang[i]["level"] + "\">Confirmed</div>";
		else if (lang[i]["level"] === 2)
			lg.innerHTML += "<div class=\"lg-lvl lg-lvl" + lang[i]["level"] + "\">Intermediate</div>";
		else if (lang[i]["level"] === 1)
			lg.innerHTML += "<div class=\"lg-lvl lg-lvl" + lang[i]["level"] + "\">Beginner</div>";
			
		el.appendChild(lg);
	}
	return (el);
}

function skills() {
	section = document.getElementById('s-skills');
	section.innerHTML = "<h1 class='align-left'>Skills</h1>";
	section.innerHTML += "<h2 class='align-left'>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum utilitatis esset habitura.</h2>";
	
	var sk = {
		"langage": [
			{"name": "French", "level": 4},
			{"name": "English", "level": 2}
		],
		"technologies": [
			{"name": "C", "level": 5},
			{"name": "C++", "level": 5}
		]
	}

	var lang = printLang(sk["langage"]);
	section.appendChild(lang)
	document.body.appendChild(section);
}