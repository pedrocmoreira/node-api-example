import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";

const port = process.env.DB_Port as number | undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgress',
  password: 'postgress',
  database: 'postgress',
  entities: [`(__dirname)/**/entities/*.{ts,js}`]
});

