const fs = require("fs");

function main() {
  fs.readdirSync("./publish/images").forEach((file) => {
    const filename = file.replace(/-\w+.\w+$/, "");
    const extention = file.split(".")[1];
    const toName = `${filename}.${extention}`;

    fs.renameSync(
      `./publish/images/${file}`,
      `./publish/images/${toName}`
    );
    // シンボリックリンクを作成
    fs.symlinkSync(
      `../images/${toName}`,
      `./publish/images/${file}`
    );
  });
}
main();
