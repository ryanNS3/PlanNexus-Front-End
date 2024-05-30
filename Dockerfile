# Usa a imagem base menor e mais segura
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

# Muda para a imagem Nginx
FROM nginx:1.21.0

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração nginx.conf para o diretório de configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copia o arquivo .env para o diretório de configuração do Nginx
COPY .env /etc/nginx/.env

# Copia o script de inicialização start.sh para o diretório de binários locais
COPY nginx/start.sh /usr/local/bin/start.sh

# Torna o script start.sh executável
RUN chmod +x /usr/local/bin/start.sh

# Copia os arquivos compilados da etapa "builder" para o diretório de HTML do Nginx
COPY --from=builder /frontend/dist /usr/share/nginx/html

# Expõe a porta 80 para acessar o servidor Nginx
EXPOSE 80

# Comando para iniciar o servidor Nginx usando o script start.sh
CMD ["start.sh"]
