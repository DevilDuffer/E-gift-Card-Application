$(document).ready(function () {
  getLogs(null);
  document.getElementById("nextbtn").removeAttribute("disabled");
  $(document).on("click", "#search_button", function () {
    $("td").hide();
    getLogs(null);
  document.getElementById("nextbtn").removeAttribute("disabled");
  });
});

var pageNumber = 1;
var pow = 0;
$(document).on("click", "#nextbtn", function () {
  document.getElementById("previousbtn").removeAttribute("disabled");
  pageNumber++;
  getLogs(pageNumber);
});

$(document).on("click", "#previousbtn", function () {
  pageNumber--;
  getLogs(pageNumber);
});

$(document).on("click", ".btn-success", function () {
  var values = $(this).val();
  console.log(values);
  // var newj=JSON.parse(values);
  $(".prettyprint").text(JSON.stringify(JSON.parse(values),null,4));

  $(document).on("click", "#copybtn", function () {
    var copyText = values;
    navigator.clipboard.writeText(copyText);
  });
});

$(document).on("click", ".btn-primary", function () {
  var values = $(this).val();
  // console.log(values);
  //var newj=JSON.stringify(values);
  //var newk=JSON.stringify(JSON.parse(values),null,4);
  // console.log(newj);
  // console.log(newk);
  
  //console.log(values);
  $(".prettyprint").text(values);

  $(document).on("click", "#copybtn", function () {
    var copyText = values;
    navigator.clipboard.writeText(copyText);
  });
});

// $(document).on("click", ".btn-success", function () {
//   var values = $(this).val();
//   //var newj=JSON.parse(values)
  
//   $(".modal-body").text(values);
//   $(document).on("click", "#copybtn", function () {
//     var copyText = values;
//     navigator.clipboard.writeText(copyText);
//   });
// });


function getLogs(pageNumber) {
  let map1 = new Map();
  let map2 = new Map();
  var apiUrl;
  var pageNumber;
  var pageSize = 20;
  var irwId = document.getElementById("irwId").value;
  var email = document.getElementById("Email").value;
  var timeFrom = document.getElementById("timeFrom").value;
  var timeTo = document.getElementById("timeTo").value;
  var startTime = moment(timeFrom).format("DD-MM-YYYY HH:mm");
  var endTime = moment(timeTo).format("DD-MM-YYYY HH:mm");
  if (document.querySelector('input[name="severity"]:checked')) {
    var severity = document.querySelector(
      'input[name="severity"]:checked'
    ).value;
  }
  if (irwId) {
    map1.set("irwId", irwId);
  }
  if (email) {
    map1.set("email", email);
  }
  if (severity) {
    map1.set("severity", severity);
  }
  if (document.querySelector('input[id="custom"]:checked')) {
    if (startTime) {
      map1.set("from", startTime);
    }
    if (endTime) {
      map1.set("to", endTime);
    }
  } else {
    if (timeFrom) {
      map1.set("from", timeFrom);
    }
    if (timeTo) {
      map1.set("to", timeTo);
    }
  }
  if (pageNumber) {
    map1.set("pageNumber", pageNumber);
  }
  if (pageSize) {
    map2.set("pageSize", pageSize);
  }

  let qString = Array.from(
    map1.entries(),
    ([key, value]) => key + "=" + value
  ).join("&");
  let queryString = Array.from(
    map2.entries(),
    ([key, value]) => key + "=" + value
  );
  if (map1) {
    if (qString) {
      apiUrl =
        "https://jed-azu-sb-qasmw.ecomm-p2.p.azurewebsites.net/v1/shoppingbag/logs" +
        "?" +
        qString +
        "&" +
        queryString;
    } else {
      apiUrl =
        "https://jed-azu-sb-qasmw.ecomm-p2.p.azurewebsites.net/v1/shoppingbag/logs" +
        "?" +
        queryString;
    }
  }

  var myArray = [];
  $.ajax({
    type: "GET",
    url: apiUrl,
    dataType: "json",
    success: function (response) {
      myArray = response.data;
      buildTable(myArray);
      console.log(myArray);
      //document.getElementById("responsebody").innerHTML = JSON.stringify(response.data);
    },
  });

  function buildTable(data) {
    var table = document.getElementById("tdata");
    for (var i = 0; i < data.length; i++) {
      var row = `<tr class="row" id="roww">
                            <td class="status" style="border-top-left-radius:9px;border-bottom-left-radius:11px">${data[i].severity}</td>
                            <td>${data[i].timeStampInUTC}</td>
                            <td>${data[i].apiName}</td>
                            <td><button type="button" class="btn btn-success" id="req_button"  value =${String(
                              data[i].requestBody
                            )}  data-toggle="modal" data-target="#popupwindow">
                            Request
                            </button></td>
                            <td><button type="button" class="btn btn-primary" id="res_button"  value =${JSON.stringify(
                              data[i].responseBody
                            )}  data-toggle="modal" data-target="#popupwindow">
                            Response
                            </button></td>
                            <td style="border-top-Right-radius:7px;border-bottom-Right-radius:11px"><button type="button" class="btn btn-primary" id="trace_button"   value =${JSON.stringify(
                              data[i].exceptionTrace
                            )}  data-toggle="modal" data-target="#popupwindow" >
                            ExceptionTrace
                            </button></td>
                            </tr>`;

      table.innerHTML += row;
      var reqBody = data[i].requestBody;
      var resBody = data[i].responseBody;
      var exceptionTrace = data[i].exceptionTrace;

      pow = pow + 1;
      $("#roww").each(function () {
        $(this).attr("id", "roww" + pow);
      });

      $("#req_button").each(function () {
        $(this).attr("id", "req_button" + pow);
      });

      $("#res_button").each(function () {
        $(this).attr("id", "res_button" + pow);
      });

      $("#trace_button").each(function () {
        $(this).attr("id", "trace_button" + pow);
      });

      $("#roww").each(function () {
        $(this).attr("id", "roww" + pow);
      });

      if (reqBody === undefined) {
        $("#req_button" + pow + "").hide();
      }
      if (resBody === undefined) {
        $("#res_button" + pow + "").hide();
      }
      if (exceptionTrace === undefined) {
        $("#trace_button" + pow + "").hide();
      }
      if (data[i].severity == "INFO") {
        $("#roww" + pow + "").css("background-color", "lightgreen");
      } else {
        $("#roww" + pow + "").css("background-color", "#FF0000");
      }
    }
  }
}
