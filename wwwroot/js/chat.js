"use strict";

var connection = new signalR.HubConnectionBuilder()
  .withUrl("/signalHub")
  .build();

//Disable the send button until connection is established.
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (data) {
  // console.log({ id: data});
  var li = document.createElement("li");
  document.getElementById("messagesList").appendChild(li);
  li.textContent = `${data.code} send token: ${data.data.token}`;
});

connection
  .start()
  .then(function () {
    document.getElementById("sendButton").disabled = false;
  })
  .catch(function (err) {
    return console.error(err.toString());
  });

document
  .getElementById("sendButton")
  .addEventListener("click", function (event) {
    var id = document.getElementById("userInput").value;
    let data = { token: "39809kgjhdjg4280-9" };
    connection.invoke("SendMessage", id, data).catch(function (err) {
      return console.error(err.toString());
    });
    event.preventDefault();
  });
