let btn = document.getElementById('btn');

const url = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"

btn.addEventListener('click', function () {
	pobierzDane(url);
});

function pobierzDane(endpoint) {
	$.getJSON(endpoint, function (result) {

		let html = `<p>Imię: ${result.imie}</p>
 								<hr>
								<p>Nazwisko: ${result.nazwisko}</p>
 								<hr>
 								<p>Zawód: ${result.zawod}</p>
								<hr>
								<p>Firma: ${result.firma}</p>`;

		document.getElementById('dane_programisty').innerHTML = html;
	});


};
