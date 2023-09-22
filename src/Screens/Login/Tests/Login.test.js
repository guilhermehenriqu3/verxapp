import Login from '../index';
import {Provider} from 'react-redux';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {store} from '../../../Store';

test('Login Screen UI Test', async () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  const expectedUsername = 'kminchelle';
  const expectedPassword = '0lelplR';

  fireEvent.changeText(screen.getByTestId('username'), expectedUsername);
  fireEvent.changeText(screen.getByTestId('Password'), expectedPassword);

  const inputlogin = await screen.findByTestId('username');
  const inputpassword = await screen.findByTestId('Password');

  fireEvent.press(screen.getByTestId('submit'));
});
