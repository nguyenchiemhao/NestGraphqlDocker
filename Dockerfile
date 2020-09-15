FROM node:12.13.0

#app directory
# copy package.json to directory container
COPY package*.json ./
# install dependences
RUN yarn
# coppy code to directory container
COPY . .
# chose port
EXPOSE 3000
# run app
CMD ["yarn", "start"]