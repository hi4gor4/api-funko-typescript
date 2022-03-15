import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import { FunkoRepository } from '../typeorm/repositories/FunkosRepository';
import Funko from '../entities/Funko';

interface IRequest {
  nome: string;
  numero: number;
  descricao: string;
  lancamento: Date;
}

class CreateFunkoService {
  public async execute({
    nome,
    numero,
    descricao,
    lancamento,
  }: IRequest): Promise<Funko> {
    const funkosRepository = getCustomRepository(FunkoRepository);
    const funkoExists = await funkosRepository.findByName(nome);

    if (funkoExists) {
      throw new AppError('Existe um funko cadastrado usando este nome');
    }
    const funko = funkosRepository.create({
      nome,
      numero,
      descricao,
      lancamento,
    });

    await funkosRepository.save(funko);

    return funko;
  }
}
export default CreateFunkoService;
