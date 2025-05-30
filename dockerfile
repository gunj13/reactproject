# Stage 1: Build the React app
FROM node:18 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install -g vite@latest  # Ensure Vite is up to date
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
