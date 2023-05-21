FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]

# docker build -f Dockerfile -t angular .
# docker run -p 4200:4200 -v /app/node_modules -v "/home/anderson/dev/alura/angular/memoteca/02_module_fluxo_de_dadosos/web:/app" angular
