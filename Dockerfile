FROM node:23-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV NEXT_PUBLIC_API_URL=http://localhost:4000

EXPOSE 3000

CMD ["npm", "run", "dev"]
