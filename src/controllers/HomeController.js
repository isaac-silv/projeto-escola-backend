class HomeController {
  async index(req, res) {
    res.json(true);
  }
}

export default new HomeController();
