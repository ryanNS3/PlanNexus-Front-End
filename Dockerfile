# Estágio de construção
FROM node:20-alpine AS builder

# Define a pasta onde os comandos seguintes serão executados
WORKDIR /frontend

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala as dependências antes de copiar o resto dos arquivos
RUN npm install --frozen-lockfile

# Copia o restante do código
COPY . .

# Executa o comando de construção do projeto
RUN npm run build

# Estágio de produção
FROM nginx:1.26-alpine

# Remove o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração nginx.conf para a pasta de configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copia os arquivos compilados da etapa de construção para a pasta html do Nginx
COPY --from=builder /frontend/dist /usr/share/nginx/html

# Expõe a porta 80 para acessar o servidor Nginx
EXPOSE 80
