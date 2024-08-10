import fs from 'fs';
import path from 'path';

const directory = path.join(process.cwd(), 'Build/assets');

fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        if (file.startsWith('_')) {
            const oldPath = path.join(directory, file);
            const newPath = path.join(directory, file.slice(1));

            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                console.log(`Renamed: ${file} to ${file.slice(1)}`);
            });
        }
    });
});

