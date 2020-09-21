import { render } from '@testing-library/react';

const Providers = ({ children }: { children: React.ReactElement }) => {
  return children;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
