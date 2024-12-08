const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const resizeImage = async (imagePath, outputPath, size = 600, quality = 80) => {
  try {
    const metadata = await sharp(imagePath).metadata();
    const isWebP = metadata.format === "webp";
    const needsResize = metadata.width > size || metadata.height > size;
    const needsExtension = metadata.width !== metadata.height;

    if (!needsResize && !needsExtension && isWebP) {
      console.log(
        `Skipping resize for ${imagePath}, dimensions and format are within the target size and format.`
      );
      return false;
    }

    if (needsExtension) {
      console.log(`Extending image: ${imagePath}`);
      const maxSize = Math.max(metadata.width, metadata.height);
      await sharp(imagePath)
        .resize(maxSize, maxSize, {
          fit: sharp.fit.contain,
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .resize(size, size, {
          fit: sharp.fit.cover,
          position: sharp.strategy.entropy,
        })
        .webp({ quality })
        .toFile(outputPath);
      console.log(`Successfully extended and resized image: ${imagePath}`);
      return true;
    }

    console.log(`Resizing image: ${imagePath}`);
    await sharp(imagePath)
      .resize(size, size, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .webp({ quality })
      .toFile(outputPath);
    console.log(`Successfully resized image: ${imagePath}`);
    return true;
  } catch (error) {
    console.error(`Error resizing image ${imagePath}:`, error);
    return false;
  }
};

const renameImage = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file ${oldPath} to ${newPath}:`, err);
    } else {
      console.log(`Successfully renamed file ${oldPath} to ${newPath}`);
    }
  });
};

const resizeImagesInFolder = async (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
      return;
    }

    console.log(`Found ${files.length} files in folder: ${folderPath}`);
    files.forEach(async (filename) => {
      if (filename.match(/\.(png|jpg|jpeg)$/)) {
        const imagePath = path.join(folderPath, filename);
        const resizedImagePath = path.join(
          folderPath,
          `${path.parse(filename).name}-resized.webp`
        );
        const resized = await resizeImage(imagePath, resizedImagePath);
        if (resized) {
          renameImage(
            resizedImagePath,
            path.join(folderPath, `${path.parse(filename).name}.webp`)
          );
        }
      } else {
        console.log(`Skipping non-image file: ${filename}`);
      }
    });
  });
};

const publicFolder = path.join(__dirname, "../public/images");
// console.log(`Starting to resize images in folder: ${publicFolder}`);
resizeImagesInFolder(publicFolder);
