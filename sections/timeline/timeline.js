function printAll(qt)
{
	var el = document.createElement("div");
	el.setAttribute("class", "qt");
	el.setAttribute("id", "qt-" + qt["id"]);

	// var begin = document.createElement("div");
	// begin.setAttribute("class", "qt-qt qt-begin");
	// begin.innerHTML = qt["begin"];
	// el.appendChild(begin);

	var end = document.createElement("div");
	end.setAttribute("class", "qt-qt qt-end align-left");
	end.innerHTML = ((qt["end"]) ? qt["end"].substr(0, 2) + '<span class="dark-blue">' + qt["end"].substr(2, 2) + '</span>' : "In progress");
	el.appendChild(end);

	var img = document.createElement("div");
	img.setAttribute("class", "qt-qt qt-img");
	img.innerHTML = '<img src="img/' + qt["img"] + '" height="100px"></img>';
	el.appendChild(img);

	var diploma = document.createElement("div");
	diploma.setAttribute("class", "qt-qt qt-diploma");
	diploma.innerHTML = qt["diploma"];
	el.appendChild(diploma);

	var place = document.createElement("div");
	place.setAttribute("class", "qt-qt qt-place dark-blue");
	place.innerHTML = qt["country"] + '/' + qt["city"];
	el.appendChild(place);

	return (el);

}

function timeline() {
	section = document.getElementById('s-timeline');
	section.innerHTML = "<h1>Timeline</h1>";
	section.innerHTML += "<h2>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum utilitatis esset habitura.</h2>";
	document.body.appendChild(section);

	var qt = [
	{
		"id": "0",
		"diploma": "Architect in digital technologies",
		"school": "School 42",
		"img": "logo-421.png",
		"begin": "2014",
		"end": null,
		"country": "France",
		"city": "Paris"
	},
	{
		"id": "1",
		"diploma": "Bac +1 Mathematics/Informatics",
		"school": "Université Claude Bernard Lyon 1",
		"img": "bac+1.png",
		"begin": "2013",
		"end": "2014",
		"country": "France",
		"city": "Lyon"
	},
	{
		"id": "2",
		"diploma": "Baccalauréat S-SI",
		"school": "Lycée Louis Payen ",
		"img": "bac+s-si.png",
		"begin": "2012",
		"end": "2013",
		"country": "France",
		"city": "Reunion island"
	},
	{
		"id": "3",
		"diploma": "Brevet des Collèges",
		"school": "Collège Jules Solesse",
		"img": "brevet.png",
		"begin": "2009",
		"end": "2010",
		"country": "France",
		"city": "Reunion island"
	},
	{
		"id": "4",
		"diploma": "Landed on the planet",
		"school": "Earth",
		"img": "earth.png",
		"begin": "1995",
		"end": "1995",
		"country": "France",
		"city": "Reunion island"
	}
	]
	for (var i = 0; qt[i]; i++)
	{
		el = printAll(qt[i]);
		section.appendChild(el);
	}
	document.body.appendChild(section);
}