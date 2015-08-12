function printWork(work) {
	var ww = document.createElement("div");
	ww.setAttribute("class", "ww");

	var a = document.createElement("a");
	a.setAttribute("href", work.url);

	var img = document.createElement("div");
	img.setAttribute("class", "work-img");
	img.setAttribute("style", "background: url('" + work.img + "'); background-position: center; background-size: cover;");
	img.setAttribute("data-sr", "move -20px");


	var contDesc = document.createElement("div");
	contDesc.setAttribute("class", "cont-desc");

	var lang = document.createElement("div");
	lang.setAttribute("class", "work-lang");
	lang.innerHTML = work.lang;
	contDesc.appendChild(lang);

	var title = document.createElement("div");
	title.setAttribute("class", "work-title align-left");
	title.innerHTML = work.name;
	contDesc.appendChild(title);

	var desc = document.createElement("div");
	desc.setAttribute("class", "work-desc align-left");
	desc.innerHTML = work.desc;
	contDesc.appendChild(desc);


	a.appendChild(img);
	a.appendChild(contDesc);


	ww.appendChild(a);


	return (ww);
}

function work() {
	section = document.getElementById('s-work');
	section.innerHTML = "<h1 class='align-center'>Work</h1>";

	var work = [
		{
			name: "ft_printf",
			url: "https://github.com/Scanf974/ft_printf",
			desc: "Recode printf with flags",
			lang: "C",
			img: "http://media.antson.org/2014/05/hello_world.jpg"
		},
		{
			name: "computor_v1",
			url: "https://github.com/Scanf974/computor_v1",
			desc: "Solve polynomial functions of maximum degree 2",
			lang: "Js",
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/4_fonctions_du_second_degr%C3%A9.svg/500px-4_fonctions_du_second_degr%C3%A9.svg.png"
		},
		{
			name: "ft_ls",
			url: "https://github.com/Scanf974/ft_ls",
			desc: "Recode the Unix ls command",
			lang: "C",
			img: "http://cdn.guru99.com/images/ls-a(2).png"
		},
		{
			name: "fdf",
			url: "https://github.com/Scanf974/fdf",
			desc: "Create graphically the schematic representation of a relief ground",
			lang: "C",
			img: "/img/fdf.png"
		},
		{
			name: "ft_minishell",
			url: "https://github.com/Scanf974/ft_minishell2",
			desc: "Recode a command-line interpreter",
			lang: "C",
			img: "http://lostinmac.files.wordpress.com/2010/07/lsof11.png"
		},
		{
			name: "BallSquirrel",
			url: "https://github.com/Scanf974/BallSquirrel",
			desc: "Get acorn!",
			lang: "Python",
			img: "/img/bs.png"
		},
		{
			name: "ft_retro",
			url: "https://github.com/eml-trm/rush00",
			desc: "A small Space Arcade Game make in 48h for a school project",
			lang: "C++",
			img: "/img/rush00.png"
		},
		{
			name: "LibASM",
			url: "https://github.com/Scanf974/libftasm",
			desc: "A few functions of lib C",
			lang: "ASM",
			img: "http://www.pelock.com/blog/wp-content/uploads/2007/04/hiew740.png"
		},
		{
			name: "2048",
			url: "https://github.com/dvolberg/Game_2048",
			desc: "A 2048 game with ncurses",
			lang: "C",
			img: "/img/2048.png"
		},
		{
			name: "Wolf3d",
			url: "https://github.com/Scanf974/wolf3d",
			desc: "Raycasting",
			lang: "C",
			img: "/img/wolf3d.png"
		},
		{
			name: "Push_swap",
			url: "https://github.com/Scanf974/push_swap",
			desc: "Sort a stack",
			lang: "C",
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png"
		},
	];


	var contWork = document.createElement("div");
	contWork.setAttribute("id", "cont-work");

	for (var i = 0; work[i]; i++) {
		var el = printWork(work[i]);
		contWork.appendChild(el);
	}
	section.appendChild(contWork);

	$("#footer").before(section);

}

work();