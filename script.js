function generateUUID() {
	let uuid = '';
	const characters = '0123456789abcdef';

	for (let i = 0; i < 32; i++) {
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		const randomIndex = Math.floor(Math.random() * characters.length);
		uuid += characters[randomIndex];
	}

	return uuid;
}

function log(argument) {
	console.log(argument);
}

function create(type) {
    return document.createElement(type);
}

function addUser() {
	let name = document.getElementById('playername').value;
	let players = document.getElementById('players');
	let player = create('span');
	
	player.textContent = name;
	player.id = generateUUID();

	let x = create('button');
	let img = create('img');
	img.src = 'x-solid.svg';
	x.appendChild(img);
	x.onclick = function() {
		player.remove();
		x.remove();
	}

	players.appendChild(player);
	players.appendChild(x);
}

function button(src) {
	let button = create('button');
	let img = create('img');
	img.src = src;
	button.appendChild(img);
	// button.style.backgroundImage = 'url("' + src + '")';
	return button;
}

function minusButton() {
	return button("minus-solid.svg");
}

function plusButton() {
	return button("plus-solid.svg");
}

function run() {
	var c = document.getElementById('players').children;
	var sb = document.getElementById('scoreboard');
	sb.replaceChildren();

	for(var i = 0; i < c.length; i+=2) {
		for(var j = i+2; j < c.length; j+=2) {
			let player1 = create('span');
			player1.textContent = c[i].textContent;
			player1.style.gridArea = 'u1';
			player1.style.gridRow = 'auto';

			let player2 = create('span');
			player2.textContent = c[j].textContent;
			player2.style.gridArea = 'u2';
			player2.style.gridRow = 'auto';

			let mb1 = minusButton();
			mb1.style.gridArea = 'm1';
			mb1.style.gridRow = 'auto';
			let pb1 = plusButton();
			pb1.style.gridArea = 'p1';
			pb1.style.gridRow = 'auto';
			
			let mb2 = minusButton();
			mb2.style.gridArea = 'm2';
			mb2.style.gridRow = 'auto';
			let pb2 = plusButton();
			pb2.style.gridArea = 'p2';
			pb2.style.gridRow = 'auto';

			let scoreU1 = create('input');
			scoreU1.id = generateUUID();
			scoreU1.value = 0;
			scoreU1.type = 'number';
			scoreU1.min = 0;
			let scoreU2 = create('input');
			scoreU2.id = generateUUID();
			scoreU2.value = 0;
			scoreU2.type = 'number';
			scoreU2.min = 0;

			mb1.onclick = function() {
				scoreU1.value = scoreU1.valueAsNumber - 1;
			}
			pb1.onclick = function() {
				scoreU1.value = scoreU1.valueAsNumber + 1;
			}

			mb2.onclick = function() {
				scoreU2.value = scoreU2.valueAsNumber - 1;
			}
			pb2.onclick = function() {
				scoreU2.value = scoreU2.valueAsNumber + 1;
			}

			sb.appendChild(mb1);
			sb.appendChild(player1);
			sb.appendChild(pb1);
			sb.appendChild(scoreU1);
			sb.appendChild(scoreU2);
			sb.appendChild(mb2);
			sb.appendChild(player2);		
			sb.appendChild(pb2);
		}
	}
}


document.getElementById('playername').value = "player1";
addUser();
document.getElementById('playername').value = "player2";
addUser();
document.getElementById('playername').value = "player3";
addUser();
document.getElementById('playername').value = "player4";
addUser();

run();