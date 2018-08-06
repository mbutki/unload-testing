# unload-testing

[![Build Status](https://travis-ci.org/mbutki/unload-testing.svg?branch=master)](https://travis-ci.org/mbutki/unload-testing)

Testing different events for signaling a page unload

- public/index.html: Contains examples of visibilitychange, pagehide, unload, beforeunload, which you can manually play around with.
- public/empty.html: Used by aceptance tests to automatically confirm the workings of thos same event listeners.

## Chrome-Headless Automated Testing Results

  Closing tab
  
    ✓ should post on window.onbeforeunload
    
    ✓ should post on window.onunload
    
    ✓ should post on window.onpagehide
    
    ✓ should post on visibilitychange event listener
    
    ✓ should NOT post on beforeunload event listener
    
    ✓ should NOT post on unload event listener
    
    ✓ should NOT post on pagehide event listener
    

  Navigating tab
  
    ✓ should post on window.onbeforeunload
    
    ✓ should NOT post on window.onunload (Stable local [Mac]; Flaky on Travis [Linux])
    
    ✓ should NOT post on window.onpagehide (Stable local [Mac]; Flaky on Travis [Linux])
    
    ✓ should NOT post on visibilitychange event listener
    
    ✓ should NOT post on beforeunload event listener
    
    ✓ should NOT post on unload event listener
    
    ✓ should NOT post on pagehide event listener
    

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
