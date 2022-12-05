FROM node:16
#  wrokdirectroy specify if any
WORKDIR /app
COPY package*.json .

RUN npm install

# first dot means all files from source secnod means to destination
COPY . .  

ENV PORT=5000

EXPOSE  5000

CMD ["node" ,"server.js"]