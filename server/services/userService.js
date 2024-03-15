const db = require("../config/database");

// Function to retrieve user by email
const getUserByEmail = async (email) => {
  const query = `SELECT email
    FROM public."user" where email = $1`;
  const { rows } = await db.query(query, [email]);
  return rows[0];
};

// Function to create a new user
const createUser = async (
  email,
  password,
  account_type,
  mobile_phone_number,
  business_name,
  business_website
) => {
  const query = `INSERT INTO "user" ("email", "password", "account_type", "mobile_phone_number", "business_name", "business_website") VALUES ($1, $2, $3, $4, $5, $6)`;
  return await db.query(query, [
    email,
    password,
    account_type,
    mobile_phone_number,
    business_name,
    business_website,
  ]);
};

module.exports = {
  getUserByEmail,
  createUser,
};
