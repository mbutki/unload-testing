# unload-testing

[![Build Status](https://travis-ci.org/mbutki/unload-testing.svg?branch=master)](https://travis-ci.org/mbutki/unload-testing)

Testing different events for signaling a page unload

- public/index.html: Contains examples of visibilitychange, pagehide, unload, beforeunload, which you can manually play around with.
- public/empty.html: Used by aceptance tests to automatically confirm the workings of thos same event listeners.

## Chrome-Headless Automated Testing Results

  Closing tab
  
    ✓ should post on window.onbeforeunload (5058ms)
    
    ✓ should post on window.onunload (5047ms)
    
    ✓ should post on window.onpagehide (5034ms)
    
    ✓ should post on window.addEventListener('beforeunload' (6709ms)
    
    ✓ should post on window.addEventListener('unload' (5044ms)
    
    ✓ should post on document.addEventListener('visibilitychange' (5043ms)
    
    ✓ should post on window.addEventListener('pagehide' (5043ms)
    
  Navigating tab
  
    ✓ should post on window.onbeforeunload (5049ms)
    
    ✓ should NOT post on window.onunload (5062ms)
    
    ✓ should NOT post on window.onpagehide (5082ms)
    
    ✓ should post on window.addEventListener('beforeunload' (5067ms)
    
    ✓ should NOT post on window.addEventListener('unload' (5046ms)
    
    ✓ should NOT post on document.addEventListener('visibilitychange' (5068ms)
    
    ✓ should NOT post on window.addEventListener('pagehide' (5063ms)

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
