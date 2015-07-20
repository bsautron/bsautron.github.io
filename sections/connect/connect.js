function printInfos(me, what, image) {


	other = document.getElementById('other-coo');

	elem = document.createElement("div");
	elem.setAttribute("class", "other-coo");
	elem.setAttribute("id", "c-" + what);
	lien = document.createElement("a");
	if (what === "email") {
		lien.setAttribute("href", "mailto:" + me[what]);
		lien.innerHTML = me[what];
	}
	else if (what === "tel") {
		lien.setAttribute("href", "tel:" + me[what]);
		lien.innerHTML = me[what].substr(0, 3)
							+ ' '
							+ me[what].substr(3, 1)
							+ ' '
							+ me[what].substr(4, 2)
							+ ' '
							+ me[what].substr(6, 2)
							+ ' '
							+ me[what].substr(8, 2)
							+ ' '
							+ me[what].substr(10, 2);
	}
	else if (what === "linkedin") {
		lien.innerHTML = me[what]["ln-me"];
		lien.setAttribute("href", me[what]["url"] + me[what]["ln-me"]);
	}
	img = document.createElement("img");
	img.setAttribute("src", "img/icons/png/" + image);

	elem.appendChild(img);
	elem.appendChild(lien);
	other.appendChild(elem);
	return (other);
}

function connect() {
	var me = {
		"firstname": "Bruno",
		"lastname": "Sautron",
		"email": "bsautron@student.42.fr",
		"tel": "+33786654520",
		"linkedin": {
			"url": "https://www.linkedin.com/",
			"ln-me": "in/bsautron"
		},
		"assets": [
			"3 essential assets",
			"Motivation",
			"Efficiency",
			"Ambition"
		]
	}

	var section = document.getElementById('s-connect');
	var elem_title = document.createElement("h1");
	elem_title.setAttribute("id", "my-name");
	elem_title.setAttribute("class", "align-center");
	elem_title.appendChild(document.createTextNode(me["firstname"] + " " + me["lastname"]));
	section.appendChild(elem_title);

	var assets = [];
	for (var i = 0; me["assets"][i]; i++)
	{
		var as = document.createElement("h2");
		as.setAttribute("class", "align-center");
		as.appendChild(document.createTextNode(me["assets"][i]));
		section.appendChild(as);		
	}

	var other = document.createElement("div");
	other.setAttribute("id", "other-coo");
	section.appendChild(other);

	other = printInfos(me, "email", "envelope.png");
	other = printInfos(me, "linkedin", "user.png");
	other = printInfos(me, "tel", "phone-2.png");
	section.appendChild(other);

	document.body.appendChild(section);
}