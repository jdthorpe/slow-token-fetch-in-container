FROM node:16

RUN apt-get update \
    && apt-get install ca-certificates curl apt-transport-https lsb-release gnupg  -y

RUN curl -sL https://packages.microsoft.com/keys/microsoft.asc | \
    gpg --dearmor | \
    tee /etc/apt/trusted.gpg.d/microsoft.gpg > /dev/null

RUN AZ_REPO=$(lsb_release -cs) \
    && echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | \
    tee /etc/apt/sources.list.d/azure-cli.list

RUN apt-get update && \
    apt-get install azure-cli=2.29.2-1~buster

CMD [ "node", "index.js" ]