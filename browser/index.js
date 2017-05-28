
nomv = require('nomv')

$.getJSON(config.resource_server + "json/test.json", function(newdata, status) {
  if (status == "success") {
    console.log("Success!");
    console.log(newdata);
    nomv.run(config.resource_server);
  } else {
    alert("Failed to load json: " + status);
  }
});
