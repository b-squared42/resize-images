const sharp = require('sharp');
const fs = require('fs');


const inputPath = "images/orig/";
const outputPath = "images/thumbnails/";


const files = fs.readdirSync(inputPath);
for (let i = 0; i < files.length; i++) {
  const parts = files[i].split(".");
  const extension = parts[parts.length - 1];
  const filename = parts.slice(0, parts.length - 1).join(".");

  const fullInputName = inputPath + filename + "." + extension;
  const fullOutputName = outputPath + filename + "-min." + extension;

  sharp(fullInputName)
  .resize(600)
  .toFile(fullOutputName, (err, info) => {
    if (err) console.log(err);
    else console.log("converted " + fullInputName + " successfully");
  });

}


