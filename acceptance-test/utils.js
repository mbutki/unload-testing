
/* eslint-disable no-undef */
export function windowOnbeforeunload() {
  window.onbeforeunload = () => {
    postData();
  }
}

export function windowOnunload() {
  window.onunload = () => {
    postData();
  }
}

export function windowOnpagehide() {
  window.onpagehide = () => {
    postData();
  }
}

export function visibilitychange() {
  document.addEventListener('visibilitychange', () => {
    postData();
  });
}

export function beforeunload() {
  window.addEventListener('beforeunload', () => {
    postData();
  });
}

export function unload() {
  window.addEventListener('unload', () => {
    postData();
  });
}

export function pagehide() {
  window.addEventListener('pagehide', () => {
    postData();
  });
}
/* eslint-enable no-undef */
