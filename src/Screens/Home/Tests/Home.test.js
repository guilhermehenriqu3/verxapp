import Home from '../index';
import {Provider} from 'react-redux';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {store} from '../../../Store';

test('Home Screen UI Test', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  await screen.findByTestId('header');
  await screen.findByTestId('logo');
  await screen.findByTestId('loading');
  await screen.findByTestId('leaveButton');

  fireEvent.press(screen.getByTestId('leaveButton'));
});
