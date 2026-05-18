# Dockerfile para a aplicação Node.js
FROM node:20-alpine

# Criar o diretório da aplicação
WORKDIR /usr/src/app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o Express escuta (definida no seu server.js como 3000 por padrão)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "server.js"]