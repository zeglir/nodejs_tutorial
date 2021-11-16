const {Writable} = require('stream');

const CustomWritableStream = class extends Writable {
  constructor(options) {
    super(options || {decodeStrings : true});
  }

  // 　chunk：書き込むべきデータ。デフォルトでは Bufferクラス になっているので、文字列で扱うには変換が必要。
  // 　encoding：chunk のエンコーディング。Bufferクラスの場合は "buffer" となっている。
  // 　done：書き込みが完了したときに呼ぶべきコールバック関数
  _write(chunk, encoding, done) {

    // ・Bufferとして受け取った chunk を文字列に変換する場合は、
    // 　　buffer.toString(encoding)
    // 　　※encoding には、this._writableState.defaultEncoding を指定する
    // 　　options.decodeStrings = true
    // 　　※Writable自身のoptionの設定を変更する。
    // 　のいずれかを行う。
    let txt = "";
    if (encoding === "buffer") {
      txt = chunk.toString(this._writableState.defaultEncoding);
    }

    // 処理が終わったらコールバック done(); を呼ぶ。
    // エラーが発生した場合は、done(error); でエラーをコールバックの引数に渡す。
    try {
      console.log(txt);
    } catch(err) {
      done(err);
      return;
    }
    done(); 
  }
};

module.exports = CustomWritableStream;