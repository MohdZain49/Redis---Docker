# Redis Learning Journey

This repository contains small hands-on projects that I built while learning Redis with Node.js. Instead of following only tutorials, I created these mini projects to understand how Redis works in real-world scenarios.

## Projects

### 01. Redis Setup

* Connect Node.js with Redis
* Basic Redis commands (`SET`, `GET`, `DEL`)
* Key expiration (`EXPIRE`, `TTL`)

### 02. Site Banner Cache

* Cache banner data
* Implement cache expiration using TTL
* Manual cache invalidation

### 03. Login OTP

* Generate and store OTPs
* OTP verification
* Automatic expiration using Redis

### 04. User Profile Cache (JSON vs Hash)

* Store user data as JSON strings
* Store the same data using Redis Hashes
* Compare both approaches and understand their use cases

## Tech Stack

* Node.js
* Redis
* Docker
* JavaScript

## Getting Started

### Start Redis

```bash
docker compose up -d
```

### Run any project

```bash
cd 01-redis-setup
npm install
npm start
```

Repeat the same steps for the other folders.

## What I Learned

* Connecting Node.js with Redis
* Redis data types (Strings & Hashes)
* Caching strategies
* TTL and automatic key expiration
* OTP implementation with Redis
* Cache invalidation
* Choosing between JSON and Hash storage

## Future Plans

I will continue adding more Redis examples, including:

* Pub/Sub
* Streams
* Sorted Sets
* Rate Limiting
* Distributed Locks
* Session Management

This repository will grow as I continue learning Redis.
