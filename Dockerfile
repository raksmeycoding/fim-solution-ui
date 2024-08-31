# State 1, Building Stage
FROM node:20 as builder


# define our docker application dicrectory
WORKDIR /app


# Copy package.json and package-lock.json first to leverage Docker's cache
COPY package.json package-lock.json ./


# Install necesary dependencies 
RUN npm install 


# Copy the rest of application code
COPY . .


# Build the application
RUN npm run build


# Stage 2, Serve

# Use a lightweight web server to serve the static files
FROM nginx:alpine


# Coppy build filees from the build stage
COPY --from=builder /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
