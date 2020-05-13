import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProviderService from './ListProvidersService';

import AppError from '@shared/errors/AppError';

let fakeUserRepository: FakeUsersRepository;
let listProviderService: ListProviderService;

describe('ListProviders', () => {

  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    listProviderService = new ListProviderService(fakeUserRepository);
  });

  it('Should be able to list the providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'Joao Teste 1',
      email: 'joao1@test.com',
      password: '123456'
    });

    const user2 = await fakeUserRepository.create({
      name: 'Joao Teste 2',
      email: 'joao2@test.com',
      password: '123456'
    });

    const loggedUser = await fakeUserRepository.create({
      name: 'Joao Teste 3',
      email: 'joao3@test.com',
      password: '123456'
    });

    const providers = await listProviderService.execute({
      user_id: loggedUser.id});

    expect(providers).toEqual([user1, user2]);
  });

});
