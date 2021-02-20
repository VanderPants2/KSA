function send_order() {
	var Afhaal = document.getElementById("btn_Afhaal").checked;
	if (validate(Afhaal)) {
		return;
	}
	var Voornaam = document.getElementById("Voornaam").value;
	var Achternaam = document.getElementById("Achternaam").value;
	var Email = document.getElementById("Email").value;
	var Telefoon = document.getElementById("Telefoon").value;
	var Uur = document.getElementById("Uur").value;
	var Straat = document.getElementById("Straat").value;
	var Huisnummer = document.getElementById("Huisnummer").value;
	var Gemeente = document.getElementById("Gemeente").value;
	var Taart1 = document.getElementById("Taart1").value;
	var Taart2 = document.getElementById("Taart2").value;
	var Taart3 = document.getElementById("Taart3").value;
	var Taart4 = document.getElementById("Taart4").value;
	var Taart5 = document.getElementById("Taart5").value;
	if (Afhaal == true) {
		var data =
			Afhaal +
			" ; " +
			Voornaam +
			" ; " +
			Achternaam +
			" ; " +
			Email +
			" ; " +
			Telefoon +
			" ; " +
			Uur +
			" ; " +
			Taart1 +
			" ; " +
			Taart2 +
			" ; " +
			Taart3 +
			" ; " +
			Taart4 +
			" ; " +
			Taart5;
	} else {
		var data =
			Afhaal +
			" ; " +
			Voornaam +
			" ; " +
			Achternaam +
			" ; " +
			Email +
			" ; " +
			Telefoon +
			" ; " +
			Straat +
			" ; " +
			Huisnummer +
			" ; " +
			Gemeente +
			" ; " +
			Taart1 +
			" ; " +
			Taart2 +
			" ; " +
			Taart3 +
			" ; " +
			Taart4 +
			" ; " +
			Taart5;
	}
	location.href = "./bestelling.html";
}
function validate(Afhaal) {
	if (Afhaal == true) {
		if (document.getElementById("Voornaam").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in. \nVul je voornaam in."
			);
			return true;
		} else if (document.getElementById("Achternaam").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in.\nVul je achternaam in."
			);
			return true;
		} else if (
			document.getElementById("Email").value == "" ||
			!document.getElementById("Email").value.includes("@")
		) {
			alert(
				"Oeps, je vulde niet alle velden correct in.\nControleer je e-mailadres."
			);
			return true;
		} else if (document.getElementById("Telefoon").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in. \nVul je telefoonnummer in."
			);
			return true;
		} else {
			return false;
		}
	} else {
		if (document.getElementById("Voornaam").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in. \nVul je voornaam in."
			);
			return true;
		} else if (document.getElementById("Achternaam").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in.\nVul je achternaam in."
			);
			return true;
		} else if (
			document.getElementById("Email").value == "" ||
			!document.getElementById("Email").value.includes("@")
		) {
			alert(
				"Oeps, je vulde niet alle velden correct in.\nControleer je e-mailadres."
			);
			return true;
		} else if (document.getElementById("Telefoon").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in. \nVul je telefoonnummer in."
			);
			return true;
		} else if (document.getElementById("Straat").value == "") {
			alert("Oeps, je vulde niet alle velden correct in. \nVul je straat in.");
			return true;
		} else if (document.getElementById("Huisnummer").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in. \nVul je huisnummer in."
			);
			return true;
		} else if (document.getElementById("Gemeente").value == "") {
			alert(
				"Oeps, je vulde niet alle velden correct in. \nVul je gemeente in."
			);
			return true;
		} else {
			return false;
		}
	}
}
function afhaal() {
	document.getElementById("levering").style.display = "none";
	document.getElementById("afhaal").style.display = "block";
}
function levering() {
	document.getElementById("afhaal").style.display = "none";
	document.getElementById("levering").style.display = "block";
}
function get_orders() {
	var data = document.getElementById("Wachtwoord").value;
	$("#info").load("/get_orders", { data: data });
}
