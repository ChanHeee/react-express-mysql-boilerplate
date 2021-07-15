const express = require("express")
const asyncHandler = require("express-async-handler")

const router = express.Router()

router.get("/", (req, res, next) => {
  res.send("<h1>Index Page</h1>")
})

module.exports = router
