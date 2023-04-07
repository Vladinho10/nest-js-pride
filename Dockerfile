# to run the app in container using local postgres, run the following commands
# 1. build the image
# docker build -t nest_js_pride_img .
# 2. create the container from image
# docker run --name nest_js_pride_cont -e DB_PORT=5432 -e DB_HOST=docker.for.mac.host.internal -p 5001:5000 -d nest_js_pride_img

FROM node:16.16-alpine

# Create app directory
WORKDIR /pride-v

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# run node index.js in container
CMD [ "npm", "start" ]
