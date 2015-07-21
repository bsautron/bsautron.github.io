function printHobbie(hobbie) {
	var el = document.createElement("div");
	el.setAttribute("class", "hb");
	el.setAttribute("id", "hb-" + hobbie["name"]);

	el.innerHTML = "<div class\"hb-img\"><img src=\"" + hobbie["img"] + "\" height=\"100px\"></img><h3>" + hobbie["name"] + "</h3><p>" + hobbie["description"] + "</div>";
	return (el);
}

function hobbies() {
	section = document.getElementById('s-hobbies');
	section.innerHTML = "<h1 class='align-center'>hobbies</h1>";
	section.innerHTML += "<h2 class='align-center'>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum utilitatis esset habitura.</h2>";

	var hobbie = [
		{"name": "coding", "img": "img/coding.png", "description": "Can we call \"working\" something we can't stop to do?"},
		{"name": "sleeping", "img": "img/sleeping.png", "description": "Sleeping is the best way to have enought energy to code. It's so relaxing..."},
		{"name": "running", "img": "img/running.png", "description": "I practiced athletics for 10 years, and now I ride my bike every day."},
		{"name": "gaming", "img": "img/gaming.png", "description": "I like online strategy game, like MMORPG and MOBA."},
		{"name": "music", "img": "img/guitar.png", "description": "To listen or to play, it's my drug. I learned guitar my self and I like to sing over. If i can (and have time), I will learn all instruments."}
	]

	var container = document.createElement("div");
	container.setAttribute("id", "c-hobbies");

	section.appendChild(container);

	for (var i = 0; hobbie[i]; i++)
	{
		var el = printHobbie(hobbie[i]);
		container.appendChild(el);
		section.appendChild(container);
	}
	document.body.appendChild(section);
}