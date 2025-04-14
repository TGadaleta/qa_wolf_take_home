import { chromium } from "playwright";

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();

// go to Hacker News
await page.goto("https://news.ycombinator.com/newest");