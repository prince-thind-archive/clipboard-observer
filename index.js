const { keyboard, Key } = require('@nut-tree/nut-js');

async function simulateCtrlAltE() {
  // Press and hold Ctrl, Alt, then press E, and finally release Alt and Ctrl.
  const k=keyboard;
  await k.pressKey(Key.LeftControl, Key.LeftAlt);
  await k.type( 'e');
  await k.releaseKey(Key.LeftControl, Key.LeftAlt,);

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


simulateCtrlAltE()
  .then(() => console.log('Ctrl+Alt+E simulated successfully'))
  .catch(err => console.error('Error simulating Ctrl+Alt+E:', err));

