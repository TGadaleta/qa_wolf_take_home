// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
import { chromium } from "playwright";
import collectArticles from "./functions/collect-hacker-articles.js";

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // navigate to Hacker News "newest" and collect articles
  const articles = await collectArticles(page, []);

  // close browser
  await browser.close();
  
  // check if articles are sorted by time and report
  const isSortedByTime = (arr, key) => arr.every((item, i) => i === 0 || arr[i - 1][key] >= item[key]);
  console.log("Amount of articles:", articles.length);
  console.log(`Articles are sorted by time: ${isSortedByTime(articles, "time")}`);
}

(async () => {
  await sortHackerNewsArticles();
})();
