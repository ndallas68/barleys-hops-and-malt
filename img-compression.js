import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import { promises as fsPromises } from 'fs';

(async () => {
    const sourceFolderPath = 'public/images';
    const destinationFolderPath = 'public/optimized-images';

    try {
        const files = await fsPromises.readdir(sourceFolderPath);
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
        console.log(`Number of images in ${sourceFolderPath}: ${imageFiles.length}`);
    } catch (error) {
        console.error('Error reading folder:', error);
    }


    const files = await imagemin([`${sourceFolderPath}/*.{jpg,png}`], {
        destination: destinationFolderPath,
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log(`Optimized ${files.length} images.`);
})();
