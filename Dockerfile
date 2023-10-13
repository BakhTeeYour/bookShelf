FROM node:18-alpine
WORKDIR /opt/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]