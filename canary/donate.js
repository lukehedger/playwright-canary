const { chromium } = require("playwright-chromium");

const chromiumLaunchOptions = {
  args: [
    "--autoplay-policy=user-gesture-required",
    "--disable-background-networking",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    "--disable-domain-reliability",
    "--disable-extensions",
    "--disable-features=AudioServiceOutOfProcess",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-notifications",
    "--disable-offer-store-unmasked-wallet-cards",
    "--disable-popup-blocking",
    "--disable-print-preview",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-setuid-sandbox",
    "--disable-speech-api",
    "--disable-sync",
    "--disk-cache-size=33554432",
    "--hide-scrollbars",
    "--ignore-gpu-blacklist",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-default-browser-check",
    "--no-first-run",
    "--no-pings",
    "--no-sandbox",
    "--no-zygote",
    "--password-store=basic",
    "--use-gl=swiftshader",
    "--use-mock-keychain",
    "--single-process",
  ],
  defaultViewport: {
    deviceScaleFactor: 1,
    hasTouch: false,
    height: 1080,
    isLandscape: true,
    isMobile: false,
    width: 1920,
  },
  headless: true,
  executablePath: "/tmp/chromium",
};

async function donateSpec() {
  const isCanary = typeof process.env.AWS_EXECUTION_ENV !== "undefined";

  const browser = await chromium.launch(isCanary && chromiumLaunchOptions);

  const page = await browser.newPage();

  await page.goto("https://donate.cancerresearchuk.org/");
  await page.screenshot({ path: "/tmp/donate.png" });

  if (!isCanary) await browser.close();
}

exports.handler = async () => {
  return await donateSpec();
};
