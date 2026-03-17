import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getFormData = asyncHandler(async (req, res) => {
  const formData = req.body
  res.status(200).send({ successs: true, formData, message: "Form data retrival comnplete"});
});


export { getFormData };
