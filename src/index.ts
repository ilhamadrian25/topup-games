import express, { Request, Response } from "express";
import createError from "http-errors"
import router from "./api/v1/Product";
import cors from 'cors'
import dotenv from 'dotenv'
import winston  from "winston"
dotenv.config()

const app = express()

app.use(cors({
  origin: process.env.FRONTEND_URL
}))
app.use(express.json({
  limit: '50mb',
}))
app.use(router)

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404))
})

app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:3000`)
)

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.printf(info => {
      return `${info.timestamp} ${info.level}: ${info.message}\n`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' }),
  ],
});

// function logError(message) {
//   logger.error({ message });
// }

// Contoh penggunaan