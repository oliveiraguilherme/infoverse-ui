#Estágio da Construção
FROM node:20.12.2 as build
#Define o diretório de trabalho dentro do contêiner
WORKDIR /app

#copie os arquivos package.json e package-local.json para o diretório de trabalho
COPY package*.json ./

#Instale as dependências do npm
RUN npm install

#Copie todo o código-fonte da sua aplicação para o diretório de trabalho no contêiner
COPY . .

#Compile a aplicação angular para a produção
RUN npm run build --prod

#Estágio de produção
FROM nginx:alpine

# Remove o arquivo index.html padrão do Nginx
RUN rm /usr/share/nginx/html/index.html

#Copie os arquivos de construção da aplicação Angular para o diretório de conntéudo padrão do Nginx
COPY --from=build /app/dist/infoverse-ui /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

#Expõe a porta 5000 para o mundo exterior
EXPOSE 5000

#Comando para inciar o servidor Nginx em primeiro plano o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]