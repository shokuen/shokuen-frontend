FROM node:14.15.4-buster

RUN apt-get update -y && \
    apt-get install -y \
        git \
        vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
