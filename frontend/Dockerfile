# base image
FROM node:16-alpine

# set working directory
WORKDIR .

# install app dependencies
COPY ./package.json ./

RUN yarn install
#
COPY . .

# build react app
RUN yarn build

# expose port
EXPOSE 3000

# start app
CMD ["yarn", "start"]