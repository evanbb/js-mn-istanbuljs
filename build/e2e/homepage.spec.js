import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

jest.setTimeout(60000);

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 500
  });
  page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', req => {
    const requestUrl = req.url();
    const indexOfStaticJs = requestUrl.indexOf('/static/js/');
    const isForStaticJs = indexOfStaticJs !== -1;

    if (isForStaticJs) {
      req.respond({
        status: 200,
        contentType: 'application/json',
        body: fs.readFileSync(path.join(
          process.cwd(),
          requestUrl.substring(indexOfStaticJs).replace('/static/js/', '/static-instrumented/js/')
        ))
      });
    } else {
      req.continue();
    }
  });
});

afterAll(async () => {
  const coverageData = await page.evaluate('window.__coverage__')

  fs.writeFileSync(
    path.join(process.cwd(), 'e2e-coverage.json'),
    JSON.stringify(coverageData),
    {
      encoding: 'utf-8'
    }
  )

  await browser.close();
});

it('displays a beautiful react logo', async () => {
  await page.goto('http://localhost:3000');

  const logo = await page.$('img.App-logo');

  expect(logo).toBeTruthy();
});

it('changes text after clicking... sometimes...', async () => {
  await page.goto('http://localhost:3000');

  const button = await page.$('button');
  const text = await page.evaluate(() =>
    document.querySelector('button').innerText);

  expect(text).toBe('click me!');

  await button.click();

  const newText = await page.evaluate(() =>
    document.querySelector('button').innerText);

  expect(newText === 'click me!' || newText === 'clicked!').toBeTruthy();
});
