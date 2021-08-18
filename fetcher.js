const request = require('request');
const fs = require('fs');


// let downlaoded = 0;
// request.get(url).on('data', (chunck) => {
//   downlaoded += chunck.length;
// });

const fetcher = function(url, path) {

  request.get({url, method: 'HEDA'}, (error, response, body) => {

    fs.writeFile(path, body, (error) => {
      if (error) {
        console.log('Failed to write to file');
        return;
      }
      
      const downloaded = response.headers['content-length'];
      // const downloaded1 = body.length;
      console.log(`Downloaded and saved ${downloaded} bytes to ${path}`);
    });
  });
};

const url = process.argv[2];
const path = process.argv[3];
fetcher(url, path);