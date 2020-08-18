const out = document.getElementById('info');
const input = document.querySelector("input#num");

async function getFact(num) {
	const fact = await(await fetch(`https://numbers-api.vercel.app/${num}`)).text();
	return fact;
}

input.addEventListener("keyup",()=>{
	// out.innerText = input.value;
	getFact(input.value)
	.then((val)=>{
		out.innerText = val;
	});
});

