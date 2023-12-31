import crypto from "crypto";
import {
  FileType,
  Region,
  centerOf,
  mouse,
  screen,
  sleep,
  straightTo,
} from "@nut-tree/nut-js";
import finder from "@udarrr/template-matcher";
(async () => {
  mouse.config.mouseSpeed = 1000;
  let randomString = crypto.randomBytes(4).toString("hex");
  // Capture desktop image
  // await screen.capture(`${randomString}`, FileType.PNG, "screenshots/");
  
  let desktop = `screenshots/${randomString}.png`;
  let icons = "wad.png";
  // find image using free package (lol)
  const matcheImages = await finder.findMatch({
    haystack: desktop,
    needle: icons,
  });
  const mil = matcheImages.location;
  const mir = new Region(mil.left, mil.top, mil.width, mil.height);
  await mouse.move(straightTo(centerOf(mir)));
  // set highlight location
})();
