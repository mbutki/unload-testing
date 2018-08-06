import puppeteer from 'puppeteer';
import { expect } from 'chai';
import {
  listen,
  close,
  getCount,
  reset
} from '../test-server/index.js';
import {
  windowOnbeforeunload,
  windowOnunload,
  windowOnpagehide,
  visibilitychange,
  beforeunload,
  unload,
  pagehide
} from './utils.js';

let browser, page;
const postOnlyUrl = 'http://127.0.0.1:8081/postOnly.html';

function wait(time) {
  return new Promise((r) => {
    setTimeout(r, time);
  });
}

async function loadThenClose({ eventListener, expectPost }) {
  await page.goto(postOnlyUrl);
  await page.evaluate(eventListener);
  
  await page.close({runBeforeUnload: true});
  await wait(1000);

  const count = getCount();
  const sawPost = count === 1 ? true : false;
  expect(sawPost).to.equal(expectPost, `Actual post count was ${count}`);
}

describe('Closing tab', () => {
  before(async () => {
    await listen();
  })

  after (async () => {
    await close();
  })

  beforeEach (async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  })

  afterEach (async () => {
    reset();
    await browser.close();
  })

  // Correct ways to listen for tab close //
  it('should post on window.onbeforeunload', async () => {
    return loadThenClose({
      eventListener: windowOnbeforeunload,
      expectPost: true
    });
  });

  it('should post on window.onunload', async () => {
    return loadThenClose({
      eventListener: windowOnunload,
      expectPost: true
    });
  });

  it('should post on window.onpagehide', async () => {
    return loadThenClose({
      eventListener: windowOnpagehide,
      expectPost: true
    });
  });

  it('should post on visibilitychange event listener', async () => {
    return loadThenClose({
      eventListener: visibilitychange,
      expectPost: true
    });
  });

  // Incorrect ways to listen for tab close //
  it('should NOT post on beforeunload event listener', async () => {
    return loadThenClose({
      eventListener: beforeunload,
      expectPost: false
    });
  });

  it('should NOT post on unload event listener', async () => {
    return loadThenClose({
      eventListener: unload,
      expectPost: false
    });
  });

  it('should NOT post on pagehide event listener', async () => {
    return loadThenClose({
      eventListener: pagehide,
      expectPost: false
    });
  });
});