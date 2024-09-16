FROM node:22.6-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000

# run the build command

CMD ["npm", "run", "prod"]

