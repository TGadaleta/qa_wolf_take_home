// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function sortHackerNewsArticles() {
  try {
    // Step 1: Run the test
    const { stdout: testOutput } = await execAsync('npx playwright test tests/sortedArticles.spec.js');
    console.log(testOutput);

    // Step 2: Open the test report after the first is complete
    const { stdout: reportOutput } = await execAsync('npx playwright show-report');
    console.log(reportOutput);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

(async () => {
  await sortHackerNewsArticles();
})();
