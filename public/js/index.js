const staticRoot = "http://mit-covid-support.herokuapp.com"
$(document).ready(function(){
	$(".thankyou").hide();
 //$(".vthankyou").hide();	
	window.document.querySelector('#btnRegister1').addEventListener('click', event => {
		var pname = $("#PatientName").val();
		var location = $("#PatientLocation").val();
		var age = $("#PatientAge").val();
		var requirement = $("#Requirement").val();
		var gender = $('input[name="gender"]:checked').val();
		var cpho = $("#PatientContact").val();
		var cname = $("#ContactName").val();
		var  pcity= $("#PatientCity").val();
		var blood = $("#BloodGroup").val();
		if(pname!=''&&location!=''&&age!=''&&requirement!=''&&gender!=''&&cpho!=''&&cname!=''&&pcity!=''){
		var body = {
			name: pname,
			location:location,
			age:age,
			requirement:requirement,
			gender:gender,
			cpho:cpho,
			cname:cname,
			pcity:pcity,
			blood: blood
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
					$("#home").hide();
                    $(".thankyou").show();	
                    $(".vthankyou").hide();						
			}
	
		});
	}
	else{

          alert("All fields are mandatory to fill for proceeding.");

	}
	  })
});

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
  }

$(document).ready(function(){
	window.document.querySelector('#VolunteerButton').addEventListener('click', event => {
		var vfname = $("#VolunteerFN").val();
		var vlname = $("#VolunteerLN").val();
		var vmail = $("#VolunteerEmail").val();
		var vphone = $("#VolunteerPhone").val();
		var vlocation = $("#VolunteerLocation").val();
		var vhometown = $("#VolunteerHometown").val();
		if(vfname!=''&&vmail!=''&&vphone!=''&&vlocation!=''&&vhometown!=''&&vlname!=''&&isEmail(vmail)){
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
					if(typeof response.link1 !== 'undefined'){
				      var responselink1= response.link1;
					  responselink1= responselink1.replace("t.","telegram.");
					}
					if(typeof response.link2 !== 'undefined'){
					  var responselink2= response.link2;
					  responselink2= responselink2.replace("t.","telegram.");
					}
					$("#profile").hide();
                    $(".vthankyou").append("<h5>Thank you for showing interest kindly click on the below telegram link to join the team.<br><br> <a href='"+ responselink1 + "'>Current Town</a><br><br> <a href='"+ responselink2 +"'>HomeTown</a></h5>");	
                    $(".thankyou").hide();	
			}
	
		});
	}
	else{

		alert("Check all the required fields.")
	}
	  });

});
