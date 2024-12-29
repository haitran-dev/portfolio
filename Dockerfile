# Build stage
FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/package.json ./package.json

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080

CMD ["node", "./dist/server/entry.mjs"] 