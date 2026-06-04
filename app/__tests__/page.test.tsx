import { render } from '@testing-library/react';
import Page from '../page';

describe('Home page', () => {
  it('renders without crashing', () => {
    render(<Page />);
    expect(document.body).toBeInTheDocument();
  });
});
