# unload-testing

[![Build Status](https://travis-ci.org/mbutki/unload-testing.svg?branch=master)](https://travis-ci.org/mbutki/unload-testing)

Testing different events for signaling a page unload

- public/index.html: Contains examples of visibilitychange, pagehide, unload, beforeunload, which you can manually play around with.
- public/empty.html: Used by aceptance tests to automatically confirm the workings of thos same event listeners.

## Chrome-Headless Automated Testing Results

  Closing tab
    ✓ should post on window.onbeforeunload (1086ms)
    ✓ should post on window.onunload (1039ms)
    ✓ should post on window.onpagehide (1038ms)
    ✓ should post on window.addEventListener('beforeunload' (1036ms)
    ✓ should post on window.addEventListener('unload' (1039ms)
    ✓ should post on document.addEventListener('visibilitychange' (1036ms)
    ✓ should post on window.addEventListener('pagehide' (1038ms)

  Navigating tab
    ✓ should post on window.onbeforeunload (1048ms)
    ✓ should NOT post on window.onunload (1058ms)
    ✓ should NOT post on window.onpagehide (1051ms)
    ✓ should post on window.addEventListener('beforeunload' (1052ms)
    ✓ should NOT post on window.addEventListener('unload' (1050ms)
    ✓ should NOT post on document.addEventListener('visibilitychange' (1058ms)
    ✓ should NOT post on window.addEventListener('pagehide' (1067ms)
    

## Manual Testing Results
### Firefox
Navigate tab to different website
  1. window.onbeforeunload

Close tab
  1. window.onbeforeunload

### Safari
Navigate tab to different website
  1. window.onbeforeunload
  2. window.onpagehide

Close tab
  1. window.onbeforeunload
