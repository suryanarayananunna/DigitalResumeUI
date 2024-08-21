# Stage 1: Build the Angular application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application (you can change the production flag based on your environment)
RUN npm run build -- --configuration=production

# Stage 2: Serve the Angular app with NGINX
FROM nginx:alpine

# Copy the built Angular app from Stage 1 to the NGINX html directory
COPY --from=build /app/dist/digital-resume-ui /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
