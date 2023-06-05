import { IGameDTO } from '../../infra/entities/Game';
import { IGameRepository } from '../../infra/repositories/IGameRepository';
import { RegisterGameUseCase } from './RegisterGameUseCase';

const RegisterGameUseCaseMock = RegisterGameUseCase as jest.Mock<RegisterGameUseCase>;

describe('Register Game Use Case', () => {
  let sut: RegisterGameUseCase;

  const data: IGameDTO = {
    name: 'Insert celebrate validation 2',
    releaseData: '1981',
    designer: 'Toru Iwatani',
    developer: 'Nanco',
    genre: 'Maze',
    mode: 'Single-player, multiplayer',
    platform: 'Arcade'
  };

  const mockGameRepository: IGameRepository = {
    register: jest.fn().mockResolvedValueOnce({})
  };

  beforeEach(() => {
    sut = new RegisterGameUseCaseMock(mockGameRepository);
  });

  test('Should be able to create a new register game', async () => {
    const response = await sut.execute(data);

    expect(response).toBe(undefined);
  });
});
