const staticRoot = "http://localhost:3000"

$(document).ready(function(){
	window.document.querySelector('#btnRegister1').addEventListener('click', event => {
		//TO BE DONE. API VAL NOT COMPLETED
		var pname = $("#PatientName").val();
		console.log(pname);
		var body ={
			"val": pname
		};
		$.ajax({
			method: "POST",
			url: staticRoot + "/api/request",
			headers : {
				'Content-Type':'application/json'
			},
			data: body,
			success: function(response){
					console.log("success")
			}
	
		})
	  })
})