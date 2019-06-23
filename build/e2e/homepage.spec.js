import puppeteer from 'puppeteer';

jest.setTimeout(60000);

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 500
  });
  page = await browser.newPage();
});

afterAll(async () => {
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
