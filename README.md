# NONALCHOLIC

A small and fun KAIST personality type test project

## Development

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
1. Go to the docker-compose.yml in the root.
2. Use Dockerfile.prod in client-build-dockerfile.
3. Run below commands.
```bash
cd path/to/repository
docker-compose build
docker-compose up
```
