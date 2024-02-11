// import crypto from "crypto";
import {
  Button,
  FileType,
  Key,
  Point,
  Region,
  centerOf,
  keyboard,
  linear,
  mouse,
  screen,
  sleep,
  straightTo,
} from "@nut-tree/nut-js";

// import finder from "@udarrr/template-matcher";
// (async () => {
//   while (true) {
//     // 1843 404
//     console.log((await screen.colorAt(new Point(1843, 404))).toHex());
//     if ((await screen.colorAt(new Point(1843, 404))).toHex() == "#1424c2ff") {
//       // keyboard.type(Key.X);
//       // await mouse.setPosition(new Point(1838, 759));
//       await mouse.click(Button.LEFT);
//       console.log("true");
//       break;
//     }
//     await sleep(1);
//   }
// })();

import { GlobalKeyboardListener } from "node-global-key-listener";
const v = new GlobalKeyboardListener();

(async () => {
  let firstSafeGuard = true;
  let secondSafeGuard = true;
  keyboard.config.autoDelayMs = 0;
  v.addListener(function (e, down) {
    if (e.rawKey._nameRaw == "VK_OEM_5") {
      firstSafeGuard = false;
    }
    if (e.rawKey._nameRaw == "VK_OEM_MINUS") {
      secondSafeGuard = false;
    }
    if (e.rawKey._nameRaw == "VK_OEM_PLUS") {
      secondSafeGuard = true;
    }
  });
  while (firstSafeGuard) {
    if (secondSafeGuard) {
      if ((await screen.colorAt(new Point(1837, 465))).R === 20) {
        keyboard.type(Key.X);
        await sleep(1000);
        keyboard.type(Key.X);
      }
    }
    await sleep(1);
  }

  console.log("loop stopped");
})();
