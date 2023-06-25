function highlight() {
    //Write your code here
	let chnge = document.getElementsByTagName("strong");
		for(let i=0;i<chnge.length;i++){
			chnge[i].style.color = "green";
		}
}


function return_normal() {
    //Write your code here
	let chnge = document.getElementsByTagName('strong');
		for(let i=0;i<chnge.length;i++){
			chnge[i].style.color = "";
		}
    
}
