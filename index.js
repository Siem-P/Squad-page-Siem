// Importeer express uit de node_modules map
import express, { json, urlencoded } from "express";
import bodyParser from "body-parser";

const url = "https://whois.fdnd.nl/api/v1/squad/";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",  (req, res) => {
  res.render("landing")
})

app.get("/FDND-overzicht", async (req, res) => {
  let slug = req.query.squad || "squat-c-2022";
  let squadUrl = url + slug;

	console.log(slug)
	const pageTitle = req.path + "?squad=" + slug

	const data = await fetchApi(squadUrl)
  
  res.render('index', { data, pageTitle })
})

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

async function fetchApi(url) {
	const data = await fetch(url)
			.then((response) => response.json())
			.catch((error) => error)

	return data
}
