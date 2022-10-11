import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../routes/Root';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Loads and displays FruitDetails Component', async () => {
  // ARRANGE
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/fruitdetails/:fruitid',
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
});
