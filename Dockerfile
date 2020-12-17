FROM node:latest
COPY . /project/koa-mongoose
WORKDIR /project/koa-mongoose
RUN npm install pm2 -g
RUN npm install
EXPOSE 8088

ENTRYPOINT ["npm", "run"]
CMD ["pro"]