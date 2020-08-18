const form = document.querySelector("form");

const inputName = document.querySelector("input#formName");
const inputEmail = document.querySelector("input#formEmail");
const classSelect = document.querySelector("select#formClass");
const sectionSelect = document.querySelector("select#formSection");

console.log(inputName)
console.log(inputEmail)
console.log(classSelect)
console.log(sectionSelect)

const defaultSection = "Select your Section";
const defaultClass = "Select a Class";
// 10,15,24
// 5*2 5*3 6*4
// 4+6 4+6+5 4+6+5+9
// 10 10 10 15 15 24
const classes = {
	"VI":10,
	"VII":10,
	"VIII":10,
	"IX":15,
	"X":15,
	"XI":24,
	"XII":24
}
classSelect.addEventListener("change",(e)=>{
	// console.log(e)
	if(e.target.value && e.target.value!=defaultClass){
		sectionSelect.disabled=false;
		console.log(e.target.value);
		//sectionSelect.innerHTML = "" Not req.

		var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0,classes[classSelect.value]);
		sectionSelect.innerHTML = `<option>${defaultSection}</option>`+options.map((s) => `<option>${s}</option>`);
		return;
	}
	sectionSelect.disabled=true;
});
function submit(e){
	e.preventDefault();
	var name = inputName.value;
	if(!name){
		alert("Name cannot be empty!");
		return;
	}
	const email = inputEmail.value;
	if(!((email) && (/^[e|v|r]\d{4,8}.+@dpsrkp.net$/.test(email)))){
		alert("Email ID not valid!");
		return;
	}	

	if(classSelect.value==defaultClass){
		alert("Class required");
		return;
	}
	if(sectionSelect.value==defaultSection){
		alert("Section required");
		return;
	}

	name = name.toLowerCase();
	name = name.split(" ").map((s)=>{return ((s.charAt(0).toUpperCase())) + s.slice(1)}).join(" ");
	alert(`Hi, ${name} <${email}> of ${classSelect.value}-${sectionSelect.value}`);
	
}
form.addEventListener("submit", submit);