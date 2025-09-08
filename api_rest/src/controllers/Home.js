import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Airton',
      sobrenome: 'Duwe Junior',
      email: 'info.airton@gmail.com',
      idade: 21,
      peso: 72,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
