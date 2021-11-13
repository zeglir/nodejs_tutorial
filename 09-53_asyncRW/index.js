const fs = require('fs');
const path = require('path');
const util = require('util');
const fspromise = require('fs/promises');

// 1. ファイルを非同期的に読み込んでコンソール表示する
// 2. 読み込んだファイルを別名で非同期保存する
fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('1&2 : read done.');

  fs.writeFile(path.join(__dirname, 'sample-copied.txt'), data, 'utf-8', (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("1&2 : write done.");
  })
});

// 3. 2で作成したプログラムをPromise化してネストを削減する(async/await使わない)
function readP() {
  let p = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
        console.log("3 : read done.");
      }
    });
  });
  return p;  
};

function writeP(data) {
  let p = new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, 'sample-copied.txt'), data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
        console.log("3 : write done.");
      }
    })
  })
  return p;
};

readP().then((data) => {
  return writeP(data);
}).then(() => {
  console.log("3 : read and write done.");
})
.catch((err) => {
  console.log(err.message);
});

// 3-A. 2で作成したプログラムをutil.promisifyでネストを削減する(async/await使わない)
let readFileP = util.promisify(fs.readFile);
let writeFileP = util.promisify(fs.writeFile);

readFileP(path.join(__dirname, 'sample.txt'), 'utf-8')
.then((data) => {
  console.log("3-A : read done.");
  return writeFileP(path.join(__dirname, 'sample-copied.txt'), data, 'utf-8');
})
.then(() => {
  console.log("3-A : write done.");
})
.catch((err) => {
  console.log(err.message);
});

// 4. 2で作成したプログラムをPromise化してネストを削減する(async/await使う)
let readAP = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let writeAP = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, 'sample-copied.txt'), data, 'utf-8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

(async () => {
  try {
    let data = await readAP();
    console.log("4 : read done.");
    await writeAP(data);
    console.log("4 : write done.");
  } catch(err) {
    console.log(err.message);
  }
})();

// 4-A. 2で作成したプログラムをutil.promisifyでネストを削減する(async/await使う)
let readFileAP = util.promisify(fs.readFile);
let writeFileAP = util.promisify(fs.writeFile);

(async () => {
  try {
    let data = await readFileAP(path.join(__dirname, 'sample.txt'), 'utf-8');
    console.log("4-A : read done.");

    await writeFileAP(path.join(__dirname, 'sample-copied.txt'), data, 'utf-8');  
    console.log("4-A : write done.");
  } catch(err) {
    console.log(err.message);
  }
})();

// 5. 2で作成したプログラムを fs/promises のメソッドでネストを削減する(async/await使う)
(async () => {
  try {
    let data = await fspromise.readFile(path.join(__dirname, 'sample.txt'), 'utf-8');
    console.log("5 : read done.");
    
    await fspromise.writeFile(path.join(__dirname, 'sample-copied.txt'), data, 'utf-8');  
    console.log("5 : write done.");
  } catch(err) {
    console.log(err.message);
  }
})();
