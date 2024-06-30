require('dotenv').config()
const express = require("express")

const Messengers_in_placesRouter = require("./routes/Messengers_in_places");
const Bank_AccountsRouter = require("./routes/Bank_Accounts");
const PlacesRouter = require("./routes/Places");
const NotesRouter = require("./routes/Notes");
const Places_to_addRouter = require("./routes/Places_to_add");
const RequestsRouter = require("./routes/Requests");
const MessengersRouter = require("./routes/Messengers");
const StoriesRouter = require("./routes/Stories");
const Messengers_to_addRouter = require("./routes/Messengers_to_add");
const Stories_to_addRouter = require("./routes/Stories_to_add");
const PeriodRouter = require("./routes/Periods");

const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 8000
app.use(cors());
app.use(express.json())
app.listen(PORT, () => console.log(`server running on port ${PORT}`))



app.use("/messengers_in_places", Messengers_in_placesRouter);
app.use("/bank_Accounts", Bank_AccountsRouter);
app.use("/places", PlacesRouter);
app.use("/notes", NotesRouter);
app.use("/places_to_add", Places_to_addRouter);
app.use("/requests", RequestsRouter);
app.use("/messengers", MessengersRouter);
app.use("/stories", StoriesRouter);
app.use("/messengers_to_add", Messengers_to_addRouter);
app.use("/stories_to_add", Stories_to_addRouter);
app.use("/period", PeriodRouter);



