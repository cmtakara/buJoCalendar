require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3001
// replace fruits with entries
// then add other entry types - 
// calendar versus bujo
const fruits = require("./models/fruits")
const events = require("./models/calEntries")
// updates above

const reactViews = require('express-react-views')
const mongoose = require("mongoose")

// console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', ()=> {
  console.log('connected to mongo')
})

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})

app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + '/public'))

// these entries are calendar entries (ish)
app.get("/events", (req, res) => {
  console.log("2. controller")
  res.render("calendar/Index", {events: events})
})

// To be removed
app.get("/fruits", (req, res) => {
  console.log("2. controller")
  res.render("Index", {fruits: fruits})
})


// new cal entries
app.get("/events/new", (req, res) => {
  console.log("2. controller")
  res.render("calendar/New")
})

// to be removed
app.get("/fruits/new", (req, res) => {
  console.log("2. controller")
  res.render("New")
})


// to be removed
app.post("/fruits", (req, res) => {
  console.log("2. controller")
  if (req.body.readyToEat === "on"){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  console.log(fruits)
  // redirects after creating fruit, to the Index page
  res.redirect("/fruits")
})

app.post("/event", (req, res) => {
  console.log("2. controller")
  if (req.body.complete === "on"){
    req.body.complete = true
  } else {
    req.body.complete = false
  }
  events.push(req.body)
  console.log(events)
  // redirects after creating fruit, to the Index page
  res.redirect("/events")
})

// to be removed
app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("Show", {fruit: fruits[req.params.indexOfFruit]})
})

app.get("/events/:indexOfEvent", (req, res) => {
  // res.send(fruits[req.params.indexOfEvent])
  res.render("calendar/Show", {event: events[req.params.indexOfEvent]})
})

app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});