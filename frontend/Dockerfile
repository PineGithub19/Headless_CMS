# Use the latest LTS version of Node.js
# Use a Debian-based Node image (much more stable for Rollup/Vite)
FROM node:22.17.0-bookworm
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .
 
# Expose the port your app runs on
EXPOSE 5173

# Enable polling (important for live reload in Docker)
ENV CHOKIDAR_USEPOLLING=true
 
# Define the command to run your app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]