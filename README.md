# seal-profiling

[![CircleCI](https://circleci.com/gh/sealsystems/seal-profiling.svg?style=svg)](https://circleci.com/gh/sealsystems/seal-profiling)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/10xi1t1qtjwaaqa9?svg=true)](https://ci.appveyor.com/project/Plossys/seal-profiling)

seal-profiling captures profiling data.

## Installation

```bash
$ npm install seal-profiling
```

## Quick Start

First you need to integrate seal-profiling into your application.

```javascript
const profiling = require('seal-profiling');
```

It will capture the CPU usage and memory consumption once per minute.

To gather custom values, call `noteValue` with a key and value pair.

```javascript
profiling.noteValue('foo', 23);
```

## Activate profiling

By default, profiling is disabled. To enable it, provide the host and the port of a running [StatsD](https://github.com/etsy/statsd) server using the `STATSD_URL` environment variable.

```bash
export STATSD_URL=udp://localhost:8125
```

 In order to distinguish between different apps, each running instance generates a random UUID and includes it in the path of the keys sent to the StatsD server. To provide a fix identifier, set the `SERVICE_NAME` environment variable.

```bash
export SERVICE_NAME=MyService
```

## Collecting the data

To actually collect profiling data, you need to start a StatsD server. For development purposes, simply run:

```bash
docker run -d --name statsd -p 80:80 -p 2003:2003 -p 8125:8125/udp hopsoft/graphite-statsd
```

You can access the server's web ui via port 80 of your Docker host, e.g. http://localhost/.

To stop the StatsD container again, type:

```bash
docker stop statsd
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```bash
$ bot
```
