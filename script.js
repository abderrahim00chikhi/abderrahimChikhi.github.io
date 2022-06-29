let registerInputs = document.forms[0].querySelectorAll('input');
let submit = document.querySelector("#submit")
let lineOfSucess = document.querySelector("#lineOfSucess");
let MA = document.querySelector(".messageArea")
let valids = [false,false,false,false]
let form = document.forms[0];
let ableToGo = false;
//events
// document.querySelector("input").onclick = ()=>{
// 	for(let i=0;i<registerInputs.length;i++){
// 		registerInputs[i].onchange = ()=>{
// 		valids[i]=valid(registerInputs[i]);
// 		lineOfSucessComplete()
// 	}

// 	}
// }



//big event:

registerInputs[0].onchange = ()=>{
	valids[0]=valid(registerInputs[0]);
	lineOfSucessComplete()
	validForSubmit()
}
registerInputs[1].onchange = ()=>{
	valids[1]=valid(registerInputs[1]);
	lineOfSucessComplete()
	validForSubmit()
}
registerInputs[2].onchange = ()=>{
	valids[2]=valid(registerInputs[2]);
	lineOfSucessComplete()
	validForSubmit()
}
registerInputs[3].onchange = ()=>{
	if(registerInputs[3].value == registerInputs[2].value){
		valids[3]=valid(registerInputs[3]);
		MA.innerText = ""
		validForSubmit()
	}else{
		MA.innerText = "passwords does not match"
	}
	lineOfSucessComplete()
}
// submit.onclick = (e)=>{
// 	e.preventDefault();
// 	console.log(valids)
// 	if(valid(registerInputs[0]&&valid(registerInputs[1]&&valid(registerInputs[2]&&valid(registerInputs[3]&&registerInputs[2].value==registerInputs[3].value)){
// 		submit.setAttribute("type","submit");
// 		submit.clik()
// 	}
// }

// sucess = sucess+(100/registerInputs.length);
// lineOfSucess.style.width = sucess;



//functions
function valid(x){
	// const patt = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2-3}$/;
	let emailPatt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	let textPatt = /^[a-zA-Z0-9]+$/
	let passPatt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	let patt;
	if(x.id == "email"){
		patt = emailPatt
	}else if(x.id == 'userName'){
		patt = textPatt
	}
	else{
		patt = passPatt
	}

	if(patt.test(x.value)){
		x.style.borderColor = 'transparent'
		return true
	}else{
		x.style.borderColor = 'red'
		return false
	}
}





//***************
function lineOfSucessComplete(){
	let sucess = 0
	valids.forEach((valid) =>{
		if(valid){
			sucess = sucess+(100/valids.length);
		}
		// else{
		// 	sucess = sucess-(100/valids.length);
		// }
		lineOfSucess.style.width = `${sucess}%`;
	})
}

function validForSubmit(){
	console.log(valid(registerInputs[0])&&valid(registerInputs[1])&&valid(registerInputs[2])&&valid(registerInputs[3]))
	console.log(valid(registerInputs[0])&&valid(registerInputs[1])&&valid(registerInputs[2])&&valid(registerInputs[3])&&registerInputs[2].value==registerInputs[3].value)
	if(valid(registerInputs[0])&&valid(registerInputs[1])&&valid(registerInputs[2])&&valid(registerInputs[3])&&registerInputs[2].value==registerInputs[3].value){
		submit.disabled = false
	}
}

