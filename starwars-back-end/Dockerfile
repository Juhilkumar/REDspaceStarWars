FROM node:12.16.3-alpine as build

# Create an app directory in the docker
WORKDIR /app

# Copy the package.json and package-lock.json. 
COPY package*.json ./

# Install production dependencies.
RUN npm install 

# Copy local code to the container image.
COPY . ./

# Run the server
EXPOSE 8080
CMD [ "node", "index.js" ]