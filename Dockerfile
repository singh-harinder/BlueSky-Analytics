FROM node:14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . ./
EXPOSE 5000
RUN npm run build
CMD ["npm", "start"]