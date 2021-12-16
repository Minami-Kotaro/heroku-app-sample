import { Pool, QueryResult } from "pg";

const uri =
  "postgres://soxcqhtptszyef:00acccb6e67e37785f97deeb60d8b5a3dbf80aaaa0f5f3ff267d1d63a9040240@ec2-54-204-128-96.compute-1.amazonaws.com:5432/d9vob2fk17ui00";

const pool = new Pool({ connectionString: uri });

export function query(
  text: string,
  params: any[],
  callback: (err: Error, result: QueryResult<any>) => any
): void {
  return pool.query(text, params, callback);
}
