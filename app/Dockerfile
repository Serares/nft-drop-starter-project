FROM node:12-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]