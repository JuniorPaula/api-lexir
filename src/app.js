import express from 'express';

/** importar as rotas */
import homeRoutes from './routes/homeRoutes';

/** class que configura o express */
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

/** exportar a class já instanciada */
export default new App().app;
