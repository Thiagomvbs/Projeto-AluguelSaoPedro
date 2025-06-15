FROM node:18-slim AS build
WORKDIR /app 

ENV VITE_URL=$VITE_URL
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
