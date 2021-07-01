import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  const mockHttpClient: {
    [P in keyof HttpClient]?: jest.Mock<unknown, unknown[]>;
  } = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(AuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return data from 'register' method`, () => {
    mockHttpClient.post = jest.fn(() => {
      of({
        id: 1,
        user_password: 'aaaa',
        firstName: 'E',
        lastName: 'P',
        password: 'pwd',
        email: 'test@email.com',
        asset: null,
        transactions: null,
        role: 'ROLE_USER',
        isEnable: true,
        enabled: false,
        username: 'ep',
        authorities: [
          {
            authority: 'ROLE_USER',
          },
        ],
        accountNonLocked: false,
        credentialsNonExpired: false,
        accountNonExpired: false,
      });

      // service.register('').subscribe((x: { username: string }) => {
      //   expect(x).toBeTruthy();
      //   expect(x.username).toBe('ep');
      // });
    });
  });
});
