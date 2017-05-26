
$.getJSON(config.resource_server + "json/test.json", function(newdata, status) {
  if (status == "success") {
    console.log("Success!");
    console.log(newdata);
  } else {
    alert("Failed to load json: " + status);
  }
});
