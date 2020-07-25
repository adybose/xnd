#!/usr/bin/env bash

gunicorn --certfile /etc/letsencrypt/live/xnd.money/fullchain.pem --keyfile /etc/letsencrypt/live/xnd.money/privkey.pem -b 0.0.0.0:9000 app:app
