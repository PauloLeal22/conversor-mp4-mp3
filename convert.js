import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs'; 

// Pasta de entrada e saída
const inputFolder = './mp4/part1';
const outputFolder = './mp3';

// Cria a pasta de saída se não existir
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

// Lê os arquivos da pasta de entrada 
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error(`Erro ao ler a pasta: ${err.message}`);
        return;
    }

    // Filtra apenas os arquivos .mp4
    const mp4Files = files.filter(file => path.extname(file).toLowerCase() === '.mp4');

    if (mp4Files.length === 0) {
        console.log('Nenhum arquivo MP4 encontrado.');
        return;
    }

    // Converte cada arquivo MP4 para MP3
    mp4Files.forEach(file => {
        const inputFile = path.join(inputFolder, file);
        const outputFile = path.join(outputFolder, path.basename(file, '.mp4') + '.mp3');

        console.log(`Convertendo: ${file} -> ${outputFile}`);

        ffmpeg(inputFile)
            .output(outputFile)
            .on('end', () => console.log(`✔ Conversão concluída: ${outputFile}`))
            .on('error', (err) => console.error(`Erro ao converter ${file}: ${err.message}`))
            .run();
    });
});
