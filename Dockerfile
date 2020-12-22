FROM node:latest
ENV NODE_ENV=production
ENV HOST 0.0.0.0
COPY . /project/koa-mongoose
WORKDIR /project/koa-mongoose
RUN npm install pm2 -g
RUN npm install
EXPOSE 8088

CMD ["pm2-runtime", "ecosystem.config.js"]
# ENTRYPOINT ["npm", "run"]
# CMD ["pro"]