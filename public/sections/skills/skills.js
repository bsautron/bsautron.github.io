function printLang(lang) {
	var el = document.createElement("div");
	el.setAttribute("id", "cont-lang");
	el.setAttribute("class", "class-skills");

	
	for (var i = 0; lang[i]; i++)
	{
		var lg = document.createElement("div");
		lg.setAttribute("class", "lg");
		lg.innerHTML += "<div class=\"lg-name\">" + lang[i]["name"] + "</div>";
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

function printSkills(skill) {
	var el = document.createElement("div");
	el.setAttribute("id", "cont-skills");
	el.setAttribute("class", "class-skills");


	for (var i = 0; skill[i]  && skill[i]["level"] > 50; i++)
	{
		var sk = document.createElement("div");
		sk.setAttribute("class", "sk");
		sk.innerHTML = "<div class=\"sk-name align-left\" style=\"width:" + skill[i]["level"] + "%\" >" + skill[i]["name"] + "</div>";
		el.appendChild(sk);
	}
	return (el);
}

function printTk(techno) {
	var el = document.createElement("div");
	el.setAttribute("id", "cont-techno");
	el.setAttribute("class", "class-techno");

	var lvl = [
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div"),
		document.createElement("div")
		];

	lvl[0].setAttribute("id", "tk-raw1");
	lvl[0].setAttribute("class", "tk-raw");
	el.appendChild(lvl[0]);
	lvl[1].setAttribute("id", "tk-raw2");
	lvl[1].setAttribute("class", "tk-raw");
	el.appendChild(lvl[1]);
	lvl[2].setAttribute("id", "tk-raw3");
	lvl[2].setAttribute("class", "tk-raw");
	el.appendChild(lvl[2]);
	lvl[3].setAttribute("id", "tk-raw4");
	lvl[3].setAttribute("class", "tk-raw");
	el.appendChild(lvl[3]);
	lvl[4].setAttribute("id", "tk-raw5");
	lvl[4].setAttribute("class", "tk-raw");
	el.appendChild(lvl[4]);


	for (var i = 0; techno[i] && techno[i]["level"] >= 3; i++)
	{
		var tk = document.createElement("div");
		tk.setAttribute("class", "tk");
		tk.innerHTML = "<div class=\"tk-name\">" + techno[i]["name"] + "</div>";
		for (var y = 0; y < techno[i]["level"]; y++)
			tk.innerHTML += "<img src=\"img/star.png\" height=\"25px\"></img>";
		lvl[techno[i]["level"] - 1].appendChild(tk);
		el.appendChild(lvl[techno[i]["level"] - 1]);
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
		"skills": [
			{"name": "Algorithms and AI", "level": 98},
			{"name": "Imperative programming", "level": 90},
			{"name": "Unix", "level": 70},
			{"name": "Web", "level": 60},
			{"name": "Object-oriented programming", "level": 85},
			{"name": "Graphics", "level": 40},
			{"name": "DB & Data", "level": 20},
			{"name": "Network & system administration", "level": 20}
		],
		"technologies": [
			{"name": "c", "level": 5, "img": ""},
			{"name": "c++", "level": 5, "img": ""},
			{"name": "js", "level": 4, "img": ""},
			{"name": "php", "level": 3, "img": ""},
			{"name": "html", "level": 4, "img": ""},
			{"name": "css", "level": 4, "img": ""},
			{"name": "bash", "level": 4, "img": ""},
			{"name": "ajax", "level": 1, "img": ""},
			{"name": "jquery", "level": 3, "img": ""},
			{"name": "sql", "level": 4, "img": ""},
			{"name": "python", "level": 5, "img": ""},
			{"name": "jade", "level": 1, "img": ""}
		]
	}

	sk["skills"].sort(function (a, b) {return (b["level"] - a["level"]);})
	sk["technologies"].sort(function (a, b) {return (b["level"] - a["level"]);})

	var lang = printLang(sk["langage"]);
	var skills = printSkills(sk["skills"]);
	var tk = printTk(sk["technologies"]);

	section.innerHTML += "<h3 class=\"align-left\">Speaking</h3>";
	section.appendChild(lang);
	section.innerHTML += "<h3 class=\"align-left\">Abilities</h3>";
	section.appendChild(skills);
	section.innerHTML += "<h3 class=\"align-left\">Technologies</h3>";
	section.appendChild(tk);
	// $('#footer').befor(section);

	$("#footer").before(section);
	// document.body.appendChild(section);
}