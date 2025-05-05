# Stage 1: Build the app
FROM node:lts-alpine3.21 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --force

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
