class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

/** exportar a class ja instânciada */
export default new HomeController();
