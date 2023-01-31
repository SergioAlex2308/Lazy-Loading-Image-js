// Crear imagen
import jsx from 'hyperscript';
import {
	registerImage
} from "./lazy";

const minimum = 1;
const maximum = 200;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;


const createImageNode = () => {
	/* const containerImg = document.createElement('DIV');
	containerImg.className = "p-4"; */

	
	/* const image = document.createElement('IMG');
	image.className = "mx-auto rounded-md";
	image.dataset.src = `https://picsum.photos/id/${random()}/480?grayscale`; //TO DO */
	
	//containerImg.append(image);

	//HYPERSCRIPT
	const image = jsx('img.mx-auto.rounded-md', {
		width: "320",
		"data-src": `https://picsum.photos/id/${random()}/480?grayscale`,
	});
	
	const containerImg = jsx('div.p-4', image);

	return containerImg;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector("#btnAdd");
const clearButton = document.querySelector("#btnClear");
const clearChildButton = document.querySelector("#btnClearChild");

const addImage = () => {

	const newImage = createImageNode();
	mountNode.append(newImage);
	registerImage(newImage);
}

const clearImage = () => {
	if(mountNode.childElementCount == 0) {
		addAlert();
	}
	else {
		while(mountNode.firstChild) {
			mountNode.removeChild(mountNode.firstChild);
		}
	}
}

const addAlert = () => {
	const container = document.querySelector("#alert");
	container.classList.add('block');
	container.classList.remove('hidden');
	setTimeout(() => {
		container.classList.remove('block');
		container.classList.add('hidden');
	}, 1000);

}

const clearLastImage = () => {
	mountNode.childElementCount == 0 ? addAlert() : mountNode.removeChild(mountNode.lastChild);
}

addButton.addEventListener('click', addImage);
clearButton.addEventListener('click', clearImage);
clearChildButton.addEventListener('click', clearLastImage);