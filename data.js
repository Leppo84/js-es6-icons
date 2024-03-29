// Milestone 1 Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// Milestone 2 Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3 Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS 1 - modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

// BONUS 2 - popolare le options della select della milestone 3 dinamicamente.

const allIcon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	// {
	// 	name: 'user-graduate',
	// 	prefix: 'fa-',
	// 	type: 'user',
	// 	family: 'fas',
	// 	color: 'blue'
	// },
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const myNode = document.querySelector("div.cards_container");

iconAppender(allIcon,myNode);

function iconAppender(objArray,node) {

	node.innerHTML = "";

	objArray.forEach(iconInfo => {

    let card = document.createElement("div");
    card.className = "card";
    node.append(card);

	let icon = document.createElement("i");
	icon.className = iconInfo.family + " " + iconInfo.prefix + iconInfo.name + " " + iconInfo.type + " " + iconInfo.color;
	card.append(icon);

	let nameIcon = document.createElement("span");
    nameIcon.className = "bold";
    card.append(nameIcon);
	let iconName = iconInfo.name.toUpperCase();
	nameIcon.append(iconName);
	})
}

const allAnimal = allIcon.filter((icons) => {
	if (icons.type === "animal") {
		return true;		
	}
})


const allVegetables = allIcon.filter((icons) => {
	if (icons.type === "vegetable") {
		return true;		
	}
})

const allUser = allIcon.filter((icons) => {
	if (icons.type === "user") {
		return true;		
	}
})


const iconFilter = document.getElementById("filter_cards");


iconFilter.addEventListener ("click", 
function(){

		let selection = iconFilter.value;		
		console.log(selection);

		if (selection == "animals") {
			iconAppender(allAnimal,myNode);
		}
		else if (selection == "vegetables") {
			iconAppender(allVegetables,myNode);
		}
		else if (selection == "user") {
			iconAppender(allUser,myNode);
			
		}
		else {
			iconAppender(allIcon,myNode);
		}
	})
/*

*/
