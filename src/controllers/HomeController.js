import Carro from '../models/Carro';

class HomeController {
  async index(req, res) {
    const newCar = await Carro.create({
      marca: 'S',
      modelo: 'Tesla',
      ano: '2019',
      preco: 130.000,
    });
    res.json(newCar);
  }
}

/** exportar a class ja instânciada */
export default new HomeController();
