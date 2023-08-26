# Estágio de desenvolvimento
FROM node:14 AS development

WORKDIR /app

# Copia apenas os arquivos necessários para aproveitar o cache de camadas do Docker
COPY package*.json ./
RUN npm install

# Instala o pacote "vite" globalmente no contêiner
RUN npm install -g vite

# Copia todos os arquivos do projeto
COPY . .

# Executa o comando para iniciar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]

# Estágio de produção
FROM development AS production

# Executa o comando para fazer o build da aplicação usando o Vite
RUN npm run build

# Estágio final para servir os arquivos com o Nginx
FROM nginx:alpine AS final

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os arquivos do projeto da etapa de produção para o diretório padrão do Nginx
COPY --from=production /app/dist /usr/share/nginx/html

EXPOSE 80

# Comando para iniciar o servidor Nginx em modo daemon
CMD ["nginx", "-g", "daemon off;"]