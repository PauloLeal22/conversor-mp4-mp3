# conversor-mp4-mp3
Um programa desenvolvido em Nodejs utilizando a biblioteca fluent-ffmpeg para converter arquivos mp4 em mp3.

## Instalação do ffmpeg
https://ffmpeg.org/download.html

- Extraia os arquivos para uma pasta, como C:\ffmpeg.
- Adicione o caminho C:\ffmpeg\bin ao PATH do Windows:
- Pressione Win + R, digite sysdm.cpl e pressione Enter.
- Vá até Avançado → Variáveis de Ambiente.
- Em Variáveis do sistema, edite Path e adicione C:\ffmpeg\bin.
- Clique em OK e reinicie o terminal.
- Instale as dependências no projeto
```bash
npm install fluent-ffmpeg
```

## Execução
```bash 
node convert.js video.mp4
```


