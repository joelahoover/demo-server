
var nomv = require('nomv')

$.getJSON(config.resource_server + "json/test.json", function(newdata, status) {
  if (status == "success") {
    console.log("Success!");
    console.log(newdata);
    console.log("Bonus message: " + nomv.getString())
  } else {
    alert("Failed to load json: " + status);
  }
});
