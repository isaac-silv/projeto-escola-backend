
const index = async (req, res) => {
  const user = {
    id: req.userId,
    nome: req.userNome,
    email: req.userEmail
  }
  res.json(user);
}


export const checkUser = {
  index,
}