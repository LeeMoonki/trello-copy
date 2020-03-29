import { act } from 'react-dom/test-utils';

function wait(amount = 0) {
  return new Promise(resolve => setTimeout(resolve, amount));
}

async function actWait(amount = 0) {
  await act(async () => {
    await wait(amount);
  });
}

async function updateWrapper(wrapper, amount = 0) {
  await act(async () => {
    await wait(amount);
    wrapper.update();
  });
}