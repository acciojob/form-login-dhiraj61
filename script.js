function getFormvalue() {
    //Write your code here
	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("lname").value;
	alert(`${fname} ${lname}`);
}

document.getElementById("form1").addEventListener("submit",(event)=>{
	event.preventDefault();
	getFormvalue();
})
