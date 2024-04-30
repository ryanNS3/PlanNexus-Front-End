FROM node:20 AS builder

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.15.0

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --from=builder /frontend/dist /usr/share/nginx/html

EXPOSE 80