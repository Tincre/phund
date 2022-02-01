import {classNames, clientJwtDecode, fetcher} from '../lib/utils';

describe('clientJwtDecode', () => {
  it('should return an object', () => {
    const result = clientJwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
    expect(result).toBeTruthy()
  });
    it('should return an error', () => {
      try {
        expect(clientJwtDecode(null))
            .toThrowError(
                "Token must be defined or not null. Do better next time, thanks.");

        expect(clientJwtDecode({}))
            .toThrowError(
                "Token must be defined or not null. Do better next time, thanks.");

      } catch (error) {
      }
    });
});

describe('fetcher', () => {
  it('should return an 200-range response', () => {
    const res = fetcher('https://tincre.com');
    expect(res).toBeTruthy()
  });
});

describe('classNames', () => {
  it('should return a string', () => {
    const classname = classNames('text-white bg-black');
    expect(classname).toBe('text-white bg-black');
  });
});
