const btnHeader = document.querySelector('#btnHeader');

const button = document.querySelector('#btn');
const inputField = document.querySelector('.inputField');
const list = document.querySelector('.list');

btnHeader.addEventListener('click', function () {
	let headerText = prompt(`Введите заголовок`).trim();
	if (headerText !== '') {		
		document.querySelector('.headerText').innerText = headerText;
	} 
	else {
		return false
	}
});


button.addEventListener ('click', function() {
    if (inputField.value.trim().length === 0) {
    return false;
    }

	const item = document.createElement('li');
	item.classList.add('item');
	list.appendChild(item);
	const itemDiv = document.createElement('div');
	itemDiv.classList.add('itemDiv');
	item.appendChild(itemDiv);
	const itemText = document.createElement('p');
	itemText.innerText = inputField.value;
	itemText.classList.add('itemText');
	itemDiv.appendChild(itemText);
	const buttonsDiv = document.createElement('div');
	buttonsDiv.classList.add('buttonsDiv');
	itemDiv.appendChild(buttonsDiv);
	const buttonDone = document.createElement('button');
	buttonDone.classList.add('buttonDone');
	buttonDone.innerHTML = `<svg version="1.1" x="0px" y="0px" viewBox="0 0 352.62 352.62" style="enable-background:new 0 0 352.62 352.62;"
    xml:space="preserve">
        <g>
            <path d="M337.222,22.952c-15.912-8.568-33.66,7.956-44.064,17.748c-23.867,23.256-44.063,50.184-66.708,74.664
            c-25.092,26.928-48.348,53.856-74.052,80.173c-14.688,14.688-30.6,30.6-40.392,48.96c-22.032-21.421-41.004-44.677-65.484-63.648
            c-17.748-13.464-47.124-23.256-46.512,9.18c1.224,42.229,38.556,87.517,66.096,116.28c11.628,12.24,26.928,25.092,44.676,25.704
            c21.42,1.224,43.452-24.48,56.304-38.556c22.645-24.48,41.005-52.021,61.812-77.112c26.928-33.048,54.468-65.485,80.784-99.145
            C326.206,96.392,378.226,44.983,337.222,22.952z M26.937,187.581c-0.612,0-1.224,0-2.448,0.611
            c-2.448-0.611-4.284-1.224-6.732-2.448l0,0C19.593,184.52,22.653,185.132,26.937,187.581z"/>
        </g>
    </svg>`;
	buttonsDiv.appendChild(buttonDone);

	const buttonDel = document.createElement('button');
	buttonDel.classList.add('buttonDel');
	buttonDel.innerHTML = `<svg version="1.1" x="0px" y="0px"
viewBox="0 0 415.188 415.188" style="enable-background:new 0 0 415.188 415.188;" xml:space="preserve">
<path d="M412.861,78.976c3.404-6.636,2.831-14.159-0.15-20.404c0.84-7.106-1.02-14.321-7.746-19.855
c-6.262-5.151-12.523-10.305-18.781-15.457c-11.005-9.055-28.237-11.913-38.941,0c-48.619,54.103-99.461,105.856-152.167,155.725
c-39.185-36.605-78.846-72.713-118.223-108.868c-13.82-12.693-33.824-8.71-42.519,6.411c-12.665,6.286-22.931,14.481-31.42,28.468
c-4.042,6.664-3.727,15.076,0,21.764c25.421,45.578,74.557,85.651,114.957,122.529c-5.406,4.839-10.772,9.724-16.287,14.461
c-54.43,46.742-91.144,76.399-23.029,124.325c0.919,0.647,1.856,0.504,2.789,0.882c1.305,0.602,2.557,1.026,4.004,1.264
c0.45,0.017,0.87,0.093,1.313,0.058c1.402,0.114,2.774,0.471,4.195,0.192c36.621-7.18,70.677-35.878,101.576-67.48
c30.1,29.669,62.151,58.013,97.395,74.831c8.391,4.005,18.395,1.671,24.855-3.931c10.832,0.818,20.708-5.913,25.665-15.586
c0.734-0.454,1.207-0.713,2.002-1.21c15.748-9.838,17.187-29.431,5.534-42.936c-26.313-30.492-54.284-59.478-82.798-87.95
C316.426,196.043,380.533,141.939,412.861,78.976z"/> </svg>`;
	buttonsDiv.appendChild(buttonDel);

	inputField.value = '';
	itemText.addEventListener('click', function () {
		itemText.classList.toggle('itemText-done');
		buttonDone.classList.toggle('buttonDone-clicked');
	})

	buttonDone.addEventListener('click', function () {
		buttonDone.classList.toggle('buttonDone-clicked');
		itemText.classList.toggle('itemText-done');

	});

	buttonDel.addEventListener('click', function () {
		list.removeChild(item);
	});

});

gsap.to(".bgContainer", {
	delay: .3,
	duration: .3,
	backgroundImage: "url('https://cdn.glitch.global/c7fefa19-e5b6-4105-9775-7fac1ea23f02/wallpaper_9.jpg?v=1644184434422')"
})

gsap.from(".header", {
	delay: 1,
	duration: .5,
	opacity: 0
})

gsap.from(".input", {
	delay: 1.5,
	duration: .5,
	opacity: 0
})