const { webkit } = require("playwright-webkit");

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL);
  await page.screenshot({ path: "tests/screenshots/home.png" });
  await browser.close();
})();
