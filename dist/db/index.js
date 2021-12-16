"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg");
const uri = "postgres://soxcqhtptszyef:00acccb6e67e37785f97deeb60d8b5a3dbf80aaaa0f5f3ff267d1d63a9040240@ec2-54-204-128-96.compute-1.amazonaws.com:5432/d9vob2fk17ui00";
const pool = new pg_1.Pool({ connectionString: uri });
function query(text, params, callback) {
    return pool.query(text, params, callback);
}
exports.query = query;
//# sourceMappingURL=index.js.map