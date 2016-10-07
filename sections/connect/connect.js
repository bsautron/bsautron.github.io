function printInfos(me, what, image) {
	other = document.getElementById('other-coo');

	elem = document.createElement("div");
	elem.setAttribute("class", "other-coo");
	elem.setAttribute("data-sr", "hustle 30%");
	elem.setAttribute("id", "c-" + what);
	lien = document.createElement("a");
	if (what === "email") {
		lien.setAttribute("href", "mailto:" + me[what]);
		lien.innerHTML = me[what];
	}
	else if (what === "tel") {
		lien.setAttribute("href", "tel:" + me[what]);
		lien.innerHTML = me[what].substr(0, 4)
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
	img.setAttribute("src", "./img/icons/png/" + image);
	img.setAttribute("height", "30px");

	elem.appendChild(img);
	elem.appendChild(lien);
	other.appendChild(elem);
	return (other);
}

function connect() {
	var me = {
		"firstname": "Bruno",
		"lastname": "Sautron",
    "email": "sautron.brunojj@gmail.com",
		"tel": "+33786654520",
		"linkedin": {
			"url": "https://www.linkedin.com/",
			"ln-me": "in/bsautron"
		},
		"assets": [
			"Fascinated",
			"Passionate",
			"Fearless"
		]
	}

	var section = document.getElementById('s-connect');
	var elem_title = document.createElement("h1");
	elem_title.setAttribute("id", "my-name");
	elem_title.setAttribute("class", "align-center");
	elem_title.setAttribute("data-sr", "move 50px over 2.0s");

	elem_title.appendChild(document.createTextNode(me["firstname"] + " " + me["lastname"]));
	section.appendChild(elem_title);

	var assets = [];
	for (var i = 0; me["assets"][i]; i++)
	{
		var as = document.createElement("div");
		as.setAttribute("class", "asset align-center");
		as.setAttribute("data-sr", "wait " + i/4 + "s, scale up " + 20 * i + "%");
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

	$("#footer").before(section);
}

connect();
