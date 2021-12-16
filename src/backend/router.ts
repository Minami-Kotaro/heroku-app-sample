import express, { NextFunction, Request, Response } from "express";
import { Pool, PoolConfig } from "pg";

const config: PoolConfig = {
  user: "soxcqhtptszyef",
  database: "d9vob2fk17ui00", // env var: PGDATABASE
  password: "00acccb6e67e37785f97deeb60d8b5a3dbf80aaaa0f5f3ff267d1d63a9040240", // env var: PGPASSWORD
  host: "ec2-54-204-128-96.compute-1.amazonaws.com", // Server hosting the postgres database
  port: 5432, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  ssl: { rejectUnauthorized: false },
};
const pool = new Pool(config);

const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("test");
  pool.query(`select * from memo`, [], (err, result) => {
    if (err) {
      console.log(err);
      return next();
    }
    const list = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      text: row.text,
    }));
    res.json(list);
  });
});

export default router;
