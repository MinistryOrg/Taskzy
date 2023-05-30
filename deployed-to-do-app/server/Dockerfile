# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code
COPY . .

# Expose the necessary port
EXPOSE 4000

# Start the server application
CMD ["npm", "start"]
