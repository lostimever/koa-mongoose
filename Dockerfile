FROM node:12.16.1
ENV NODE_ENV=production
ENV HOST 0.0.0.0
COPY . /project/koa-mongoose
WORKDIR /project/koa-mongoose
RUN yarn global add pm2
RUN yarn install
EXPOSE 8088

CMD ["pm2-runtime", "--json", "ecosystem.config.js"]
# ENTRYPOINT ["npm", "run"]
# CMD ["pro"]