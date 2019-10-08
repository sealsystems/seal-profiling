'use strict';

const url = require('url');

const getenv = require('getenv');
const uuidv4 = require('uuid/v4');

const statsd = {
  host: url.parse(getenv('STATSD_URL', '')).hostname,
  port: url.parse(getenv('STATSD_URL', '')).port
};

const Stethoskop = require('stethoskop');

const stethoskop = new Stethoskop({
  from: {
    application: getenv('SERVICE_NAME', uuidv4())
  },
  to: statsd,
  enabled: Boolean(statsd.host) && Boolean(statsd.port)
});

module.exports = stethoskop;
