import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const getFormData = asyncHandler(async (req, res) => {
  const data = req.body
  console.log(data)
  res.json(data)
})

export {
  getFormData
}