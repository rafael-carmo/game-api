// import prismaClient from '../../prisma/prismaClient';
import prismaClient from '../../../../shared/infra/prisma/prismaClient';
import { IGameDTO } from '../entities/Game';
import { IGameRepository } from './IGameRepository';

class GameRepository implements IGameRepository {
  async register({ releaseData, designer, developer, genre, mode, name, platform }: IGameDTO): Promise<void> {
    const game = await prismaClient.game.create({
      data: {
        releaseData,
        designer,
        developer,
        genre,
        mode,
        name,
        platform
      }
    });
    console.log(game);
  }
}

export { GameRepository };
