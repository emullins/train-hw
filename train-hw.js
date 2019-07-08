var firebaseConfig = {
    apiKey: "AIzaSyDSvz4fG7BD2YUGeDYSdiQx9vRw8NZM9LE",
    authDomain: "train-hw-dc21e.firebaseapp.com",
    databaseURL: "https://train-hw-dc21e.firebaseio.com",
    projectId: "train-hw-dc21e",
    storageBucket: "",
    messagingSenderId: "298701856229",
    appId: "1:298701856229:web:f326900da9da9930"
  };

  firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
  var trainFrequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainStart,
    frequency: trainFrequency
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().role;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().rate;


  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFrequency);


  var trainStartPretty = moment.unix(trainStart).format("MM/DD/YYYY");

  var trainStart = moment.unix(startTime).format("MM/DD/YYYY");


  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainStartPretty),
    $("<td>").text(trainFrequency),
    $("<td>").text(trainStart),
  
  );


  $("#train-table > tbody").append(newRow);
});





