FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# COPY .env ./

RUN npm run build

EXPOSE 5001

CMD ["npm", "run", "start:prod"]