FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Remove all files except distribution
RUN find -maxdepth 1 ! -name dist ! -name node_modules ! -name . -exec rm -rv {} \;

# CD into the dist directory
WORKDIR /app/dist

# Set NODE_ENV to local
ENV NODE_ENV=local

# Set PORT to 3000
ENV PORT=3000

# Start the application
CMD node .