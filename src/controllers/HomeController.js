class HomeController {
  async index(req, res) {
    const user = {
      id: req.id,
      nome: req.nome,
      email: req.email
    }
    res.json(user);
  }
}

export default new HomeController();
