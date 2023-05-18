const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
	const enteredValue = inputEl.value;
	const listItemElem = document.createElement("li");
	listItemElem.textContent = enteredValue;
	listEl.appendChild(listItemElem);
	inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
