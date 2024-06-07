# Estágio de construção
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /frontend

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências antes de copiar o resto dos arquivos
RUN npm install

# Copia o restante do código
COPY . .

# Executa o comando de construção do projeto
RUN npm run build

# Estágio de produção
FROM nginx:1.26.1-alpine

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração nginx.conf para o diretório de configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copia os arquivos compilados da etapa "builder" para o diretório de HTML do Nginx
COPY --from=builder /frontend/dist /usr/share/nginx/html

# Expõe a porta 80 para acessar o servidor Nginx
EXPOSE 80
