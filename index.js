// Importeer express uit de node_modules map
import express, { json, urlencoded } from "express";
import bodyParser from "body-parser";

// Squad api url
const url = "https://whois.fdnd.nl/api/v1/squad/";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  let slug = req.query.squad || "squat-c-2022";
  let squadUrl = url + slug
  const pageTitle = req.query.squad || "squat-c-2022";
  const data = await fetchApi(squadUrl); // Fetch api data using the squadURL variable
  
  data.pageTitle = pageTitle // Set pageTitle for the active button state

  res.render("index", data);
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

// Function for fetching the API
async function fetchApi(url) {
  const data = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);

  return data;
}
