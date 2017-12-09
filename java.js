var apikey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="

var searchTerm = "";
var numberRecords = 0;
var startYear = 0;
var endYear = 0;
var recordCount = 0;

function runQuery(recordCount, nytURL) {
  $.ajax({
    url: nytURL,
    method: "GET"
  }).done(function(nytINFO){
  	console.log("----");
  	console.log("URL: " + queryURL);
  	console.log("---");

  	console.log(nytINFO);
  	console.log("---");

  	for (var i = 0; i < numArticles; i++) {
      recordCount++;

   var wellContent = $("<div>");
   wellContent.addClass("biscuitWell");
   wellContent.attr("id", "article-well-" + recordCount);
   $("#well-section").prepend(wellSection);
  }
