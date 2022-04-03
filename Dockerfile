FROM alpine:3.14
RUN apk add --no-cache nodejs npm

ARG APP_ROOT="/srv"

WORKDIR ${APP_ROOT}

COPY public ${APP_ROOT}/public
COPY src ${APP_ROOT}/src
COPY package.json ${APP_ROOT}
COPY package-lock.json ${APP_ROOT}

RUN npm ic
RUN npm run build

EXPOSE 80

CMD ["npx", "http-server", "/srv/build", "-p", "80"]
