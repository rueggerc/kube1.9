FROM node:10
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD node src/index.js
EXPOSE 3000:3000
