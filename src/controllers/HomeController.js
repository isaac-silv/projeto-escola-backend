class HomeController {
  async index(req, res) {
    const user = {
      id: req.userId,
      nome: req.userNome,
      email: req.userEmail
    }
    res.json(user);
  }
}

export default new HomeController();
