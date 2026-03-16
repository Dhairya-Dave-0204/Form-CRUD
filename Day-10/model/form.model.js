import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { pool } from "../db/db.js";

const insertData = asyncHandler(async (formData) => {
  if (!formData) {
    throw new ApiError(400, "Invalid form details in backend!");
  }
  let query = `INSERT INTO basic_information 
  (first_name, last_name, dob, gender, email, phone, designation, relationship) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  let queryFieldValues = [
    formData.firstName,
    formData.lastName,
    formData.dob,
    genderVal,
    formData.email,
    formData.phone,
    formData.designation,
    formData.relationship,
  ];

  let genderVal;
  if (formData.gender == "male") {
    genderVal = 1;
  } else {
    genderVal = 2;
  }

  const [rows] = await pool.promise().execute(query, queryFieldValues);
  
});

export { insertData };
