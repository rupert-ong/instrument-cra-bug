# Cypress-io/instrument-cra issue

Repo to illustrate issue concerning nyc configuration exclude setting being ignored [Issue 188](https://github.com/cypress-io/instrument-cra/issues/188).

`nyc` property is defined in the `package.json` file.

```json
{
  "nyc": {
    "reporter": ["text", "json-summary", "html"],
    "report-dir": "./reports/coverage",
    "exclude": ["src/serviceWorker.js", "src/reportWebVitals.js"]
  }
}
```

Both `reporter` and `report-dir` are respected, but `exclude` is not when tests are run using `npm run test:e2e` or `npm run test:e2e:open`. The generated reports `index.html` and `coverage-summary.json` in `reports/coverage` show the excluded files, as does the text output in the terminal.

As mentioned by [@raphaelmatori](https://github.com/raphaelmatori) who opened the issue, any `npx nyc --report=text` or `npx nyc report --reporter=lcov` does respect the `exclude` property.

### Text report

![Text report in terminal](docs/assets/text-report.png?raw=true "Text report")

### HTML report

![HTML report](docs/assets/html-report.png?raw=true "HTML report")

### npx nyc --report=text

![NYC text report](docs/assets/npx-nyc-report-text.png?raw=true "NYC text report")

### npx nyc report --reporter=lcov

![NYC LCOV report](docs/assets/npx-nyc-report-reporter-lcov.png?raw=true "NYC LCOV report")

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test:e2e`

Runs Cypress in headless mode

### `npm run test:e2e:open`

Runs Cypress test runner
