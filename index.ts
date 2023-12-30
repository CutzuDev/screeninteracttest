import crypto from "crypto";
import cv from "@u4/opencv4nodejs";
import { FileType, screen } from "@nut-tree/nut-js";
(async () => {
  let randomString = crypto.randomBytes(4).toString("hex");
  await screen.capture(`${randomString}`, FileType.PNG, "screenshots/");
  let desktop = await cv.imreadAsync("screenshots/desktop1.png");
  let icons = await cv.imreadAsync("toolbar.png");
  const matched = desktop.matchTemplate(icons, cv.TM_CCOEFF_NORMED);
  const minMax = matched.minMaxLoc();
  const {
    maxLoc: { x, y },
  } = minMax;
  desktop.drawRectangle(
    new cv.Rect(x, y, icons.cols, icons.rows),
    new cv.Vec3(0, 255, 0),
    2,
    cv.LINE_8
  );
})();
