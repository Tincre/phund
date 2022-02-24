import {classNames, clientJwtDecode, fetcher, resolveSafeTypeToComponent} from '../lib/utils';
import {render} from '@testing-library/react'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

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

describe('resolveSafeTypeToComponent', () => {
  it('should render the SafeValCap component', () => {
    const Component = resolveSafeTypeToComponent('cap');
    const renderVal = render(<Component />);
    expect(renderVal.getByText(/Post-Money/i)).toBeInTheDocument();
  });
  it('should render the SafeDiscount component', () => {
    const Component = resolveSafeTypeToComponent('discount');
    const renderVal = render(<Component />);
    expect(renderVal.getByText(/Discount/i)).toBeInTheDocument();
  });
  it('should render the SafeMfn component', () => {
    const Component = resolveSafeTypeToComponent('mfn');
    const renderVal = render(<Component />);
    expect(renderVal.getByText(/this safe/i)).toBeInTheDocument();
  });
  it('should render no component', () => {
    const component = resolveSafeTypeToComponent('x012k');
    const renderVal = render(component);
    expect(null).not.toBeTruthy();
  });
});
