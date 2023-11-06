const { keyboard, Key } = require("@nut-tree/nut-js");

async function simulateCtrlAltE() {
  // Press and hold Ctrl, Alt, then press E, and finally release Alt and Ctrl.
  const k = keyboard;
  await k.pressKey(Key.LeftControl, Key.LeftAlt);
  await k.type(process.argv[2] ?? "e");
  await k.releaseKey(Key.LeftControl, Key.LeftAlt);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

simulateCtrlAltE().catch((err) =>
  console.error("Error simulating Ctrl+Alt+E:", err)
);
