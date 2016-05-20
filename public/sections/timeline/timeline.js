function printQt(qt)
{
	var el = document.createElement("tr");
	el.setAttribute("class", "qt");
	el.setAttribute("data-sr", "");
	el.setAttribute("id", "qt-" + qt["id"]);

	var begin = document.createElement("td");
	begin.setAttribute("class", "qt-qt qt-begin");
	begin.innerHTML = qt["begin"];
	el.appendChild(begin);

	var end = document.createElement("td");
	end.setAttribute("class", "qt-qt qt-end align-left");
	end.innerHTML = ((qt["end"]) ? qt["end"].substr(0, 2) + '<span class="dark-blue">' + qt["end"].substr(2, 2) + '</span>' : "In progress");
	el.appendChild(end);

	var img = document.createElement("td");
	img.setAttribute("class", "qt-qt qt-img");
	img.innerHTML = '<img src="img/' + qt["img"] + '" width="75px"></img>';
	el.appendChild(img);

	var diploma = document.createElement("td");
	diploma.setAttribute("class", "qt-qt qt-diploma");
	diploma.innerHTML = qt["diploma"];
	el.appendChild(diploma);

	var school = document.createElement("td");
	school.setAttribute("class", "qt-qt qt-school");
	school.innerHTML = qt["school"];
	el.appendChild(school);

	var place = document.createElement("td");
	place.setAttribute("class", "qt-qt qt-place dark-blue");
	place.innerHTML = qt["country"] + '/' + qt["city"];
	el.appendChild(place);

	return (el);

}

function timeline() {
	section = document.getElementById('s-timeline');
	section.innerHTML = "<h1>Timeline</h1>";
	// section.innerHTML += "<h2>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum utilitatis esset habitura.</h2>";

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
    "diploma": "Api evangelist - Flower Power",
    "school": "Parrot SA",
    "img": "parrot.png",
    "begin": "2015",
    "end": "2016",
    "country": "France",
    "city": "Paris"
  },
	{
		"id": "2",
		"diploma": "Bac +1 Mathematics/Computer Science",
		"school": "Université Claude Bernard Lyon 1",
		"img": "bac+1.png",
		"begin": "2013",
		"end": "2014",
		"country": "France",
		"city": "Lyon"
	},
	{
		"id": "3",
		"diploma": "Baccalauréat S-SI",
		"school": "Lycée Louis Payen ",
		"img": "bac+s-si.png",
		"begin": "2012",
		"end": "2013",
		"country": "France",
		"city": "Reunion island"
	},

	{
		"id": "4",
		"diploma": "Landed on Earth",
		"school": "Earth",
		"img": "earth.png",
		"begin": "1995",
		"end": "1995",
		"country": "France",
		"city": "Reunion island"
	}
	]
	var table = document.createElement("table");
	table.setAttribute("cellpadding", "10");
	for (var i = 0; qt[i]; i++) {
		var el = printQt(qt[i]);
		table.appendChild(el);
	}
	section.appendChild(table);

	$("#footer").before(section);
}

timeline();
