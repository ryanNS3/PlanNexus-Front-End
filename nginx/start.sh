#!/bin/sh

# Carrega variáveis de ambiente do arquivo .env
export $(grep -v '^#' /etc/nginx/.env | xargs)

# Verifica se a variável de ambiente está definida
if [ -z "$VITE_API_URL" ]; then
  echo "Error: VITE_API_URL is not set"
  exit 1
fi

# Substitui variáveis de ambiente no arquivo de configuração Nginx
envsubst '${VITE_API_URL}' < /etc/nginx/conf.d/nginx.conf > /etc/nginx/conf.d/nginx.conf.tmp

# Substitui o arquivo de configuração Nginx com o arquivo temporário
mv /etc/nginx/conf.d/nginx.conf.tmp /etc/nginx/conf.d/nginx.conf

# Inicia o servidor Nginx
nginx -g 'daemon off;'
