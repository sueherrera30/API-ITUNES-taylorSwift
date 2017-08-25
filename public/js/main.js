
var loadingPage = function () {
	getInformation();
	
};

var getInformation = function () {
	var url = "https://itunes.apple.com/search?term=taylor+swift&limit=200";
	$.getJSON(url, function(response) {
		var info = response.results;
		console.log(info);
		info.forEach(function(song){
			var songName = song.trackCensoredName;
				console.log(songName);
			
			var collectionName =song.collectionName;
			console.log(collectionName);
			
			var trackId =song.trackId;
			console.log(trackId);
			
			var songImage =song.artworkUrl100;
			console.log(songImage);
		})
		
		});

};



/*var songContainer = $("#container-songs");*/
		

$(document).ready(loadingPage);