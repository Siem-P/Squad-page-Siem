// Importeer express uit de node_modules map
import express from "express";

const url = "https://whois.fdnd.nl/api/v1/squad/";
// Maak een nieuwe express app aan
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", async (req, res) => {
  let slug = req.query.squad || "squad-a-2022";
  let squadUrl = url + slug;

	console.log(slug)
  fetchApi(squadUrl).then((data) => {
    res.render('index', data)
  })
})


app.set("port", process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

async function fetchApi(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}
