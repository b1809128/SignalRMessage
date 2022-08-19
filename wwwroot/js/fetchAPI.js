"use strict";

const getData = async function () {
  await fetch("http://localhost:5000/api/auth")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
// getData();

