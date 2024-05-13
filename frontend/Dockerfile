# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY app/package.json ./

#COPY yarn.lock ./
RUN yarn install
#
COPY app .

# build react app
RUN yarn build

# expose port
EXPOSE 3000

# start app
CMD ["yarn", "start"]