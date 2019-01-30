
var att = document.createAttribute("disabled");

var buttonJany = document.getElementById('jany');
var img_stop = '<img style="margin:0 5px 0 5px;" src="img/stop.png" alt="" width="20px">';
buttonJany.innerHTML = 'Hello to Jany<br>';
var div_st = document.createElement('div');
div_st.className = "clear";
div_st.innerHTML = img_stop + '<strong>STOP SPAMM Please</strong>' + img_stop;

var img_wr = '<img src="img/danger.png" alt="" width="50px">'
var div_wr = document.createElement('div');
div_wr.className = "warning-img";
div_wr.innerHTML = img_wr + img_wr + img_wr ;


var button = document.getElementById('my-button');

var i = 0;
button.onclick = function(){
	if (i == 6){
		buttonJany.innerHTML += 'Jany STOP Spam<br>';
		i += 1;
		buttonJany.appendChild(div_st);
		buttonJany.appendChild(div_wr);
		button.setAttributeNode(att);

	}
	if (i < 6){
		buttonJany.innerHTML += 'Hello to Jany<br>';
		i += 1;
	}

}
function clear(){
	buttonJany.innerHTML = '';	
	i = 0;
	button.removeAttributeNode(att);
}
div_st.onclick = clear;


var number = function(x) {
	return x + 1;
}

var floatOne = 955.37;
var floatTwo = 830.99;
result = floatOne + floatTwo;
// 1786.3600000000001.toFixed(2)
// console.log(Math.round (1786.3600000000001));
var big_number = 1786.3600000000001

// проверяем тип нашей переменной typeof
console.log("тип переменной big_number: ", typeof big_number);

big_number = 1786.3600000000001.toFixed(2)

// через метод toFixed превращаем наше число в строку и обрезаем ее до 2 символов
console.log('результат: ', big_number);

// проверяем тип нашей переменной typeof
console.log("тип переменной big_number: ", typeof big_number);



var floatOne = 955.37;
var floatTwo = 830.99;
var result = floatOne + floatTwo;// 1786.3600000000001

var new_result = Math.round(result * 100) / 100; //1786.36

ANSWER = new_result;

var text = document.getElementsByClassName('conteiner')[0];
var data = String(text.innerHTML);

// var span = ''
// var pos = 0;
// while (true) {
//   var foundPos = data.indexOf('lo', pos);
//   if (foundPos == -1) break;

//   console.log ('<span>' + data.substring(foundPos, foundPos + 2) + '</span>'); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }
data = data.replace(/stoka/g, 'zamena');
console.log(data)