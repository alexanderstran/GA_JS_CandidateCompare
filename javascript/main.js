/* --------------------------------

	1. Write the state object
	2. Create the event listeners that the user
		will interact with to mutate the state
	3. Write a "render" function to make 1 and 2 
		"connect" with each other


-------------------------------- */

/*SHANNON--------------*/

const state = {
	isOpen: true,
	toggle: () => {
		state.isOpen = !state.isOpen;
	},
};

const render = (container, myState) => {
	if (myState.isOpen === false) {
		container.style.display = 'none';
	}
	else {
		container.style.display = 'flex';
	}
}

const togglePopup = event => {

	// this is a switch that mutates the isOpen
	// property of our state - effectively opening OR
	// closing the popup window
	state.toggle();

	// now re-render the UI to reflect the new,
	// mutated state object
	render(popupCont, state);
}

const onKeyDown = event => {
	if (event.key === 'Escape' && state.isOpen === true) {
		togglePopup();
	}
	else if (event.key === "o" && state.isOpen === false) {
		togglePopup();
	}
}

const onBgShimClicked = event => {
	if (!event.target.matches('.popup-content')) {
		togglePopup();
	}
}

const toggleBtn = document.querySelector('.js-toggle');
const popupCont = document.querySelector('.js-popup-container');
const closeBtn = popupCont.querySelector('.js-popup-close');

document.addEventListener('keydown', onKeyDown)
toggleBtn.addEventListener('click', togglePopup);
// closeBtn.addEventListener('click', onCloseBtnClicked);
popupCont.addEventListener('click', onBgShimClicked)

/*ROSSI--------------*/

const state1 = {
	isOpen: true,
	toggle: () => {
		state1.isOpen = !state1.isOpen;
	},
};

const render1 = (container1, myState1) => {
	if (myState1.isOpen === false) {
		container1.style.display = 'none';
	}
	else {
		container1.style.display = 'flex';
	}
}

const togglePopup1 = event1 => {

	// this is a switch that mutates the isOpen
	// property of our state - effectively opening OR
	// closing the popup window
	state1.toggle();

	// now re-render the UI to reflect the new,
	// mutated state object
	render1(popupCont1, state1);
}

const onKeyDown1 = event1 => {
	if (event1.key === 'Escape' && state1.isOpen === true) {
		togglePopup1();
	}
	else if (event1.key === "o" && state1.isOpen === false) {
		togglePopup1();
	}
}

const onBgShimClicked1 = event1 => {
	if (!event1.target.matches('.popup-content')) {
		togglePopup1();
	}
}

const toggleBtn1 = document.querySelector('.js-toggle1');
const popupCont1 = document.querySelector('.js-popup-container1');
const closeBtn1 = popupCont1.querySelector('.js-popup-close1');

document.addEventListener('keydown', onKeyDown1)
toggleBtn1.addEventListener('click', togglePopup1);
// closeBtn.addEventListener('click', onCloseBtnClicked);
popupCont1.addEventListener('click', onBgShimClicked1)


/*SCHRIER--------------*/

const state2 = {
	isOpen: true,
	toggle: () => {
		state2.isOpen = !state2.isOpen;
	},
};

const render2 = (container2, myState2) => {
	if (myState2.isOpen === false) {
		container2.style.display = 'none';
	}
	else {
		container2.style.display = 'flex';
	}
}

const togglePopup2 = event2 => {

	// this is a switch that mutates the isOpen
	// property of our state - effectively opening OR
	// closing the popup window
	state2.toggle();

	// now re-render the UI to reflect the new,
	// mutated state object
	render2(popupCont2, state2);
}

const onKeyDown2 = event2 => {
	if (event2.key === 'Escape' && state2.isOpen === true) {
		togglePopup2();
	}
	else if (event2.key === "o" && state2.isOpen === false) {
		togglePopup2();
	}
}

const onBgShimClicked2 = event2 => {
	if (!event2.target.matches('.popup-content')) {
		togglePopup2();
	}
}

const toggleBtn2 = document.querySelector('.js-toggle2');
const popupCont2 = document.querySelector('.js-popup-container2');
const closeBtn2 = popupCont2.querySelector('.js-popup-close2');

document.addEventListener('keydown', onKeyDown2)
toggleBtn2.addEventListener('click', togglePopup2);
// closeBtn.addEventListener('click', onCloseBtnClicked);
popupCont2.addEventListener('click', onBgShimClicked2)
