FROM node:slim

LABEL value="todiez"

WORKDIR /app


# copy code, install npm dependencies
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install
EXPOSE 3000
ENTRYPOINT node index.js
