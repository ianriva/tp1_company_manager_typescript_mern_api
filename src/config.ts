import dotenv from 'dotenv'
dotenv.config();

export default {
    "MONGO_DATABASE": process.env.DATABASE_NAME || "company_manager",
    "MONGO_USER": process.env.DATABASE_USER || "admin",
    "MONGO_PASSWORD": process.env.DATABASE_PASSWORD || "admin",
    "MONGO_HOST": process.env.DATABASE_HOST || "localhost",
    "PORT": process.env.PORT || 3001,
}