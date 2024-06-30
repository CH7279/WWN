const express=require("express")
const Periods = require("../controllers/Periods");
const PeriodsRouter = express.Router();


PeriodsRouter.route("/")
    .post(Periods.createPeriod)
PeriodsRouter.route("/:id")
    .get(Periods.getPeriodById)
    .delete(Periods.deletePeriodById)
    .put(Periods.updatePeriodById)
module.exports = PeriodsRouter;
