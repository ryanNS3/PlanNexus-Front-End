# Usa a imagem base menor e mais segura
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /frontend

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências antes de copiar o resto dos arquivos
RUN npm install

# Define a variável de ambiente e cria o arquivo .env antes do build
ARG VITE_API_URL
RUN echo "VITE_API_URL=${VITE_API_URL}" > .env

# Copia o restante do código
COPY . .

# Executa o comando de construção do projeto
RUN npm run build

# Muda para a imagem Nginx
FROM nginx:1.15.0

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração nginx.conf para o diretório de configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copia os arquivos compilados da etapa "builder" para o diretório de HTML do Nginx
COPY --from=builder /frontend/dist /usr/share/nginx/html

# Expõe a porta 80 para acessar o servidor Nginx
EXPOSE 80
