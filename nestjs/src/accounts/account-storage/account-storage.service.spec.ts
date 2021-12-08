import { Test, TestingModule } from '@nestjs/testing';
import { AccountStorageService } from './account-storage.service';

describe('AccountStorageService', () => {
  let service: AccountStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountStorageService],
    }).compile();

    service = module.get<AccountStorageService>(AccountStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
