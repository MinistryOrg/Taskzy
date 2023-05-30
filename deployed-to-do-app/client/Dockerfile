# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install react-cookie
RUN npm install react-cookie

# Copy the client code
COPY . .

# Expose the necessary port
EXPOSE 3000

# Start the client application
CMD ["npm", "start"]
