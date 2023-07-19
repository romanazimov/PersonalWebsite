# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Set environment variable to production
ENV NODE_ENV=production

# Expose the port that the React app will run on (change 3000 to your desired port)
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
