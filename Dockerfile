FROM node:12-alpine
WORKDIR /nft-solana
COPY package.json package-lock.json ./
RUN npm install
COPY . .
WORKDIR /nft-solana/app
CMD ["npm" "install" "&&", "npm", "run", "build"]
WORKDIR /nft-solana
CMD ["npm", "run", "start"]