# Dockerfile for ReactJS
FROM node:18-alpine AS dependencies

WORKDIR /app

# install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# copy all files
COPY . . 

# build the app

#  open comunication ports
EXPOSE 5173
ENV PORT 5173

# start the aplication en vite, serve the app
CMD ["npm", "run", "dev"]

