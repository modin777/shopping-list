// Счетчик колличества добавленных продуктов
var i;
i = 0;

// Нажатие клавиши Enter
function kp(e) {
	if (e) keyCode = e.which
	else if (event) keyCode=event.keyCode
	else return
	if (keyCode == 13) document.getElementById("btnsubmit").click()
}
document.onkeypress=kp;

// Добавление новой записи
function add(){
	var message = document.getElementById('message').value,
		messageWrapper = document.getElementById('messageWrapper'),
		butClose = "<span class='but-del glyphicon glyphicon-remove-sign' onclick='iClose()'></span>",
		butCheck = "<span class='but-check glyphicon glyphicon-ok' onclick='iCheck()'></span>"
		ticket = {
			name: message,
			check: butCheck,
			close: butClose,
		};
	document.getElementById("delAll").disabled = false;
	if (message === ""){
		alert ('Введите название продукта');
	}
	else if(message === "водка"){
		alert ('Не надо(( Опять нажрешься, как в тот раз(')
	}
	else{
		i++;
		ticketsAmount.innerHTML = i;
		messageWrapper.innerHTML += "<div id='mess' class='mess'>" + ticket.check + ticket.name + ticket.close + "</div>";
	};
	document.getElementById('message').value = '';
};

// Выбор записи (галка)
function iCheck(){
	var ticket = event.target.parentNode;
	if (ticket.style.opacity === "0.2" ) {
		ticket.style.opacity =  1;
	}
	else {
		ticket.style.opacity =0.2;
	};
};

// Удаление записи
function iClose(){
	event.target.parentNode.remove();
	i--;
	ticketsAmount.innerHTML = i;
	if (i===0){
		document.getElementById("delAll").disabled = true;
		ticketsAmount.innerHTML = "СПИСОК ПУСТ";
	};
};

//Удаление всех записей
function delAll(){
	if (confirm('Очистить список?')){
		document.getElementById('messageWrapper').innerHTML = '';
		i = 0;
		ticketsAmount.innerHTML = "СПИСОК ПУСТ";
		document.getElementById("delAll").disabled = true;
	}
};