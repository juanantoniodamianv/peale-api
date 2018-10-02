# Node JS LTS version, Jul 4th 2018
FROM keymetrics/pm2:latest-alpine	

LABEL maintainer="https://ballastlane.com/"

ENV SCRIPT start

# Go to /var/node
WORKDIR /var/node

# Copy package.json and package-lock.json to current working directory
COPY package*.json ./

# Run the application
CMD ["sh", "-c", "npm $SCRIPT"]

# Expose backend default port
EXPOSE 1337
