import mysql from "mysql2";
interface Params {
  params: string;
  values: [];
}
export async function querys(props: Params) {
  const dbcon = await mysql.createConnection({
    host: "localhost",
    database: "table_status",
    user: "root",
    password: "",
  });
  try {
    const [rows, field]: any = await dbcon.execute(props.params, props.values);
    console.log(rows);
    await dbcon.end();
    return rows;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
