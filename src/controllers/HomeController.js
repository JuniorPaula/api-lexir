import Carro from '../models/Carro';

class HomeController {
  /** método responsável por criar um carro */
  async create(req, res) {
    try {
      const newCar = await Carro.create(req.body);
      return res.status(201).json(newCar);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  /** método responsável por listar todos os carros */
  async index(req, res) {
    try {
      const cars = await Carro.findAll();

      return res.json(cars);
    } catch (e) {
      return res.json(null);
    }
  }

  /** método responsável por listar um carro */
  async show(req, res) {
    try {
      const car = await Carro.findByPk(req.params.id);

      return res.json(car);
    } catch (e) {
      return res.json(null);
    }
  }

  /** método responsável atualizar um carro */
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não encontrado!'],
        });
      }
      const car = await Carro.findByPk(req.params.id);

      if (!car) {
        return res.status(400).json({
          errors: ['Carro não encontrado!'],
        });
      }

      const carUpdated = await car.update(req.body);

      return res.json(carUpdated);
    } catch (e) {
      return res.json(null);
    }
  }

  /** método responsável deletar um carro */
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não encontrado!'],
        });
      }
      const car = await Carro.findByPk(req.params.id);

      if (!car) {
        return res.status(400).json({
          errors: ['Carro não encontrado!'],
        });
      }

      await car.destroy();

      return res.json(null);
    } catch (e) {
      return res.json(null);
    }
  }
}

/** exportar a class ja instânciada */
export default new HomeController();
