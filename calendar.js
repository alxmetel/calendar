var days = document.getElementsByClassName("days");
var weekDays = document.getElementsByClassName("weekDay");
var weekEnd = document.getElementsByClassName("weekEnd");
var detailsWindow = document.getElementById("detailsWindow");
var butReset = document.getElementById("butReset");
var calendarData = document.getElementById("calendarData");
var butAddEdit = document.getElementById("butAddEdit");
var editedEntry = document.getElementById("editedEntry");
var butDelete = document.getElementById("butDelete");

for (var i = 0; i < days.length; i++) {
    days[i].addEventListener('click', showDetails);
};
butReset.addEventListener("click", closeDetailsWindow);
butAddEdit.addEventListener("click", addEditEntry);
butDelete.addEventListener("click", deleteEntry);

var target;
function showDetails(event) {
	target = event.target;
	calendarData.innerHTML = target.innerHTML;
	detailsWindow.style.display = "block";
}

function addEditEntry() {
	if(target.className === "days weekDay") {
		target.innerHTML = editedEntry.value;
		closeDetailsWindow();
	};

	if(target.className === "days weekEnd") {
		editedEntry.style.cssText = "border:none;font-weight:bold;color:red;text-align:center;";
		editedEntry.setAttribute("readonly", "true");
		editedEntry.value = "Sorry, weekend events cannot be edited!";
		butAddEdit.style.display = "none";
		butDelete.style.display = "none";
		butReset.setAttribute("value", "OK");
	};
}

function deleteEntry() {
	target.innerHTML = "";
	closeDetailsWindow();
}

//Закрываем Панель и возвращаем все настройки к исходным
function closeDetailsWindow() {
	detailsWindow.style.display = "none";
	target = "";
	editedEntry.value = "";
	butAddEdit.style.display = "inline";
	butDelete.style.display = "inline";
	butReset.setAttribute("value", "Cancel");
	editedEntry.style.cssText = "";
	editedEntry.removeAttribute("readonly", "true");
}