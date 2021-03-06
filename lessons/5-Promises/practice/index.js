var promise = require('bluebird');

// 1. Export an object with two methods load, and loadMany
// 2. load should attempt to load an Image and return a promise when it
//    - resolves return an HTMLImageElement 
//    - rejects return the url that failed
// 3. loadMany should accept an array of image urls that will be loaded. loadMany should return a 
//    promise that always resolves. When it resolves it should return an Array. The Array should
//    contain HTMLImageElement's when the images load. When the image fails to load null should be
//    returned. So for instance if we did:
//    
//    loadMany(['someImageWhichWillNeverLoad.jpg', 'someImageWhichWillLoad.jpg'])
//    .then( function(images) {
//      console.log(images[ 0 ]); // null
//      console.log(images[ 1 ]); // HTMLImageElement
//    });
module.exports = {

  load: function(url) {
    // return a promise here
  },

  loadMany: function(urls) {
    // return a promise here
  }
};