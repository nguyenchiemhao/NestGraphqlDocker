FROM node:12.13.0

WORKDIR /usr/app
#app directory
# copy package.json to directory container
COPY package*.json ./
COPY tsconfig.json tsconfig.json
# install dependences
RUN yarn
# coppy code to directory container
COPY . .

RUN yarn build

WORKDIR ./dist

# chose port
EXPOSE 3000
# run app
CMD yarn start:dev