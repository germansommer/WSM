function searchId(){
	var summ = ($("#sname1").val());
	console.log(summ);
}


$(document).ready(function(){			
	$("#select--button").click(function(){
		searchId();
	});
});


$(document).ready(function(){			
	$("#select--button").click(function(){
		$.ajax({
			method: "GET",
			url: "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/Duffman?api_key=RGAPI-726bbc60-67d7-47e4-ae8e-9eaca1f93d10",
			headers:{
				"Access-Control-Allow-Origin": "https://developer.riotgames.com",
				"Origin": "https://developer.riotgames.com",
			    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
			    "X-Riot-Token": "RGAPI-726bbc60-67d7-47e4-ae8e-9eaca1f93d10",
			    "Accept-Language": "es-US,es;q=0.9,es-419;q=0.8,en;q=0.7",
			    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36"
				
			},
			type: "GET",
			dataType: "json",
			data: {				
			},
			beforeSend: function(){
				console.log("ahi lo mando");
			},
			success: function(respuesta){
				console.log(respuesta);
			},
			error: function(){
				console.log("error");
			}
		});
	});
});


