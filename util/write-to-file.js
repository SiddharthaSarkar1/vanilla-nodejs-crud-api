const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    console.log("data to be written in the file", data);
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (error) {
    console.error(error);
  }
};
