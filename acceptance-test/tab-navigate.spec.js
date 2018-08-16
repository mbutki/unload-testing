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
const emptyUrl = 'http://127.0.0.1:8081/empty.html';

function wait(time) {
  return new Promise((r) => {
    setTimeout(r, time);
  });
}

async function loadThenNavigate({ eventListener, expectPost }) {
  await page.goto(postOnlyUrl);
  await page.evaluate(eventListener);
  
  await page.goto(emptyUrl);
  await wait(1000);

  const count = getCount();
  const sawPost = count === 1 ? true : false;
  expect(sawPost).to.equal(expectPost, `Actual post count was ${count}`);
}

describe('Navigating tab', () => {
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

  // Correct ways to listen for tab navigate //
  it('should post on window.onbeforeunload', async () => {
    return loadThenNavigate({
      eventListener: windowOnbeforeunload,
      expectPost: true
    });
  });

  // Incorrect ways to listen for tab navigate //
  it('should NOT post on window.onunload', async () => {
    return loadThenNavigate({
      eventListener: windowOnunload,
      expectPost: false
    });
  });

  it('should NOT post on window.onpagehide', async () => {
    return loadThenNavigate({
      eventListener: windowOnpagehide,
      expectPost: false
    });
  });

  it('should post on window.addEventListener(\'beforeunload\'', async () => {
    return loadThenNavigate({
      eventListener: beforeunload,
      expectPost: true
    });
  });

  it('should NOT post on window.addEventListener(\'unload\'', async () => {
    return loadThenNavigate({
      eventListener: unload,
      expectPost: false
    });
  });

  it('should NOT post on document.addEventListener(\'visibilitychange\'', async () => {
    return loadThenNavigate({
      eventListener: visibilitychange,
      expectPost: false
    });
  });

  it('should NOT post on window.addEventListener(\'pagehide\'', async () => {
    return loadThenNavigate({
      eventListener: pagehide,
      expectPost: false
    });
  });
});