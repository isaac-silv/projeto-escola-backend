"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    const user = {
      id: req.id,
      nome: req.nome,
      email: req.email
    }
    res.json(user);
  }
}

exports. default = new HomeController();
