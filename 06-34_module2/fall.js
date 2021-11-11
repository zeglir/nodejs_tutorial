let Season = require('./season');
let Fall = class extends Season {
  constructor(desc) {
    super(desc);
  }

  echo () {
    super.introduce();
  }

  introduce() {
    console.log(`The 3rd season. ${this.desc}`);
  }
};

module.exports = Fall;