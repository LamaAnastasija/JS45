const fs = require("fs");

let data = "Hello, people!";

fs.writeFileSync("data.txt", data);

fs.appendFileSync("data.txt", "\nMy name is Anastasija.");
fs.appendFileSync("data.txt", "\nHave a good day!");
