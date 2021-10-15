# Base image (as builder)
FROM node:12.4.0-alpine 

# Set working directory 
WORKDIR /app 

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH 

# Install and Cache app dependencies
COPY package.json /app/package.json 
RUN npm install --silent 
RUN npm install react-scripts@3.0.1 -g --silent 

# Start app 
CMD ["npm", "start"]