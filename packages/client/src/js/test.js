import { act } from 'react-dom/test-utils';

function wait(amount = 0) {
  return new Promise(resolve => setTimeout(resolve, amount));
}

export const actWait = async (amount = 0) => {
  await act(async () => {
    await wait(amount);
  });
}

export const updateWrapper = async (wrapper, amount = 0) => {
  await act(async () => {
    await wait(amount);
    wrapper.update();
  });
}
