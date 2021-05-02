const staticRoot = "http://localhost:3000"
$(document).ready(function(){
	window.document.querySelector('#btnRegister1').addEventListener('click', event => {
		var pname = $("#PatientName").val();
		var location = $("#PatientLocation").val();
		var age = $("#PatientAge").val();
		var requirement = $("#Requirement").val();
		var gender = $('input[name="gender"]:checked').val();
		var cpho = $("#PatientContact").val();
		var cname = $("#ContactName").val();
		var body = {
			name: pname,
			location:location,
			age:age,
			requirement:requirement,
			gender:gender,
			cpho:cpho,
			cname:cname
		};
		$.ajax({
			method: "POST",
			url: staticRoot + "/api/request",
			headers : {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			transformRequest: function(obj) {
				var str = [];
				for(var p in obj)
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			},
			data: body,
			success: function(response){
					console.log("success")
			}
	
		})
	  })
});

$(document).ready(function(){
	window.document.querySelector('#VolunteerButton').addEventListener('click', event => {
		var vfname = $("#VolunteerFN").val();
		var vlname = $("#VolunteerLN").val();
		var vmail = $("#VolunteerEmail").val();
		var vphone = $("#VolunteerPhone").val();
		var vlocation = $("#VolunteerLocation").val();
		var vhometown = $("#VolunteerHometown").val();
		var body = {
			vfname: vfname,
			vlname:vlname,
			vmail:vmail,
			vphone:vphone,
			vlocation:vlocation,
			vhometown:vhometown
		};
		$.ajax({
			method: "POST",
			url: staticRoot + "/api/volunteer",
			headers : {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			transformRequest: function(obj) {
				var str = [];
				for(var p in obj)
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			},
			data: body,
			success: function(response){
					alert("Please Join these two links: " + response.link1 + response.link2);
			}
	
		})
	  })
});