FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash curl && \
    curl https://raw.githubusercontent.com/eficode/wait-for/v2.1.3/wait-for --output /usr/bin/wait-for && \
    chmod +x /usr/bin/wait-for

RUN npm install -g @nestjs/cli@8.0.0

#non-root === seu usuario
USER node 

WORKDIR /home/node/app