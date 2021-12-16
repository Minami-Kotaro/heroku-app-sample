"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const config = {
    user: "soxcqhtptszyef",
    database: "d9vob2fk17ui00",
    password: "00acccb6e67e37785f97deeb60d8b5a3dbf80aaaa0f5f3ff267d1d63a9040240",
    host: "ec2-54-204-128-96.compute-1.amazonaws.com",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
    ssl: { rejectUnauthorized: false },
};
const pool = new pg_1.Pool(config);
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
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
exports.default = router;
//# sourceMappingURL=router.js.map