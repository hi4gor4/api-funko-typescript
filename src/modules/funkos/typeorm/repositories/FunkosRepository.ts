import { EntityRepository, Repository } from 'typeorm';
import Funko from '../entities/Funko';

@EntityRepository
export class FunkoRepository extends Repository<Funko> {
  public async findByName(nome: string): Promise<Funko | undefined> {
    const funko = this.findOne({
      where: {
        nome,
      },
    });
    return funko;
  }
}
