import path from 'path';
import { fileURLToPath } from 'url';
import {writeFile} from 'node:fs/promises';

const create = async () => {

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = './files/fresh.txt';
    const absoluteFilePath = path.join(__dirname, filePath);

    const fileContent = 'I am fresh and young';
    const errorMessage = new Error('FS operation failed'); 
    
    try {
        await writeFile(absoluteFilePath, fileContent, { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw errorMessage;            
        } else {
            console.error(error.message);
        }
    } 
};

await create();