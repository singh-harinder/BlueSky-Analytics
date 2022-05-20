FROM node:14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . ./
EXPOSE 5000
CMD ["npm", "start"]
