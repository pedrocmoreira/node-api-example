import express from 'express';
import { AppDataSource } from './data-soutce';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    return res.json('Servidor executando!');
  })

  return app.listen(3000);
})