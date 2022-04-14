const puppeteer = require("puppeteer");

let page;
console.log("before");

const browserOpenPromise = puppeteer.launch({
     headless : false,
     slowMo : true,
     defaultViewport : null,
     args: ["--start-maximized"]
    }); //4
browserOpenPromise
      .then(function(browser){
          //currently opened tabs
          //this will open a blank tab in chromium 
          const pageArrPromise = browser.pages();
          return pageArrPromise;
      }).then(function (browserPages){
          // this will land us on google.com
          page = browserPages[0];
          let gotoPromise = page.goto("https://www.google.com/");
          return gotoPromise;
      }).then(function(){
          // waiting for element to appear on the page
          let elementWaitPromise = page.waitForSelector("input[type='text']" , {visible : true});
          return elementWaitPromise;
      }).then(function(){
          //type any element on that page -> selector
          let keysWillBeSendPromise = page.type("input[type='text']" , "krishna");
          return keysWillBeSendPromise;
      }).then(function(){
          //page.keyborad to type special characters
          let enterWillBePressed = page.keyboard.press("Enter");
          return enterWillBePressed;
      }).then(function(){
        // waiting for element to appear on the page
        let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md" , {visible : true});
        return elementWaitPromise;
      }).then(function(){
        //will click on the first link
        let linkWillBeClicked = page.click("h3.LC20lb.MBeuO.DKV0Md");
        return linkWillBeClicked;
      }).then(function(){
        let elementWaitPromise = page.waitForSelector("img[data-file-height='1536']" , {visible : true});
        return elementWaitPromise;
      }).then(function(){
          //will click on krishna image
          let imageWillbeClicked = page.click("img[data-file-height='1536']" );
          return imageWillbeClicked;
      }).catch(function(err){
          console.log(err);
      })
      


console.log("after");
