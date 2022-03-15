import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/error/AppError';
import { FunkoRepository } from '../typeorm/repositories/FunkosRepository';
import Funko from '../entities/Funko';

class ListFunkoService {
  public async execute(): Promise<Funko[]> {
    const funkosRepository = getCustomRepository(FunkoRepository);
    const funkoExists = await funkosRepository.find();

    if (funkoExists) {
      throw new AppError('Existe um funko cadastrado usando este nome');
    }
    const funkos = funkosRepository.find();

    return funkos;

    return funkos;
  }
}
export default ListFunkoService;
