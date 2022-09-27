# Blog

## Try It

```bash
docker run --detach --publish 5432:5432 -e POSTGRES_PASSWORD=postgres --name 'nexus-schema-plugin-prisma-blog' postgres:10.12
```

```bash
yarn -s prisma generate
yarn -s prisma migrate reset --preview-feature
```

```bash
yarn && yarn dev
```

## Prisma Commands

### Adding new entry to migration

```bash
npx prisma migrate dev --name added_job_title

```

## Quiries

### Mutation - EnRoll Vehicles in Routes

Enroll Vehicles in Routes

```json
mutation {
  updateOneRoutes(where: { id: "cl7pjqo050044v76wczwam5jo" }, data: {
    Vehicles:{
      connect:{id:"cl7pjqnxg0021v76weeabpwlc"}
    }
  }){
    id
    name
  }
}

```

### Mutation - Create Route

```json
mutation{
  createOneRoutes(data:{
    name:"Ring road 1",
    description:"Ring road from a to b",
    location_gps_start:"-84.5905, -62.85885",
    location_name_start:"a",
    location_gps_end:"-84.5905, -62.85885",
    location_name_end: "b",
    total_distance: 100,
  }){
    id
    name
  }
}

```

### Query - Users

```json
query{
  users(where:{}){
    id
    name
    userType
    status
  }
}

```

### Query - Routes

```json
query{
  routes(where:{}){
    id,
    name,
    location_name_start
    location_gps_end
    Vehicles{
      id
      name
    }
  }
}

```

### Query - Vehicles

```json
query{
  vehicles(where:{}){
    id
    license_plate
    route_id
  }
}

```
