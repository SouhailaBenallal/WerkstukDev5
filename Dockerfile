FROM node as builer

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install 

COPY . /usr/src/app

EXPOSE 3020 

CMD ["npm", "start"]