// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
import { exec } from "child_process";

async function sortHackerNewsArticles() {
  // launch browser

  exec('npx playwright test tests/sortedArticles.spec.js', (err, stdout) => {
    if (err) return console.error(err);
    console.log(stdout);
  });

}

(async () => {
  await sortHackerNewsArticles();
})();
