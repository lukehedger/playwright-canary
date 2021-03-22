const { webkit } = require("playwright-webkit");

async function homeSpec() {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL);
  await page.screenshot({ path: `${process.env.SCREENSHOT_DIR}/home.png` });
  await browser.close();
}

exports.handler = async () => {
  return await homeSpec();
};
