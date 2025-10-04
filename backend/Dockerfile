# Use Node.js LTS version
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the backend
CMD ["node", "app.js"]