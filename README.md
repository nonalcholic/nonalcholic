# NONALCHOLIC

A small and fun KAIST personality type test project

## Prerequests

- Docker
- Docker Compose

## Development

### Environment Variable Settings

1. Check environment variables in /.env file.
2. Create /client/.env.development file and write like this.

```bash
REACT_APP_IP_ADDRESS=[YOUR IP ADDRESS] # ex. localhost
```

### Database

```bash
cd path/to/repository
cd database
docker-compose up
```

### Backend

```bash
cd path/to/repository
cd server
docker-compose build
docker-compose up
```

### Frontend

```bash
cd path/to/repository
cd client
docker-compose build
docker-compose up
```

### Database + Backend + Frontend

```bash
cd path/to/repository
docker-compose build
docker-compose up
```

## Production

### Environment Variable Settings

1. Check environment variables in /.env file.
2. Create /client/.env.production file and write like this.

```bash
REACT_APP_IP_ADDRESS=[YOUR IP ADDRESS] # ex. 123.45.67.890
```

### Database + Backend + Frontend

1. Go to the docker-compose.yml in the root.
2. Use Dockerfile.prod in client-build-dockerfile.
3. Run below commands.

```bash
cd path/to/repository
docker-compose build
docker-compose up
```
