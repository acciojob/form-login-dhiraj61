function getFormvalue() {
    //Write your code here
	let fname = document.getElementsByName("fname").value;
	let lname = document.getElementsByName("lname").value;
	alert(`${fname} ${lname}`);
}

document.getElementById("form1").addEventListener("submit",(event)=>{
	event.preventDefault();
	getFormvalue();
})
