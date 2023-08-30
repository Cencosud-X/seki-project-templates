---
title: Usuarios
---

# Usuarios

La entidad usuario representa la información de los usuarios que consumen tu aplicación. Los datos de usuarios son proveídos inicialmente por el proveedor de identidad.

## Modelo de usuario

| Propiedad  | Descripción                                                                                | Requerido | Tipo     | Valor por defecto |
| ---------- | ------------------------------------------------------------------------------------------ | --------- | -------- | ----------------- |
| identifier | Identificador único del usuario en el contexto de un proveedor                             | si        | string   | -                 |
| provider   | Proveedor utilizado para identificar al usuario. Ejemplo google_gmail, microsoft_saml, etc | si        | string   | -                 |
| name       | Nombre completo                                                                            | si        | string   | -                 |
| avatar     | Url del avatar del usuario                                                                 | no        | string   | -                 |
| email      | Email del usuario                                                                          | si        | string   | -                 |
| locale     | Locale usado por el usuario                                                                | si        | string   | -                 |
| roles      | Roles de acceso                                                                            | si        | string[] | -                 |
| scopes     | Scopes donde puede operar                                                                  | si        | string[] | -                 |

> **_NOTA:_** Si deseas retener información mas detallada de los usuarios debes almacenarlos en tus propios sistemas de almacenamiento.

## Servicios CRUD

IAM ofrece diferentes servicios para facilitarte el fácil manejo de tus usuarios. Es necesario contar con un Api Key que te permita acceder usando los roles de **users:read** para obtener información y **users:write** para crear, actualizar o eliminar.

> **_NOTA:_** La propiedad **"provider"** y **"identifier"** generan un identificador único del usuario.

### Crear usuario

```bash
curl --request POST \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications/${CLIENT_ID}/users \
  --header 'Authorization: apikey ${API_KEY}' \
  --header 'Content-Type: application/json' \
  --data '{
    "avatar": "https://lh3.googleusercontent.com/AAcHTtfoXEUFJ-p0Bi69sOhYXhgN8sgsLgy1xmadTEH6DQ=s96-c",
    "email": "jhon.doe@gmail.com",
    "identifier": "jhon.doe@gmail.com",
    "provider": "google_gmail",
    "locale": "en",
    "name": "Jhon Doe",
    "scopes": [
            "country:chile",
            "store:64",
            "section:frutas_y_verduras"
        ],
    "roles": [
            "operador"
        ]
}
'
```

### Actualizar usuario

```bash
curl --request PUT \
  --url  https://api.cencosudx.xyz/yumi-iam/api/applications/${CLIENT_ID}/users/google_gmail/jhon.doe@gmail.com \
  --header 'Authorization: apikey ${API_KEY}' \
  --header 'Content-Type: application/json' \
  --data '{
    "avatar": "https://lh3.googleusercontent.com/AAcHTtfoXEUFJ-p0Bi69sOhYXhgN8sgsLgy1xmadTEH6DQ=s96-c",
    "email": "jhon.doe@gmail.com",
    "identifier": "jhon.doe@gmail.com",
    "provider": "google_gmail",
    "locale": "en",
    "name": "Jhon Doe",
    "scopes": [
            "country:chile",
            "store:64",
            "section:frutas_y_verduras"
        ],
    "roles": [
            "operador"
        ]
}
'
```

### Obtener usuario

```bash
curl --request GET \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications/${CLIENT_ID}/users/google_gmail/jhon.doe@gmail.com \
  --header 'Authorization: apikey ${API_KEY}'
```

### Eliminar usuario

```bash
curl --request DELETE \
  --url https://api.cencosudx.xyz/yumi-iam/api/applications/${CLIENT_ID}/users/google_gmail/jhon.doe@gmail.com \
  --header 'Authorization: apikey ${API_KEY}'
```
