FROM node:9-alpine

# Install yarn and other dependencies via apk
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /usr/src/app

# Copying package.json and Installing the npm packages 
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

#Exposing port
EXPOSE 3000

CMD [ "npm", "start" ]


