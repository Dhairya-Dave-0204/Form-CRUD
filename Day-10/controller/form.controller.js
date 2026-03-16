import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { pool } from "../db/db.js"

const getFormData = asyncHandler(async (req, res) => {
  const {
    personalInfo,
    references,
    preferences,
    languages,
    technologies,
    education,
    workExperience,
  } = req.body;
  
  if (!personalInfo || !references || !preferences || !languages || !technologies || !education || !workExperience) {
    throw new ApiError(400, "Error in form, Missing fields!")
  }

  

  res.json(personalInfo);
});

export { getFormData };
