---
title: Aplicaciones
---

# Aplicaciones

Las aplicaciones te permiten identificar y configurar el sistema que quiere hacer uso de los servicios IAM.
Un ejemplo de estas configuraciones es el tiempo de expiración que tendrá el token de acceso.

## Modelo de aplicación

| Propiedad                 | Descripción                                                                                                                                                                                     | Requerido | Tipo                     | Valor por defecto |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------ | ----------------- |
| client_id                 | Id de la aplicación. Único en el contexto de IAM.                                                                                                                                               | si        | string                   | -                 |
| display_name              | Nombre de la aplicación.                                                                                                                                                                        | si        | string                   | -                 |
| description               | Descripción de la aplicación.                                                                                                                                                                   | si        | string                   | -                 |
| mode                      | Modo en que los usuarios se registran en la aplicación. Si es **internal** deben ser previamente inscritos y en el modo **external** la primera vez que el usuario haga login queda registrado. | no        | 'internal' \| 'external' | internal          |
| jwt_expiration_in_minutes | Tiempo de expiración del token en minutos.                                                                                                                                                      | no        | number                   | 60                |
| external_token_validation | Datos requeridos si se desea validar tokens externos a IAM. Muy útil en integraciones nativas de mobile.                                                                                        | no        | Record<string, unknown>  | -                 |

## Servicios CRUD

IAM ofrece diferentes servicios para facilitarte el fácil manejo de tus aplicaciones. Es necesario contar con un [Api Key](./apikeys/index.md) que te permita acceder usando los roles de **applications:read** para obtener las aplicaciones y **applications:write** para crear, actualizar o eliminar las aplicaciones.

> **_NOTA:_** El client_id es utilizado en los servicios para identificar la aplicación.

### Crear aplicación

```bash
curl --request POST \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications \
  --header 'Authorization: apikey ${API_KEY}' \
  --header 'Content-Type: application/json' \
  --data '{
	"client_id": "arcus",
	"display_name": "Arcus",
	"description": "App para eficientar el trabajo de colaboradores en tienda",
	"mode": "internal",
	"jwt_expiration_in_minutes": 60
}'
```

### Actualizar aplicación

```bash
curl --request PUT \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications/arcus \
  --header 'Authorization: apikey ${API_KEY}' \
  --header 'Content-Type: application/json' \
  --data '{
	"display_name": "arcus",
	"description": "App para eficientar el trabajo de colaboradores en tienda",
	"mode": "external",
	"jwt_expiration_in_minutes": 1440
}'
```

### Obtener aplicación

```bash
curl --request GET \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications/arcus \
  --header 'Authorization: apikey ${API_KEY}'
```

### Eliminar aplicación

```bash
curl --request DELETE \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications/arcus \
  --header 'Authorization: apikey ${API_KEY}'
```
