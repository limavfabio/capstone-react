import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../routes/Root';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Loads and displays Loading and Root components', async () => {
  // ARRANGE
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
  ]);

  render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('The App is Loading!');
});
