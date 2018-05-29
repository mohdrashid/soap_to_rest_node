"use strict";

var soap = require("strong-soap").soap;
var url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

var requestArgs = {
};

var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client["ListOfContinentsByName"];
  method(requestArgs, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log("Response Envelope: \n" + envelope);
    //'result' is the response body
    console.log("Result: \n" + JSON.stringify(result));
  });
});
