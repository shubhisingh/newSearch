# Base image
FROM node:16

# Set working directory
WORKDIR /new-app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the project files
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
