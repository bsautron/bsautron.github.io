// import Math from "math"

function printLang(lang) {
	var el = document.createElement("div");
	el.setAttribute("id", "cont-lang");
	el.setAttribute("class", "class-skills");
	el.setAttribute("data-sr", "scale down 10%");
	
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
		sk.setAttribute("data-sr", "enter left, hustle 30px");
		sk.innerHTML = "<div class=\"sk-name align-left\" style=\"width:" + skill[i]["level"] + "%\" >" + skill[i]["name"] + "</div>";
		el.appendChild(sk);
	}

	return (el);
}

function printTk(category, techno) {
	var el = document.createElement("div");
	el.setAttribute("id", "cont-techno");
	el.setAttribute("class", "class-techno");

	var cate = [],
			y = 0;

	for (var key in category) {

		cate.push( {"name": category[key], "element": document.createElement("div") , "cont-techno": document.createElement("div")} );
		cate[y]["element"].setAttribute("id", "cate-" + category[key]);
		cate[y]["element"].setAttribute("class", "cate");
		cate[y]["element"].innerHTML = "<div class='cate-name' data-sr=''>" +
											"<div class=\"cate-border\"></div>" + 
											"<div class='cate-write'><div class='cate-write-in'>" + category[key] + "</div></div>" +
										"</div>";
		cate[y]["cont-techno"].setAttribute("class", "cont-tk");
		y++;
	}

	var enter = ["bottom", "top", "left", "right"];
	for (var i = 0; techno[i]; i++) {
		if (techno[i]["level"] >= 50) {
			var rand = enter[Math.floor(Math.random() * enter.length)];
			var tk = document.createElement("div");
			tk.setAttribute("class", "tk");
			tk.innerHTML = "<div class=\"tk-bar\" style=\"height: " + techno[i]["level"] + "%;\" data-sr=\"enter " + rand + "\">" + techno[i]["name"] + "</div>";
			var index = 0;
			while (cate[index]["name"] != techno[i]["category"][0]) {
				index++;
			}
			cate[index]["cont-techno"].appendChild(tk);
			cate[index]["element"].appendChild(cate[index]["cont-techno"]);
			el.appendChild(cate[index]["element"]);
		}
	}
	return (el);
}

function skills() {
	section = document.getElementById('s-skills');
	section.innerHTML = "<h1 class='align-left'>Skills</h1>";
	// section.innerHTML += "<h2 class='align-left'>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum utilitatis esset habitura.</h2>";
	

	var category = {
		"programming": "programming",
		"web": "web"
	};

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
			{"name": "c", "level": 99, "category": [category["programming"]], "img": ""},
			{"name": "c++", "level": 90, "category": [category["programming"]], "img": ""},
			{"name": "js", "level": 78, "category": [category["programming"]], "img": ""},
			{"name": "php", "level": 55, "category": [category["web"]], "img": ""},
			{"name": "html", "level": 60, "category": [category["web"]], "img": ""},
			{"name": "css", "level": 60, "category": [category["web"]], "img": ""},
			{"name": "bash", "level": 70, "category": [category["programming"]], "img": ""},
			{"name": "ajax", "level": 10, "category": [category["web"]], "img": ""},
			{"name": "jq", "level": 50, "category": [category["web"]], "img": ""},
			{"name": "py", "level": 88, "category": [category["programming"]], "img": ""},
			{"name": "sql", "level": 75, "category": [category["web"]], "img": ""},
			{"name": "jade", "level": 22, "category": [category["web"]], "img": ""},
			{"name": "asm", "level": 22, "category": [category["programming"]], "img": ""}
		]
	};

	sk["technologies"].sort(function (a, b) {return (Math.random() - 0.5);})


	var lang = printLang(sk["langage"]);
	var skills = printSkills(sk["skills"]);
	var tk = printTk(category, sk["technologies"]);

	section.innerHTML += "<h3 class=\"align-left\">Speaking</h3>";
	section.appendChild(lang);
	section.innerHTML += "<h3 class=\"align-left\">Abilities</h3>";
	section.appendChild(skills);
	section.innerHTML += "<h3 class=\"align-left\">Technologies</h3>";
	section.appendChild(tk);

	$("#footer").before(section);
}