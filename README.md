# NGINX-REVERSE-PROXY

An NGINX reverse proxy routing requests to three small Express API services, orchestrated with Docker Compose.

## About The Project

Three minimal Express APIs (users, posts, comments), each listening on port 3000 inside its own container, with an NGINX container in front routing `/api/users`, `/api/posts` and `/api/comments` to the matching service.

### Built With

- NGINX (reverse proxy, `proxy.conf`)
- Node.js + Express + TypeScript (the three APIs)
- Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Installation

```sh
docker compose up --build
```

### Usage

The proxy listens on port 80:

```sh
curl http://localhost/api/users
curl http://localhost/api/posts
curl http://localhost/api/comments
```

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits
