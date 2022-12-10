"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    const user = {
      id: req.userId,
      nome: req.userNome,
      email: req.userEmail
    }
    res.json(user);
  }
}

exports. default = new HomeController();
