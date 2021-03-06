define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "Version",
    "group": "API",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "version",
            "description": "<p>Version actual de la API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"version\": \"0.0.1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/index.js",
    "groupTitle": "API",
    "name": "GetApi",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "Subir archivo",
    "group": "Archivos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>Archivo a subir</p> "
          }
        ]
      }
    },
    "description": "<p>Aclaración: Máximo tamaño de archivo: 50 Mb.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>URL del archivo subido a Amazon</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"url\": \"https://unifyargentina.s3-us-west-2.amazonaws.com/56106d1b0b6074091bed5bf8_1444003759_contacto.png\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/files/index.js",
    "groupTitle": "Archivos",
    "name": "PostApiFile",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/file"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/verify/:token",
    "title": "Verificacion de cuenta",
    "group": "Autenticacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de verificacion</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"__v\": 0,\n        \"_id\": \"55c421354037f03842898378\",\n        \"email\": \"90joelmarquez@gmail.com\",\n        \"main_circle\": {\n            \"user\": \"55c421354037f03842898378\",\n            \"name\": \"Main Circle\",\n            \"_id\": \"55c421364037f03842898379\",\n            \"__v\": 0,\n            \"ancestors\": [\n            ]\n        },\n        \"name\": \"Joel Márquez\",\n        \"google\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n        },\n        \"instagram\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11385614_441266499409188_453477140_a.jpg\",\n            \"username\": \"joe__marquez\"\n        },\n        \"twitter\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n            \"username\": \"joelmarquez90\"\n        },\n        \"facebook\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n        },\n        \"valid_local_user\": true,\n        \"verified\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/verify-token/index.js",
    "groupTitle": "Autenticacion",
    "name": "GetAuthVerifyToken",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/verify/:token"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "group": "Autenticacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email\":\"unify.argentina@gmail.com\",\n  \"password\":\"hola1234\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NWJjM2MyN2JmYTU0MGVhMmM0MzJjZGMiLCJpYXQiOjE0MzgzOTk2NDUsImV4cCI6MTQ0MDk5MTY0NX0.lrrs4_S3qZ7roqmJeCr3nNAXxmPURlYhZlUA7IOcn2w\",\n    \"user\": {\n        \"__v\": 0,\n        \"_id\": \"55bc3c27bfa540ea2c432cdc\",\n        \"email\": \"90joelmarquez@gmail.com\",\n        \"main_circle\": {\n            \"user\": \"55bc3c27bfa540ea2c432cdc\",\n            \"name\": \"Main Circle\",\n            \"_id\": \"55bc3c29bfa540ea2c432cdd\",\n            \"__v\": 0,\n            \"ancestors\": [\n            ]\n        },\n        \"name\": \"Joel\",\n        \"google\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n        },\n        \"instagram\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/1209539_349750521886382_2055550828_a.jpg\",\n            \"username\": \"joe__marquez\"\n        },\n        \"twitter\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n            \"username\": \"joelmarquez90\"\n        },\n        \"facebook\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n        },\n        \"valid_local_user\": true,\n        \"verified\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/local/index.js",
    "groupTitle": "Autenticacion",
    "name": "PostAuthLogin",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/recover",
    "title": "Recuperacion de cuenta",
    "group": "Autenticacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email de la cuenta a recuperar</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email\" : \"unify.argentina@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/recovery-password/index.js",
    "groupTitle": "Autenticacion",
    "name": "PostAuthRecover",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/recover"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/signup",
    "title": "Signup",
    "group": "Autenticacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario, debera tener 6 caracteres como minimo</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Tiene que ser igual que el password</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email\":\"unify.argentina@gmail.com\",\n  \"name\":\"Juan Losa\",\n  \"confirm_password\":\"hola1234\",\n  \"password\":\"hola1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NWI4M2VkM2Y0NjAxZmMxMTFhYjcyMWY\",\n    \"user\": {\n        \"main_circle\": {\n            \"__v\": 0,\n            \"user\": \"55b83ed3f4601fc111ab721f\",\n            \"name\": \"Main Circle\",\n            \"_id\": \"55b83ed4f4601fc111ab7220\",\n            \"ancestors\": [\n            ]\n        },\n        \"__v\": 0,\n        \"email\": \"90joelmarquez2@gmail.com\",\n        \"name\": \"Joel\",\n        \"_id\": \"55b83ed3f4601fc111ab721f\",\n        \"valid_local_user\": true,\n        \"verified\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/local/index.js",
    "groupTitle": "Autenticacion",
    "name": "PostAuthSignup",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/signup"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/auth/facebook",
    "title": "Facebook unlink",
    "group": "Autenticacion_Social",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0.akRndKmfCPSRumw8ybquxCjba7MsgfBdK_ZuHINGNNs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/facebook/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "DeleteAuthFacebook",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/facebook"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/auth/google",
    "title": "Google unlink",
    "group": "Autenticacion_Social",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0.akRndKmfCPSRumw8ybquxCjba7MsgfBdK_ZuHINGNNs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/google/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "DeleteAuthGoogle",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/google"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/auth/instagram",
    "title": "Instagram unlink",
    "group": "Autenticacion_Social",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0.akRndKmfCPSRumw8ybquxCjba7MsgfBdK_ZuHINGNNs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/instagram/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "DeleteAuthInstagram",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/instagram"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/auth/twitter",
    "title": "Twitter unlink",
    "group": "Autenticacion_Social",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0.akRndKmfCPSRumw8ybquxCjba7MsgfBdK_ZuHINGNNs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/twitter/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "DeleteAuthTwitter",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/twitter"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/twitter/callback",
    "title": "Twitter login callback",
    "group": "Autenticacion_Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "oauth_token",
            "description": "<p>Oauth token para obtener el request token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "oauth_verifier",
            "description": "<p>Oauth verificador para obtener el request token</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0.akRndKmfCPSRumw8ybquxCjba7MsgfBdK_ZuHINGNNs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/twitter/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "GetAuthTwitterCallback",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/twitter/callback"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/facebook",
    "title": "Facebook login",
    "group": "Autenticacion_Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>Código de autorización de Facebook</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "clientId",
            "description": "<p>Id de la app</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "redirectUri",
            "description": "<p>La uri a la cual se va a redireccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NWI2ZmJhOTczMTkxYTc0MjhkODBjOTQiL\",\n  \"user\": {\n    \"__v\": 0,\n    \"_id\": \"55b6fba973191a7428d80c94\",\n    \"email\": \"90joelmarquez@gmail.com\",\n    \"main_circle\": {\n        \"__v\": 0,\n        \"user\": \"55b83ed3f4601fc111ab721f\",\n        \"name\": \"Main Circle\",\n        \"_id\": \"55b83ed4f4601fc111ab7220\",\n        \"ancestors\": [\n        ]\n    }\n    \"name\": \"Joel Marquez\",\n    \"google\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n    },\n    \"instagram\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/1209539_349750521886382_2055550828_a.jpg\",\n      \"username\": \"joe__marquez\"\n    },\n    \"twitter\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n      \"username\": \"joelmarquez90\"\n    },\n    \"facebook\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n    },\n    \"valid_local_user\": true,\n    \"verified\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/facebook/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "PostAuthFacebook",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/facebook"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/google",
    "title": "Google login",
    "group": "Autenticacion_Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>Código de autorización de Google</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "clientId",
            "description": "<p>Id de la app</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "redirectUri",
            "description": "<p>La uri a la cual se va a redireccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NWI2ZmJhOTczMTkxYTc0MjhkODBjOTQiL\",\n  \"user\": {\n    \"__v\": 0,\n    \"_id\": \"55b6fba973191a7428d80c94\",\n    \"email\": \"90joelmarquez@gmail.com\",\n    \"main_circle\": {\n        \"__v\": 0,\n        \"user\": \"55b83ed3f4601fc111ab721f\",\n        \"name\": \"Main Circle\",\n        \"_id\": \"55b83ed4f4601fc111ab7220\",\n        \"ancestors\": [\n        ]\n    }\n    \"name\": \"Joel Marquez\",\n    \"google\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n    },\n    \"instagram\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/1209539_349750521886382_2055550828_a.jpg\",\n      \"username\": \"joe__marquez\"\n    },\n    \"twitter\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n      \"username\": \"joelmarquez90\"\n    },\n    \"facebook\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n    },\n    \"valid_local_user\": true,\n    \"verified\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/google/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "PostAuthGoogle",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/google"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/instagram",
    "title": "Instagram login",
    "group": "Autenticacion_Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>Código de autorización de Instagram</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "clientId",
            "description": "<p>Id de la app</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "redirectUri",
            "description": "<p>La uri a la cual se va a redireccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NWI2ZmJhOTczMTkxYTc0MjhkODBjOTQiL\",\n  \"user\": {\n    \"__v\": 0,\n    \"_id\": \"55b6fba973191a7428d80c94\",\n    \"email\": \"90joelmarquez@gmail.com\",\n    \"main_circle\": {\n        \"__v\": 0,\n        \"user\": \"55b83ed3f4601fc111ab721f\",\n        \"name\": \"Main Circle\",\n        \"_id\": \"55b83ed4f4601fc111ab7220\",\n        \"ancestors\": [\n        ]\n    }\n    \"name\": \"Joel Marquez\",\n    \"google\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n    },\n    \"instagram\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/1209539_349750521886382_2055550828_a.jpg\",\n      \"username\": \"joe__marquez\"\n    },\n    \"twitter\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n      \"username\": \"joelmarquez90\"\n    },\n    \"facebook\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n    },\n    \"valid_local_user\": true,\n    \"verified\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/instagram/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "PostAuthInstagram",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/instagram"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/twitter",
    "title": "Twitter login",
    "group": "Autenticacion_Social",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "oauth_token",
            "description": "<p>Oauth token para obtener el request token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "oauth_verifier",
            "description": "<p>Oauth verificador para obtener el request token</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acceso valido</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NWI2ZmJhOTczMTkxYTc0MjhkODBjOTQiL\",\n  \"user\": {\n    \"__v\": 0,\n    \"_id\": \"55b6fba973191a7428d80c94\",\n    \"email\": \"90joelmarquez@gmail.com\",\n    \"main_circle\": {\n        \"__v\": 0,\n        \"user\": \"55b83ed3f4601fc111ab721f\",\n        \"name\": \"Main Circle\",\n        \"_id\": \"55b83ed4f4601fc111ab7220\",\n        \"ancestors\": [\n        ]\n    }\n    \"name\": \"Joel Marquez\",\n    \"google\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n    },\n    \"instagram\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/1209539_349750521886382_2055550828_a.jpg\",\n      \"username\": \"joe__marquez\"\n    },\n    \"twitter\": {\n      \"display_name\": \"Joel Márquez\",\n      \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n      \"username\": \"joelmarquez90\"\n    },\n    \"facebook\": {\n      \"display_name\": \"Joel Márquez\",\n      \"email\": \"90joelmarquez@gmail.com\",\n      \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n    },\n    \"valid_local_user\": true,\n    \"verified\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/auth/twitter/index.js",
    "groupTitle": "Autenticacion_Social",
    "name": "PostAuthTwitter",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/auth/twitter"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/user/:user_id/circle/:circle_id",
    "title": "Eliminar un circulo",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle_id",
            "description": "<p>Id del circulo a borrar (no puede ser el grupo principal)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Id del circulo eliminado</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"circle\":\"55936a0460bb409c379800b7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "DeleteApiUserUser_idCircleCircle_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle/:circle_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/circle/:circle_id",
    "title": "Obtener circulo",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle_id",
            "description": "<p>Id del circulo</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Circulo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"circle\": {\n        \"contacts\": [\n            {\n                \"user\": \"55c421354037f03842898378\",\n                \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\",\n                \"name\": \"Leo Messi\",\n                \"_id\": \"55c778f417d75075277f3b48\",\n                \"__v\": 0,\n                \"parents\": [\n                    {\n                        \"circle\": \"55c421364037f03842898379\",\n                        \"_id\": \"55c778f417d75075277f3b49\",\n                        \"ancestors\": [\n                            \"55c421364037f03842898379\"\n                        ]\n                    }\n                ],\n                \"instagram\": {\n                    \"username\": \"leomessi\",\n                    \"id\": \"427553890\"\n                },\n                \"facebook\": {\n                    \"display_name\": \"Leo Messi\",\n                    \"id\": \"176063032413299\"\n                }\n            },\n            {\n                \"user\": \"55c421354037f03842898378\",\n                \"picture\": \"https://graph.facebook.com/v2.3/10206413202905994/picture?type=large\",\n                \"name\": \"Flore Joffré\",\n                \"_id\": \"55cab7542337df552818e540\",\n                \"__v\": 0,\n                \"parents\": [\n                    {\n                        \"circle\": \"55c421364037f03842898379\",\n                        \"_id\": \"55cab7542337df552818e541\",\n                        \"ancestors\": [\n                            \"55c421364037f03842898379\"\n                        ]\n                    }\n                ],\n                \"instagram\": {\n                    \"username\": \"florejoffre\",\n                    \"id\": \"1244524526\"\n                },\n                \"twitter\": {\n                    \"username\": \"FloreJoffre\",\n                    \"id\": \"197249917\"\n                },\n                \"facebook\": {\n                    \"display_name\": \"Flore Joffré\",\n                    \"id\": \"10206413202905994\"\n                }\n            }\n        ],\n        \"name\": \"Main Circle\",\n        \"_id\": \"55c421364037f03842898379\",\n        \"__v\": 0,\n        \"ancestors\": [\n        ],\n        \"empty_circle\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "GetApiUserUser_idCircleCircle_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle/:circle_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/circle/:circle_id/media",
    "title": "Obtener contenido de un circulo",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle_id",
            "description": "<p>Id del circulo</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Circulo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"circle_id\": \"55da99dff7c2a1864235b6fb\",\n    \"media\": {\n        \"count\": 4,\n        \"list\": [\n            {\n                \"provider\": \"facebook\",\n                \"id\": \"1078735248812735\",\n                \"type\": \"image\",\n                \"created_time\": 1439410963,\n                \"link\": \"https://www.facebook.com/LeoMessi/photos/a.1078734215479505.1073741903.176063032413299/1078735248812735/?type=1\",\n                \"likes\": 7896,\n                \"media_url\": \"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xft1/t31.0-8/11872298_1078735248812735_5228412966569443985_o.jpg\",\n                \"text\": \"FC BARCELONA vs SEVILLA CF / UEFA SUPER CUP\",\n                \"contact\": {\n                    \"id\": \"55c778f417d75075277f3b48\",\n                    \"name\": \"Leo Messi\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\"\n                }\n            },\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"631552235424600064\",\n                \"type\": \"video\",\n                \"created_time\": 1439408761,\n                \"link\": \"https://twitter.com/statuses/631552235424600064\",\n                \"likes\": 0,\n                \"text\": \"RT @sergiolapegue: RT Esta imagen duele.Se llama Gabriel Márquez de Areco, muchos están así. Los ayudamos? Escriban a @VergaraFernando. htt…\",\n                \"user_has_liked\": false,\n                \"contact\": {\n                    \"id\": \"55cab7542337df552818e540\",\n                    \"name\": \"Flore Joffré\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/10206413202905994/picture?type=large\"\n                }\n            },\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"1029692922439453727_427553890\",\n                \"type\": \"video\",\n                \"created_time\": 1436968983,\n                \"link\": \"https://instagram.com/p/5KNEHlvMwf/\",\n                \"likes\": 761575,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xfa1/t50.2886-16/11758526_1461106840851005_793099058_n.mp4\",\n                \"text\": \"\",\n                \"user_has_liked\": \"\",\n                \"contact\": {\n                    \"id\": \"55c778f417d75075277f3b48\",\n                    \"name\": \"Leo Messi\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\"\n                }\n            },\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"1028328237861489912_427553890\",\n                \"type\": \"image\",\n                \"created_time\": 1436806300,\n                \"link\": \"https://instagram.com/p/5FWxWCPMz4/\",\n                \"likes\": 1318361,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/s640x640/sh0.08/e35/10005235_1454738444829608_2103646408_n.jpg\",\n                \"text\": \"\",\n                \"user_has_liked\": \"\",\n                \"contact\": {\n                    \"id\": \"55c778f417d75075277f3b48\",\n                    \"name\": \"Leo Messi\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\"\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "GetApiUserUser_idCircleCircle_idMedia",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle/:circle_id/media"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/circle/:circle_id/media/more",
    "title": "Obtener más contenido de un circulo",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle_id",
            "description": "<p>Id del circulo</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Circulo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"circle_id\": \"55da99dff7c2a1864235b6fb\",\n    \"media\": {\n        \"count\": 4,\n        \"list\": [\n            {\n                \"provider\": \"facebook\",\n                \"id\": \"1078735248812735\",\n                \"type\": \"image\",\n                \"created_time\": 1439410963,\n                \"link\": \"https://www.facebook.com/LeoMessi/photos/a.1078734215479505.1073741903.176063032413299/1078735248812735/?type=1\",\n                \"likes\": 7896,\n                \"media_url\": \"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xft1/t31.0-8/11872298_1078735248812735_5228412966569443985_o.jpg\",\n                \"text\": \"FC BARCELONA vs SEVILLA CF / UEFA SUPER CUP\",\n                \"contact\": {\n                    \"id\": \"55c778f417d75075277f3b48\",\n                    \"name\": \"Leo Messi\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\"\n                }\n            },\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"631552235424600064\",\n                \"type\": \"video\",\n                \"created_time\": 1439408761,\n                \"link\": \"https://twitter.com/statuses/631552235424600064\",\n                \"likes\": 0,\n                \"text\": \"RT @sergiolapegue: RT Esta imagen duele.Se llama Gabriel Márquez de Areco, muchos están así. Los ayudamos? Escriban a @VergaraFernando. htt…\",\n                \"user_has_liked\": false,\n                \"contact\": {\n                    \"id\": \"55cab7542337df552818e540\",\n                    \"name\": \"Flore Joffré\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/10206413202905994/picture?type=large\"\n                }\n            },\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"1029692922439453727_427553890\",\n                \"type\": \"video\",\n                \"created_time\": 1436968983,\n                \"link\": \"https://instagram.com/p/5KNEHlvMwf/\",\n                \"likes\": 761575,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xfa1/t50.2886-16/11758526_1461106840851005_793099058_n.mp4\",\n                \"text\": \"\",\n                \"user_has_liked\": \"\",\n                \"contact\": {\n                    \"id\": \"55c778f417d75075277f3b48\",\n                    \"name\": \"Leo Messi\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\"\n                }\n            },\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"1028328237861489912_427553890\",\n                \"type\": \"image\",\n                \"created_time\": 1436806300,\n                \"link\": \"https://instagram.com/p/5FWxWCPMz4/\",\n                \"likes\": 1318361,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/s640x640/sh0.08/e35/10005235_1454738444829608_2103646408_n.jpg\",\n                \"text\": \"\",\n                \"user_has_liked\": \"\",\n                \"contact\": {\n                    \"id\": \"55c778f417d75075277f3b48\",\n                    \"name\": \"Leo Messi\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/176063032413299/picture?type=large\"\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "GetApiUserUser_idCircleCircle_idMediaMore",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle/:circle_id/media/more"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/circle/:circle_id/tree",
    "title": "Obtener subcirculos",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle_id",
            "description": "<p>Id del circulo</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "tree",
            "description": "<p>Subcirculos</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"tree\": [\n        {\n            \"_id\": \"55c421364037f03842898379\",\n            \"name\": \"Main Circle\",\n            \"subcircles\": [\n                {\n                    \"_id\": \"55c427f69ad9fb6848a1fa72\",\n                    \"name\": \"Familia\",\n                    \"picture\": \"http://www.granada.escolapiosemaus.org/blogs/primariaingles/wp-content/uploads/sites/9/2014/10/family-home.png\",\n                    \"parent\": \"55c421364037f03842898379\",\n                    \"subcircles\": [\n                        {\n                            \"_id\": \"55c4284c9ad9fb6848a1fa73\",\n                            \"name\": \"Materna\",\n                            \"picture\": \"http://www.healthyplace.com/blogs/relationshipsandmentalillness/files/2015/05/3d-happy-family-1.jpg\",\n                            \"parent\": \"55c427f69ad9fb6848a1fa72\",\n                            \"subcircles\": [\n                            ]\n                        },\n                        {\n                            \"_id\": \"55c4285b9ad9fb6848a1fa74\",\n                            \"name\": \"Paterna\",\n                            \"picture\": \"http://www.mindfuljourneycenter.com/wp-content/uploads/2014/07/couples-family-therapy.jpg\",\n                            \"parent\": \"55c427f69ad9fb6848a1fa72\",\n                            \"subcircles\": [\n                            ]\n                        }\n                    ]\n                },\n                {\n                    \"_id\": \"55c428849ad9fb6848a1fa75\",\n                    \"name\": \"Amigos\",\n                    \"picture\": \"http://blackfriendconnect.com/wp-content/uploads/2013/07/rent-a-black-friend-picture-new1.jpg\",\n                    \"parent\": \"55c421364037f03842898379\",\n                    \"subcircles\": [\n                        {\n                            \"_id\": \"55c428989ad9fb6848a1fa76\",\n                            \"name\": \"Facu\",\n                            \"picture\": \"http://www.unialliance.ac.uk/wp-content/uploads/2012/12/Caerleon-Lawn-21.jpg\",\n                            \"parent\": \"55c428849ad9fb6848a1fa75\",\n                            \"subcircles\": [\n                                {\n                                    \"_id\": \"55c580811b6268f35b007af8\",\n                                    \"name\": \"Primer Año\",\n                                    \"parent\": \"55c428989ad9fb6848a1fa76\",\n                                    \"subcircles\": [\n                                        {\n                                            \"_id\": \"55c5819455fdcea25c9f5607\",\n                                            \"name\": \"Primer cuatrimestre\",\n                                            \"parent\": \"55c580811b6268f35b007af8\",\n                                            \"subcircles\": [\n                                            ]\n                                        }\n                                    ]\n                                }\n                            ]\n                        },\n                        {\n                            \"_id\": \"55c428a69ad9fb6848a1fa77\",\n                            \"name\": \"Cole\",\n                            \"picture\": \"http://images.idiva.com/media/content/2011/Dec/hot_to_make_friends_at_college.jpg\",\n                            \"parent\": \"55c428849ad9fb6848a1fa75\",\n                            \"subcircles\": [\n                            ]\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "GetApiUserUser_idCircleCircle_idTree",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle/:circle_id/tree"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/circle",
    "title": "Crear un circulo",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del circulo a crear</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Id del circulo padre</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "picture",
            "description": "<p>URL de la imagen del circulo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"name\":\"Amigos\",\n  \"parent_id\":\"55936a0460bb409c379800b7\",\n  \"picture\":\"http://www.sabiask.com/images/Image/perro.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Circulo creado</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"circle\":{\n    \"parent\":\"55936a0460bb409c379800b7\",\n    \"name\":\"Amigos\",\n    \"picture\":\"http://www.sabiask.com/images/Image/perro.jpg\",\n    \"_id\":\"559ebc91dc9167e815a750b7\",\n    \"__v\":0,\n    \"ancestors\":[\n      \"559eba8109b6aee614e3f733\",\n      \"559ebc0ddc9167e815a750b5\",\n      \"55936a0460bb409c379800b7\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "PostApiUserUser_idCircle",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/user/:user_id/circle/:circle_id",
    "title": "Actualizar un circulo",
    "group": "Circulos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle_id",
            "description": "<p>Id del circulo a actualizar</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nuevo nombre del circulo a actualizar</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Nuevo id padre del circulo a actualizar</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "picture",
            "description": "<p>URL de la imagen del circulo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"name\":\"Amigos\",\n  \"parent_id\":\"55936a0460bb409c379800b7\",\n  \"picture\":\"http://www.sabiask.com/images/Image/perro.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Circulo creado</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"circle\":{\n    \"parent\":\"55936a0460bb409c379800b7\",\n    \"name\":\"Amigos\",\n    \"picture\":\"http://www.sabiask.com/images/Image/perro.jpg\",\n    \"_id\":\"559ebc91dc9167e815a750b7\",\n    \"__v\":0,\n    \"ancestors\":[\n      \"559eba8109b6aee614e3f733\",\n      \"559ebc0ddc9167e815a750b5\",\n      \"55936a0460bb409c379800b7\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/circle/index.js",
    "groupTitle": "Circulos",
    "name": "PutApiUserUser_idCircleCircle_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/circle/:circle_id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/user/:user_id/contact/:contact_id",
    "title": "Eliminar un contacto",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contact_id",
            "description": "<p>Id del contacto a borrar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "circle",
            "description": "<p>Id del contacto eliminado</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n  \"contact\":\"55936a0460bb409c379800b7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "DeleteApiUserUser_idContactContact_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact/:contact_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/contact/:contact_id",
    "title": "Obtener contacto",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contact_id",
            "description": "<p>Id del contacto</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "contact",
            "description": "<p>Contacto</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"contact\": {\n        \"user\": \"55c421354037f03842898378\",\n        \"picture\": \"https://graph.facebook.com/v2.3/10206413202905994/picture?type=large\",\n        \"name\": \"Flore Joffré\",\n        \"_id\": \"55cab7542337df552818e540\",\n        \"__v\": 0,\n        \"parents\": [\n            {\n                \"circle\": \"55c421364037f03842898379\",\n                \"_id\": \"55cab7542337df552818e541\",\n                \"ancestors\": [\n                    \"55c421364037f03842898379\"\n                ]\n            }\n        ],\n        \"instagram\": {\n            \"username\": \"florejoffre\",\n            \"id\": \"1244524526\",\n            \"valid\": true\n        },\n        \"twitter\": {\n            \"username\": \"FloreJoffre\",\n            \"id\": \"197249917\",\n            \"valid\": true\n        },\n        \"facebook\": {\n            \"display_name\": \"Flore Joffré\",\n            \"id\": \"10206413202905994\",\n            \"valid\": true\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "GetApiUserUser_idContactContact_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact/:contact_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/contact/:contact_id/media",
    "title": "Obtener contenido de un contacto",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contact_id",
            "description": "<p>Id del contacto</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "contact",
            "description": "<p>Contacto</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"contact_id\": \"55da99dff7c2a1864235b6fb\",\n    \"media\": {\n        \"count\": 3,\n        \"list\": [\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"1045056700312632485_1244524526\",\n                \"type\": \"image\",\n                \"created_time\": 1438800488,\n                \"link\": \"https://instagram.com/p/6AyYgwRryl/\",\n                \"likes\": 21,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/e15/11821140_1458199127814596_2044349920_n.jpg\",\n                \"text\": \"40 meses y más a tu lado. \\nGracias por estar a mi lado y amarme como lo haces. \\nNo existe nadie como vos! Te amo para siempre 💕\\n\\\"Ahora cambiemos el mundo, amigo, que tu ya has cambiado el mio\\\"\",\n                \"user_has_liked\": true\n            },\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"628942328963702784\",\n                \"type\": \"text\",\n                \"created_time\": 1438786511,\n                \"link\": \"https://twitter.com/statuses/628942328963702784\",\n                \"likes\": 0,\n                \"text\": \"@eugeniiazarco no te rias del niño acento que el viernes voy a pasar a ser yo ``````````\",\n                \"user_has_liked\": false\n            },\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"628927833134530560\",\n                \"type\": \"video\",\n                \"created_time\": 1438783054,\n                \"link\": \"https://twitter.com/statuses/628927833134530560\",\n                \"likes\": 0,\n                \"text\": \"@eugeniiazarco euchi don't goooo http://t.co/vabQtQzV1Y\",\n                \"user_has_liked\": false\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Respuesta invalida",
          "content": "HTTP/1.1 200 OK\n{\n    \"media\": {\n        \"count\": 0,\n        \"list\": [\n        ]\n    },\n    \"errors\": {\n        \"facebook\": {\n            \"photos\": {\n                \"code\": 190,\n                \"message\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"videos\": {\n                \"code\": 190,\n                \"message\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"statuses\": {\n                \"code\": 190,\n                \"message\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            }\n        },\n        \"instagram\": {\n            \"code\": 400,\n            \"message\": \"The access_token provided is invalid.\"\n        },\n        \"twitter\": {\n            \"code\": 89,\n            \"message\": \"Invalid or expired token.\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "GetApiUserUser_idContactContact_idMedia",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact/:contact_id/media"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/contact/:contact_id/media/more",
    "title": "Obtener más contenido de un contacto",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contact_id",
            "description": "<p>Id del contacto</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "contact",
            "description": "<p>Contacto</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"contact_id\": \"55da99dff7c2a1864235b6fb\",\n    \"media\": {\n        \"count\": 3,\n        \"list\": [\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"1045056700312632485_1244524526\",\n                \"type\": \"image\",\n                \"created_time\": 1438800488,\n                \"link\": \"https://instagram.com/p/6AyYgwRryl/\",\n                \"likes\": 21,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/e15/11821140_1458199127814596_2044349920_n.jpg\",\n                \"text\": \"40 meses y más a tu lado. \\nGracias por estar a mi lado y amarme como lo haces. \\nNo existe nadie como vos! Te amo para siempre 💕\\n\\\"Ahora cambiemos el mundo, amigo, que tu ya has cambiado el mio\\\"\",\n                \"user_has_liked\": true\n            },\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"628942328963702784\",\n                \"type\": \"text\",\n                \"created_time\": 1438786511,\n                \"link\": \"https://twitter.com/statuses/628942328963702784\",\n                \"likes\": 0,\n                \"text\": \"@eugeniiazarco no te rias del niño acento que el viernes voy a pasar a ser yo ``````````\",\n                \"user_has_liked\": false\n            },\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"628927833134530560\",\n                \"type\": \"video\",\n                \"created_time\": 1438783054,\n                \"link\": \"https://twitter.com/statuses/628927833134530560\",\n                \"likes\": 0,\n                \"text\": \"@eugeniiazarco euchi don't goooo http://t.co/vabQtQzV1Y\",\n                \"user_has_liked\": false\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Respuesta invalida",
          "content": "HTTP/1.1 200 OK\n{\n    \"media\": {\n        \"count\": 0,\n        \"list\": [\n        ]\n    },\n    \"errors\": {\n        \"facebook\": {\n            \"photos\": {\n                \"code\": 190,\n                \"message\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"videos\": {\n                \"code\": 190,\n                \"message\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"statuses\": {\n                \"code\": 190,\n                \"message\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            }\n        },\n        \"instagram\": {\n            \"code\": 400,\n            \"message\": \"The access_token provided is invalid.\"\n        },\n        \"twitter\": {\n            \"code\": 89,\n            \"message\": \"Invalid or expired token.\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "GetApiUserUser_idContactContact_idMediaMore",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact/:contact_id/media/more"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/contact",
    "title": "Crear un contacto",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del contacto a crear</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "circles_ids",
            "description": "<p>Ids de los grupos en los cuales el contacto va a ser creado</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "facebook_id",
            "description": "<p>Id del perfil de Facebook del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "facebook_display_name",
            "description": "<p>Nombre del perfil de Facebook del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "twitter_id",
            "description": "<p>Id del perfil de Twitter del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "twitter_username",
            "description": "<p>Username del perfil de Twitter del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "instagram_id",
            "description": "<p>Id del perfil de Instagram del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "instagram_username",
            "description": "<p>Username del perfil de Instagram del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email del contacto</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"name\":\"Alejo\",\n  \"picture\":\"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10832234_314287438773030_212898401_a.jpg\",\n  \"facebook_id\": \"10205153877979641\",\n  \"facebook_display_name\": \"Alejo García\",\n  \"instagram_id\":\"1574863419\",\n  \"instagram_username\": \"aleagb23\",\n  \"twitter_id\": \"261365528\",\n  \"twitter_username\": \"aleagb23\",\n  \"circles_ids\":[\"55c02cc80cce13ec28bd7ec2\"],\n  \"email\":\"aleagb.rclm@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Aclaración: si bien los ids de las redes sociales son opcionales, al menos uno es requerido para poder crear un contacto y obtener contenido de esa red social asignada.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "contact",
            "description": "<p>Contacto creado</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"contact\": {\n        \"__v\": 0,\n        \"user\": \"55c02cc70cce13ec28bd7ec1\",\n        \"picture\": \"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10832234_314287438773030_212898401_a.jpg\",\n        \"name\": \"Alejo\",\n        \"_id\": \"55c0316dccab88ba31786d73\",\n        \"parents\": [\n            {\n                \"circle\": \"55c02cc80cce13ec28bd7ec2\",\n                \"_id\": \"55c0316dccab88ba31786d74\",\n                \"ancestors\": [\n                    \"55c02cc80cce13ec28bd7ec2\"\n                ]\n            }\n        ],\n        \"instagram\": {\n            \"username\": \"aleagb23\",\n            \"id\": \"1574863419\"\n        },\n        \"twitter\": {\n            \"username\": \"aleagb23\",\n            \"id\": \"261365528\"\n        },\n        \"facebook\": {\n            \"display_name\": \"Alejo García\",\n            \"id\": \"10205153877979641\"\n        },\n        \"google\": {\n            \"email\": \"aleagb.rclm@gmail.com\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "PostApiUserUser_idContact",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/contact/multiple",
    "title": "Crear multiples contactos",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "user_ids",
            "description": "<p>Ids de los usuarios a agregar como contacto</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"user_ids\": [\n    \"560a94bd65555903007a1973\",\n    \"55f38c2a8770f003006647f3\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "PostApiUserUser_idContactMultiple",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact/multiple"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/user/:user_id/contact/:contact_id",
    "title": "Actualizar un contacto",
    "group": "Contactos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "contact_id",
            "description": "<p>Id del contacto a actualizar</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nuevo nombre del contacto a actualizar</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture",
            "description": "<p>URL de la imagen del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "circles_ids",
            "description": "<p>Ids de los grupos en los cuales el contacto va a ser actualizado</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "facebook_id",
            "description": "<p>Id del perfil de Facebook del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "twitter_id",
            "description": "<p>Id del perfil de Twitter del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "instagram_id",
            "description": "<p>Id del perfil de Instagram del contacto</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email del contacto</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n   \"name\":\"Alejo\",\n   \"picture\":\"https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10832234_314287438773030_212898401_a.jpg\",\n   \"facebook_id\": \"10205153877979641\",\n   \"facebook_display_name\": \"Alejo García\",\n   \"instagram_id\":\"1574863419\",\n   \"instagram_username\": \"aleagb23\",\n   \"twitter_id\": \"261365528\",\n   \"twitter_username\": \"aleagb23\",\n   \"circles_ids\":[\"55c02cc80cce13ec28bd7ec2\"],\n   \"email\":\"aleagb.rclm@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Aclaración: si bien los ids de las redes sociales son opcionales, al menos uno es requerido para poder actualizar un contacto y obtener contenido de esa red social asignada.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "contact",
            "description": "<p>Contacto actualizado</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"contact\": {\n        \"user\": \"55c421354037f03842898378\",\n        \"picture\": \"https://graph.facebook.com/v2.3/10206413202905994/picture?type=large\",\n        \"name\": \"Flore Joffré\",\n        \"_id\": \"55cab7542337df552818e540\",\n        \"__v\": 0,\n        \"parents\": [\n            {\n                \"circle\": \"55c421364037f03842898379\",\n                \"_id\": \"55cab7542337df552818e541\",\n                \"ancestors\": [\n                    \"55c421364037f03842898379\"\n                ]\n            }\n        ],\n        \"instagram\": {\n            \"username\": \"florejoffre\",\n            \"id\": \"1244524526\",\n            \"valid\": true\n        },\n        \"twitter\": {\n            \"username\": \"FloreJoffre\",\n            \"id\": \"197249917\",\n            \"valid\": true\n        },\n        \"facebook\": {\n            \"display_name\": \"Flore Joffré\",\n            \"id\": \"10206413202905994\",\n            \"valid\": true\n        },\n        \"google\": {\n            \"email\": \"aleagb.rclm@gmail.com\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/contact/index.js",
    "groupTitle": "Contactos",
    "name": "PutApiUserUser_idContactContact_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/contact/:contact_id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/user/:user_id/email/:email_id",
    "title": "Eliminar completamente un email",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email_id",
            "description": "<p>Id del email a eliminar completamente</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "DeleteApiUserUser_idEmailEmail_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/:email_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/email/draft",
    "title": "Obtener borradores",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "emails",
            "description": "<p>Emails</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"emails\": {\n        \"count\": 1,\n        \"list\": [\n            {\n                \"id\": \"14f298e6505cbe03\",\n                \"threadId\": \"14f2987f9e86cee0\",\n                \"snippet\": \"Hola que tal, Les envío este correo con el fin de participar del Premio Jóvenes Emprendedores 2015.\",\n                \"provider\": \"google\",\n                \"date\": 1439511241,\n                \"from\": \"\\\"Joel Márquez\\\" <90joelmarquez@gmail.com>\",\n                \"to\": [\n                    \"universidades@santanderrio.com.ar\"\n                ],\n                \"cc\": [\n                    \"\\\"Alejo García\\\" <aleagb.rclm@gmail.com>\",\n                    \"Cristian Mastronardi <cristian.1078@gmail.com>\",\n                    \"Juan Cistaro <juan.cistaro@gmail.com>\",\n                    \"Nicolas Brahim <nicolasbrahim@gmail.com>\"\n                ],\n                \"cco\": [\n                ],\n                \"subject\": \"Proyecto Universitario\",\n                \"unread\": false,\n                \"text\": \"SG9sYSBxdWUgdGFsLA0KDQoNCg0KTGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyAgDQpFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gIA0KSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSAgDQpsbGFtYSBVbmlmeS4NCg0KDQoNCkxlcyBhZGp1bnRhbW9zIHVuIGRvY3VtZW50byBlbiBlbCBjdWFsIGVzdMOhIGJpZW4gZXhwbGljYWRvIGVuIHF1w6kgY29uc2lzdGUgIA0KZWwgcHJveWVjdG8geSBjdcOhbGVzIHNvbiBsb3Mgb2JqZXRpdm9zIGRlbCBtaXNtby4NCg0KDQoNCk11Y2hhcyBncmFjaWFzIHkgc2FsdWRvcywNCg0KDQoNCkpvZWwgTcOhcnF1ZXoNCmlPUyBEZXYNCg0KDQoNCi0tDQoNCg0KSm9lbCBNw6FycXVleg0KaU9TIERldg0K\",\n                \"html\": \"PGRpdiBkaXI9Imx0ciI-SG9sYSBxdWUgdGFsLDxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyBFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSBsbGFtYSBVbmlmeS7CoDwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGFkanVudGFtb3MgdW4gZG9jdW1lbnRvIGVuIGVsIGN1YWwgZXN0w6EgYmllbiBleHBsaWNhZG8gZW4gcXXDqSBjb25zaXN0ZSBlbCBwcm95ZWN0byB5IGN1w6FsZXMgc29uIGxvcyBvYmpldGl2b3MgZGVsIG1pc21vLjwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TXVjaGFzIGdyYWNpYXMgeSBzYWx1ZG9zLDwvZGl2PjxkaXY-PGJyPjxkaXYgY2xhc3M9IkdtU2lnbiI-PGRpdiBkaXI9Imx0ciI-PGRpdj48ZGl2IGRpcj0ibHRyIj48ZGl2PjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTIuODAwMDAwMTkwNzM0OXB4Ij5Kb2VsIE3DoXJxdWV6PC9zcGFuPjxkaXYgc3R5bGU9ImZvbnQtc2l6ZToxMi44MDAwMDAxOTA3MzQ5cHgiPmlPUyBEZXY8L2Rpdj48L2Rpdj48ZGl2IGRpcj0ibHRyIj48YnI-PC9kaXY-PGRpdiBkaXI9Imx0ciI-PGltZyBzcmM9Imh0dHBzOi8vY2kzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS9pcExVdEdLalFic1Ntbm1oQmtRb2JKSlNVN3VjNXVGVWlQR1VMTXFTbnN2YjdmaXFmc0xidXgwU3Z6Mm9zZjQzNXZzaHRxc2htS3ZEMDVpZk43VTJxX3c4bzdBM1Bib2ltTGVDcWFYbzBiQTZPa0l6NHQzMjk1Z19nOE85d1Rocj1zMC1kLWUxLWZ0I2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2lkPTBCM2pSQkUzeldqNkhNVXRwZURsUWNHTk1PVUUmYW1wO2V4cG9ydD1kb3dubG9hZCIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2Ij48YnI-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PGRpdiBkaXI9Imx0ciI-LS0gPGJyPjwvZGl2PjxkaXYgZGlyPSJsdHIiPkpvZWwgTcOhcnF1ZXo8YnI-aU9TIERldjwvZGl2Pg==\"\n            }\n        ]\n    },\n    \"errors\": {\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "GetApiUserUser_idEmailDraft",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/draft"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/email/inbox",
    "title": "Obtener bandeja de entrada",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "emails",
            "description": "<p>Emails</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"emails\": {\n        \"count\": 1,\n        \"list\": [\n            {\n                \"id\": \"14f298e6505cbe03\",\n                \"threadId\": \"14f2987f9e86cee0\",\n                \"snippet\": \"Hola que tal, Les envío este correo con el fin de participar del Premio Jóvenes Emprendedores 2015.\",\n                \"provider\": \"google\",\n                \"date\": 1439511241,\n                \"from\": \"\\\"Joel Márquez\\\" <90joelmarquez@gmail.com>\",\n                \"to\": [ \n                    \"universidades@santanderrio.com.ar\"\n                ],\n                \"cc\": [\n                    \"\\\"Alejo García\\\" <aleagb.rclm@gmail.com>\",\n                    \"Cristian Mastronardi <cristian.1078@gmail.com>\",\n                    \"Juan Cistaro <juan.cistaro@gmail.com>\",\n                    \"Nicolas Brahim <nicolasbrahim@gmail.com>\"\n                ],\n                \"cco\": [\n                ],\n                \"subject\": \"Proyecto Universitario\",\n                \"unread\": true,\n                \"text\": \"SG9sYSBxdWUgdGFsLA0KDQoNCg0KTGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyAgDQpFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gIA0KSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSAgDQpsbGFtYSBVbmlmeS4NCg0KDQoNCkxlcyBhZGp1bnRhbW9zIHVuIGRvY3VtZW50byBlbiBlbCBjdWFsIGVzdMOhIGJpZW4gZXhwbGljYWRvIGVuIHF1w6kgY29uc2lzdGUgIA0KZWwgcHJveWVjdG8geSBjdcOhbGVzIHNvbiBsb3Mgb2JqZXRpdm9zIGRlbCBtaXNtby4NCg0KDQoNCk11Y2hhcyBncmFjaWFzIHkgc2FsdWRvcywNCg0KDQoNCkpvZWwgTcOhcnF1ZXoNCmlPUyBEZXYNCg0KDQoNCi0tDQoNCg0KSm9lbCBNw6FycXVleg0KaU9TIERldg0K\",\n                \"html\": \"PGRpdiBkaXI9Imx0ciI-SG9sYSBxdWUgdGFsLDxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyBFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSBsbGFtYSBVbmlmeS7CoDwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGFkanVudGFtb3MgdW4gZG9jdW1lbnRvIGVuIGVsIGN1YWwgZXN0w6EgYmllbiBleHBsaWNhZG8gZW4gcXXDqSBjb25zaXN0ZSBlbCBwcm95ZWN0byB5IGN1w6FsZXMgc29uIGxvcyBvYmpldGl2b3MgZGVsIG1pc21vLjwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TXVjaGFzIGdyYWNpYXMgeSBzYWx1ZG9zLDwvZGl2PjxkaXY-PGJyPjxkaXYgY2xhc3M9IkdtU2lnbiI-PGRpdiBkaXI9Imx0ciI-PGRpdj48ZGl2IGRpcj0ibHRyIj48ZGl2PjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTIuODAwMDAwMTkwNzM0OXB4Ij5Kb2VsIE3DoXJxdWV6PC9zcGFuPjxkaXYgc3R5bGU9ImZvbnQtc2l6ZToxMi44MDAwMDAxOTA3MzQ5cHgiPmlPUyBEZXY8L2Rpdj48L2Rpdj48ZGl2IGRpcj0ibHRyIj48YnI-PC9kaXY-PGRpdiBkaXI9Imx0ciI-PGltZyBzcmM9Imh0dHBzOi8vY2kzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS9pcExVdEdLalFic1Ntbm1oQmtRb2JKSlNVN3VjNXVGVWlQR1VMTXFTbnN2YjdmaXFmc0xidXgwU3Z6Mm9zZjQzNXZzaHRxc2htS3ZEMDVpZk43VTJxX3c4bzdBM1Bib2ltTGVDcWFYbzBiQTZPa0l6NHQzMjk1Z19nOE85d1Rocj1zMC1kLWUxLWZ0I2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2lkPTBCM2pSQkUzeldqNkhNVXRwZURsUWNHTk1PVUUmYW1wO2V4cG9ydD1kb3dubG9hZCIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2Ij48YnI-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PGRpdiBkaXI9Imx0ciI-LS0gPGJyPjwvZGl2PjxkaXYgZGlyPSJsdHIiPkpvZWwgTcOhcnF1ZXo8YnI-aU9TIERldjwvZGl2Pg==\"\n            }\n        ]\n    },\n    \"errors\": {\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "GetApiUserUser_idEmailInbox",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/inbox"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/email/sent",
    "title": "Obtener enviados",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "emails",
            "description": "<p>Emails</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"emails\": {\n        \"count\": 1,\n        \"list\": [\n            {\n                \"id\": \"14f298e6505cbe03\",\n                \"threadId\": \"14f2987f9e86cee0\",\n                \"snippet\": \"Hola que tal, Les envío este correo con el fin de participar del Premio Jóvenes Emprendedores 2015.\",\n                \"provider\": \"google\",\n                \"date\": 1439511241,\n                \"from\": \"\\\"Joel Márquez\\\" <90joelmarquez@gmail.com>\",\n                \"to\": [\n                    \"universidades@santanderrio.com.ar\"\n                ],\n                \"cc\": [\n                    \"\\\"Alejo García\\\" <aleagb.rclm@gmail.com>\",\n                    \"Cristian Mastronardi <cristian.1078@gmail.com>\",\n                    \"Juan Cistaro <juan.cistaro@gmail.com>\",\n                    \"Nicolas Brahim <nicolasbrahim@gmail.com>\"\n                ],\n                \"cco\": [\n                ],\n                \"subject\": \"Proyecto Universitario\",\n                \"unread\": false,\n                \"text\": \"SG9sYSBxdWUgdGFsLA0KDQoNCg0KTGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyAgDQpFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gIA0KSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSAgDQpsbGFtYSBVbmlmeS4NCg0KDQoNCkxlcyBhZGp1bnRhbW9zIHVuIGRvY3VtZW50byBlbiBlbCBjdWFsIGVzdMOhIGJpZW4gZXhwbGljYWRvIGVuIHF1w6kgY29uc2lzdGUgIA0KZWwgcHJveWVjdG8geSBjdcOhbGVzIHNvbiBsb3Mgb2JqZXRpdm9zIGRlbCBtaXNtby4NCg0KDQoNCk11Y2hhcyBncmFjaWFzIHkgc2FsdWRvcywNCg0KDQoNCkpvZWwgTcOhcnF1ZXoNCmlPUyBEZXYNCg0KDQoNCi0tDQoNCg0KSm9lbCBNw6FycXVleg0KaU9TIERldg0K\",\n                \"html\": \"PGRpdiBkaXI9Imx0ciI-SG9sYSBxdWUgdGFsLDxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyBFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSBsbGFtYSBVbmlmeS7CoDwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGFkanVudGFtb3MgdW4gZG9jdW1lbnRvIGVuIGVsIGN1YWwgZXN0w6EgYmllbiBleHBsaWNhZG8gZW4gcXXDqSBjb25zaXN0ZSBlbCBwcm95ZWN0byB5IGN1w6FsZXMgc29uIGxvcyBvYmpldGl2b3MgZGVsIG1pc21vLjwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TXVjaGFzIGdyYWNpYXMgeSBzYWx1ZG9zLDwvZGl2PjxkaXY-PGJyPjxkaXYgY2xhc3M9IkdtU2lnbiI-PGRpdiBkaXI9Imx0ciI-PGRpdj48ZGl2IGRpcj0ibHRyIj48ZGl2PjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTIuODAwMDAwMTkwNzM0OXB4Ij5Kb2VsIE3DoXJxdWV6PC9zcGFuPjxkaXYgc3R5bGU9ImZvbnQtc2l6ZToxMi44MDAwMDAxOTA3MzQ5cHgiPmlPUyBEZXY8L2Rpdj48L2Rpdj48ZGl2IGRpcj0ibHRyIj48YnI-PC9kaXY-PGRpdiBkaXI9Imx0ciI-PGltZyBzcmM9Imh0dHBzOi8vY2kzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS9pcExVdEdLalFic1Ntbm1oQmtRb2JKSlNVN3VjNXVGVWlQR1VMTXFTbnN2YjdmaXFmc0xidXgwU3Z6Mm9zZjQzNXZzaHRxc2htS3ZEMDVpZk43VTJxX3c4bzdBM1Bib2ltTGVDcWFYbzBiQTZPa0l6NHQzMjk1Z19nOE85d1Rocj1zMC1kLWUxLWZ0I2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2lkPTBCM2pSQkUzeldqNkhNVXRwZURsUWNHTk1PVUUmYW1wO2V4cG9ydD1kb3dubG9hZCIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2Ij48YnI-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PGRpdiBkaXI9Imx0ciI-LS0gPGJyPjwvZGl2PjxkaXYgZGlyPSJsdHIiPkpvZWwgTcOhcnF1ZXo8YnI-aU9TIERldjwvZGl2Pg==\"\n            }\n        ]\n    },\n    \"errors\": {\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "GetApiUserUser_idEmailSent",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/sent"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/email/trash",
    "title": "Obtener papelera de reciclaje",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "emails",
            "description": "<p>Emails</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"emails\": {\n        \"count\": 1,\n        \"list\": [\n            {\n                \"id\": \"14f298e6505cbe03\",\n                \"threadId\": \"14f2987f9e86cee0\",\n                \"snippet\": \"Hola que tal, Les envío este correo con el fin de participar del Premio Jóvenes Emprendedores 2015.\",\n                \"provider\": \"google\",\n                \"date\": 1439511241,\n                \"from\": \"\\\"Joel Márquez\\\" <90joelmarquez@gmail.com>\",\n                \"to\": [\n                    \"universidades@santanderrio.com.ar\"\n                ],\n                \"cc\": [\n                    \"\\\"Alejo García\\\" <aleagb.rclm@gmail.com>\",\n                    \"Cristian Mastronardi <cristian.1078@gmail.com>\",\n                    \"Juan Cistaro <juan.cistaro@gmail.com>\",\n                    \"Nicolas Brahim <nicolasbrahim@gmail.com>\"\n                ],\n                \"cco\": [\n                ],\n                \"subject\": \"Proyecto Universitario\",\n                \"unread\": true,\n                \"text\": \"SG9sYSBxdWUgdGFsLA0KDQoNCg0KTGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyAgDQpFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gIA0KSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSAgDQpsbGFtYSBVbmlmeS4NCg0KDQoNCkxlcyBhZGp1bnRhbW9zIHVuIGRvY3VtZW50byBlbiBlbCBjdWFsIGVzdMOhIGJpZW4gZXhwbGljYWRvIGVuIHF1w6kgY29uc2lzdGUgIA0KZWwgcHJveWVjdG8geSBjdcOhbGVzIHNvbiBsb3Mgb2JqZXRpdm9zIGRlbCBtaXNtby4NCg0KDQoNCk11Y2hhcyBncmFjaWFzIHkgc2FsdWRvcywNCg0KDQoNCkpvZWwgTcOhcnF1ZXoNCmlPUyBEZXYNCg0KDQoNCi0tDQoNCg0KSm9lbCBNw6FycXVleg0KaU9TIERldg0K\",\n                \"html\": \"PGRpdiBkaXI9Imx0ciI-SG9sYSBxdWUgdGFsLDxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGVudsOtbyBlc3RlIGNvcnJlbyBjb24gZWwgZmluIGRlIHBhcnRpY2lwYXIgZGVsIFByZW1pbyBKw7N2ZW5lcyBFbXByZW5kZWRvcmVzIDIwMTUuIEVzdGFtb3MgZW4gZWwgw7psdGltbyBhw7FvIGRlIGxhIGNhcnJlcmEgZGUgSW5nZW5pZXLDrWEgZW4gSW5mb3Jtw6F0aWNhIGVuIGxhIFVuaXZlcnNpZGFkIE5hY2lvbmFsIGRlIExhIE1hdGFuemEsIHkgbnVlc3RybyBwcm95ZWN0byBzZSBsbGFtYSBVbmlmeS7CoDwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TGVzIGFkanVudGFtb3MgdW4gZG9jdW1lbnRvIGVuIGVsIGN1YWwgZXN0w6EgYmllbiBleHBsaWNhZG8gZW4gcXXDqSBjb25zaXN0ZSBlbCBwcm95ZWN0byB5IGN1w6FsZXMgc29uIGxvcyBvYmpldGl2b3MgZGVsIG1pc21vLjwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-TXVjaGFzIGdyYWNpYXMgeSBzYWx1ZG9zLDwvZGl2PjxkaXY-PGJyPjxkaXYgY2xhc3M9IkdtU2lnbiI-PGRpdiBkaXI9Imx0ciI-PGRpdj48ZGl2IGRpcj0ibHRyIj48ZGl2PjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxkaXYgZGlyPSJsdHIiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTIuODAwMDAwMTkwNzM0OXB4Ij5Kb2VsIE3DoXJxdWV6PC9zcGFuPjxkaXYgc3R5bGU9ImZvbnQtc2l6ZToxMi44MDAwMDAxOTA3MzQ5cHgiPmlPUyBEZXY8L2Rpdj48L2Rpdj48ZGl2IGRpcj0ibHRyIj48YnI-PC9kaXY-PGRpdiBkaXI9Imx0ciI-PGltZyBzcmM9Imh0dHBzOi8vY2kzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9wcm94eS9pcExVdEdLalFic1Ntbm1oQmtRb2JKSlNVN3VjNXVGVWlQR1VMTXFTbnN2YjdmaXFmc0xidXgwU3Z6Mm9zZjQzNXZzaHRxc2htS3ZEMDVpZk43VTJxX3c4bzdBM1Bib2ltTGVDcWFYbzBiQTZPa0l6NHQzMjk1Z19nOE85d1Rocj1zMC1kLWUxLWZ0I2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2lkPTBCM2pSQkUzeldqNkhNVXRwZURsUWNHTk1PVUUmYW1wO2V4cG9ydD1kb3dubG9hZCIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2Ij48YnI-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PGRpdiBkaXI9Imx0ciI-LS0gPGJyPjwvZGl2PjxkaXYgZGlyPSJsdHIiPkpvZWwgTcOhcnF1ZXo8YnI-aU9TIERldjwvZGl2Pg==\"\n            }\n        ]\n    },\n    \"errors\": {\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "GetApiUserUser_idEmailTrash",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/trash"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/email",
    "title": "Enviar un email",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "to",
            "description": "<p>Lista de emails válidos a enviar el email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "cc",
            "description": "<p>Lista de emails válidos a enviar como cc el email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": true,
            "field": "cco",
            "description": "<p>Lista de emails válidos a enviar como cco el email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "subject",
            "description": "<p>Asunto del email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "text",
            "description": "<p>Cuerpo del email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"to\":[\"unify.argentina@gmail.com\"],\n  \"cc\":[\"aleagb.rclm@gmail.com\"],\n  \"cco\":[\"juan.cistaro@gmail.com\"],\n  \"subject\":\"Hola querido\",\n  \"text\":\"Todo bien?\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "PostApiUserUser_idEmail",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/email/seen",
    "title": "Marcar como leído",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "email_ids",
            "description": "<p>Ids de los emails a marcar como leído</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email_ids\":[\"14fc4c48e3cf666f\", \"14fc39727ae1b4fb\", \"14fbc6fff0f342c2\", \"14fba734a9975a7e\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "PostApiUserUser_idEmailSeen",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/seen"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/email/trash",
    "title": "Mover a papelera",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "email_ids",
            "description": "<p>Ids de los emails a mover a la papelera</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email_ids\":[\"14fc4c48e3cf666f\", \"14fc39727ae1b4fb\", \"14fbc6fff0f342c2\", \"14fba734a9975a7e\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "PostApiUserUser_idEmailTrash",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/trash"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/email/unseen",
    "title": "Marcar como no leído",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "email_ids",
            "description": "<p>Ids de los emails a marcar como no leído</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email_ids\":[\"14fc4c48e3cf666f\", \"14fc39727ae1b4fb\", \"14fbc6fff0f342c2\", \"14fba734a9975a7e\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "PostApiUserUser_idEmailUnseen",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/unseen"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/email/untrash",
    "title": "Quitar de la papelera",
    "group": "Email",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "email_ids",
            "description": "<p>Ids de los emails a quitar de la papelera</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email_ids\":[\"14fc4c48e3cf666f\", \"14fc39727ae1b4fb\", \"14fbc6fff0f342c2\", \"14fba734a9975a7e\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/email/index.js",
    "groupTitle": "Email",
    "name": "PostApiUserUser_idEmailUntrash",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/email/untrash"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id",
    "title": "Obtener usuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"__v\": 0,\n        \"_id\": \"55c421354037f03842898378\",\n        \"email\": \"90joelmarquez@gmail.com\",\n        \"main_circle\": {\n            \"user\": \"55c421354037f03842898378\",\n            \"name\": \"Main Circle\",\n            \"_id\": \"55c421364037f03842898379\",\n            \"__v\": 0,\n            \"ancestors\": [\n            ]\n        },\n        \"name\": \"Joel Márquez\",\n        \"google\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n        },\n        \"instagram\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11385614_441266499409188_453477140_a.jpg\",\n            \"username\": \"joe__marquez\"\n        },\n        \"twitter\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n            \"username\": \"joelmarquez90\"\n        },\n        \"facebook\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n        },\n        \"valid_local_user\": true,\n        \"verified\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "GetApiUserUser_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/friends",
    "title": "Obtener los amigos del usuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "friends",
            "description": "<p>Listado de amigos de las redes sociales</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"friends\": {\n        \"facebook_friends\": {\n            \"list\": [\n                {\n                    \"id\": \"104412116557897\",\n                    \"name\": \"Juan Losa\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/104412116557897/picture?type=large\"\n                }\n            ],\n            \"count\": 1\n        },\n        \"facebook_pages\": {\n            \"list\": [\n                {\n                    \"id\": \"28686402854\",\n                    \"name\": \"Fernet Branca\",\n                    \"picture\": \"https://graph.facebook.com/v2.3/28686402854/picture?type=large\"\n                }\n            ],\n            \"count\": 1\n        },\n        \"instagram\": {\n            \"list\": [\n                {\n                    \"id\": \"13460080\",\n                    \"name\": \"nike\",\n                    \"picture\": \"https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11809593_769192616523522_1094660024_a.jpg\",\n                    \"username\": \"nike\"\n                }\n            ],\n            \"count\": 1\n        },\n        \"twitter\": {\n            \"list\": [\n                {\n                    \"id\": \"2569881\",\n                    \"name\": \"Ørta\",\n                    \"picture\": \"http://pbs.twimg.com/profile_images/594954985244360705/YWx3Fuju_bigger.png\",\n                    \"username\": \"orta\"\n                }\n            ],\n            \"count\": 1\n        },\n        \"google\": {\n            \"list\": [\n                {\n                    \"id\": \"http://www.google.com/m8/feeds/contacts/90joelmarquez%40gmail.com/base/7c6c92a3883ca8f2\",\n                    \"name\": \"Florencia Aragno\",\n                    \"email\": \"faragno@ecosistemas.com.ar\"\n                }\n            ],\n            \"count\": 1\n        }\n    },\n    \"errors\": {\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Respuesta invalida",
          "content": "HTTP/1.1 200 OK\n{\n    \"friends\": {\n    },\n    \"errors\": {\n        \"facebook_friends\": {\n            \"code\": 190,\n            \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n        },\n        \"facebook_pages\": {\n            \"code\": 190,\n            \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n        },\n        \"instagram\": {\n            \"code\": 400,\n            \"msg\": \"The access_token provided is invalid.\"\n        },\n        \"twitter\": {\n            \"code\": 89,\n            \"msg\": \"Invalid or expired token.\"\n        },\n        \"google\": {\n            \"code\": 89,\n            \"msg\": \"Invalid credentials\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "GetApiUserUser_idFriends",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/friends"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/media",
    "title": "Obtener contenido del usuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": \"55da99dff7c2a1864235b6fb\",\n    \"media\": {\n        \"count\": 4,\n        \"list\": [\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"596020075393642496\",\n                \"type\": \"text\",\n                \"created_time\": 1430937234,\n                \"link\": \"https://twitter.com/statuses/596020075393642496\",\n                \"likes\": 0,\n                \"text\": \"LIVE on #Periscope: Working @ Etermax https://t.co/4cS15HwDk1\",\n                \"user_has_liked\": false\n            },\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"960103625562621136_993803680\",\n                \"type\": \"image\",\n                \"created_time\": 1428673292,\n                \"link\": \"https://instagram.com/p/1S-SkdOYTQfgPBMEYnQ3vXzQw0u5-zsRlm9XY0/\",\n                \"likes\": 6,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11084974_830219477014557_2002237000_n.jpg\",\n                \"text\": \"Máquina de snacks y de cafe en el laburo, cartón lleno!\",\n                \"user_has_liked\": \"\"\n            },\n            {\n                \"provider\": \"facebook\",\n                \"id\": \"10153184467399738\",\n                \"type\": \"image\",\n                \"created_time\": 1427824794,\n                \"link\": \"https://www.facebook.com/photo.php?fbid=10153184467399738&set=a.36885379737.45118.826764737&type=1\",\n                \"likes\": 11,\n                \"media_url\": \"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpt1/t31.0-8/10856832_10153184467399738_425179179183655076_o.jpg\",\n                \"text\": \"Google te pasás loco..\"\n            },\n            {\n                \"provider\": \"facebook\",\n                \"id\": \"104231789737\",\n                \"type\": \"video\",\n                \"created_time\": 1248316817,\n                \"link\": \"\",\n                \"likes\": 0,\n                \"media_url\": \"https://video.xx.fbcdn.net/hvideo-xpa1/v/t42.1790-2/1128968_10151770969524738_48281_n.mp4?oh=5292d676428908d8e4c12316c9c3fd81&oe=55CE3C64\",\n                \"text\": \"\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Respuesta invalida",
          "content": "HTTP/1.1 200 OK\n{\n    \"media\": {\n        \"count\": 0,\n        \"list\": [\n        ]\n    },\n    \"errors\": {\n        \"facebook\": {\n            \"photos\": {\n                \"code\": 190,\n                \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"videos\": {\n                \"code\": 190,\n                \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"statuses\": {\n                \"code\": 190,\n                \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            }\n        },\n        \"instagram\": {\n            \"code\": 400,\n            \"msg\": \"The access_token provided is invalid.\"\n        },\n        \"twitter\": {\n            \"code\": 89,\n            \"msg\": \"Invalid or expired token.\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "GetApiUserUser_idMedia",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/media"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/media/more",
    "title": "Obtener más contenido del usuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": \"55da99dff7c2a1864235b6fb\",\n    \"media\": {\n        \"count\": 4,\n        \"list\": [\n            {\n                \"provider\": \"twitter\",\n                \"id\": \"596020075393642496\",\n                \"type\": \"text\",\n                \"created_time\": 1430937234,\n                \"link\": \"https://twitter.com/statuses/596020075393642496\",\n                \"likes\": 0,\n                \"text\": \"LIVE on #Periscope: Working @ Etermax https://t.co/4cS15HwDk1\",\n                \"user_has_liked\": false\n            },\n            {\n                \"provider\": \"instagram\",\n                \"id\": \"960103625562621136_993803680\",\n                \"type\": \"image\",\n                \"created_time\": 1428673292,\n                \"link\": \"https://instagram.com/p/1S-SkdOYTQfgPBMEYnQ3vXzQw0u5-zsRlm9XY0/\",\n                \"likes\": 6,\n                \"media_url\": \"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11084974_830219477014557_2002237000_n.jpg\",\n                \"text\": \"Máquina de snacks y de cafe en el laburo, cartón lleno!\",\n                \"user_has_liked\": \"\"\n            },\n            {\n                \"provider\": \"facebook\",\n                \"id\": \"10153184467399738\",\n                \"type\": \"image\",\n                \"created_time\": 1427824794,\n                \"link\": \"https://www.facebook.com/photo.php?fbid=10153184467399738&set=a.36885379737.45118.826764737&type=1\",\n                \"likes\": 11,\n                \"media_url\": \"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpt1/t31.0-8/10856832_10153184467399738_425179179183655076_o.jpg\",\n                \"text\": \"Google te pasás loco..\"\n            },\n            {\n                \"provider\": \"facebook\",\n                \"id\": \"104231789737\",\n                \"type\": \"video\",\n                \"created_time\": 1248316817,\n                \"link\": \"\",\n                \"likes\": 0,\n                \"media_url\": \"https://video.xx.fbcdn.net/hvideo-xpa1/v/t42.1790-2/1128968_10151770969524738_48281_n.mp4?oh=5292d676428908d8e4c12316c9c3fd81&oe=55CE3C64\",\n                \"text\": \"\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Respuesta invalida",
          "content": "HTTP/1.1 200 OK\n{\n    \"media\": {\n        \"count\": 0,\n        \"list\": [\n        ]\n    },\n    \"errors\": {\n        \"facebook\": {\n            \"photos\": {\n                \"code\": 190,\n                \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"videos\": {\n                \"code\": 190,\n                \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            },\n            \"statuses\": {\n                \"code\": 190,\n                \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n            }\n        },\n        \"instagram\": {\n            \"code\": 400,\n            \"msg\": \"The access_token provided is invalid.\"\n        },\n        \"twitter\": {\n            \"code\": 89,\n            \"msg\": \"Invalid or expired token.\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "GetApiUserUser_idMediaMore",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/media/more"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:user_id/recomended_friends",
    "title": "Obtener los amigos recomendados",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "recomended_friends",
            "description": "<p>Listado de amigos recomendados</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"recomended_friends\": {\n        \"list\": [\n            {\n                \"_id\": \"55f38c2a8770f003006647f3\",\n                \"name\": \"Alejo García\",\n                \"picture\": \"https://lh4.googleusercontent.com/-Sg1IRuU7yOs/AAAAAAAAAAI/AAAAAAAAAHs/e6gAnjsbU_U/photo.jpg?sz=200\"\n            },\n            {\n                \"_id\": \"55f31b2bdb2c420300835540\",\n                \"name\": \"Rorro Cistaro\",\n                \"picture\": \"https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11336015_808366015944479_1405066425_a.jpg\"\n            },\n            {\n                \"_id\": \"560529dbdf40800300815659\",\n                \"name\": \"Cristian Mastronardi\",\n                \"picture\": \"https://graph.facebook.com/v2.3/10206313793314092/picture?type=large\"\n            },\n            {\n                \"_id\": \"55f233608f0de90300f4ee62\",\n                \"name\": \"Nicolas Brahim\",\n                \"picture\": \"https://graph.facebook.com/v2.3/10206664185514438/picture?type=large\"\n            }\n        ],\n        \"count\": 4\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Respuesta invalida",
          "content": "HTTP/1.1 200 OK\n{\n    \"friends\": {\n    },\n    \"errors\": {\n        \"facebook_friends\": {\n            \"code\": 190,\n            \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n        },\n        \"facebook_pages\": {\n            \"code\": 190,\n            \"msg\": \"Error validating access token: The user has not authorized application 805638479520745.\"\n        },\n        \"instagram\": {\n            \"code\": 400,\n            \"msg\": \"The access_token provided is invalid.\"\n        },\n        \"twitter\": {\n            \"code\": 89,\n            \"msg\": \"Invalid or expired token.\"\n        },\n        \"google\": {\n            \"code\": 89,\n            \"msg\": \"Invalid credentials\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "GetApiUserUser_idRecomended_friends",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/recomended_friends"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/media",
    "title": "Publicar contenido",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "facebook",
            "description": "<p>Determina si el contenido va a ser publicado o no a Facebook</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "twitter",
            "description": "<p>Determina si el contenido va a ser publicado o no a Twitter</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "text",
            "description": "<p>El texto que va a contener el contenido</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": true,
            "field": "file",
            "description": "<p>Archivo a subir</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"facebook\": true,\n  \"twitter\": true,\n  \"text\": \"Basta chicos\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Aclaración: Máximo tamaño de archivo: 50 Mb.</p> ",
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "PostApiUserUser_idMedia",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/media"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/media/like",
    "title": "Dar like",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "facebook_media_id",
            "description": "<p>Id del contenido de Facebook a darle like</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "twitter_media_id",
            "description": "<p>Id del contenido de Twitter a darle fav</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"facebook_media_id\": \"10205843678664227\",\n  \"twitter_media_id\": \"581605355672715264\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Aclaración: si bien los ids de los contenidos son opcionales, al menos uno es requerido para poder darle like en esa red social</p> ",
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "PostApiUserUser_idMediaLike",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/media/like"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/:user_id/media/like",
    "title": "Dar unlike",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "facebook_media_id",
            "description": "<p>Id del contenido de Facebook a darle unlike</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "twitter_media_id",
            "description": "<p>Id del contenido de Twitter a darle unfav</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"facebook_media_id\": \"10205843678664227\",\n  \"twitter_media_id\": \"581605355672715264\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Aclaración: si bien los ids de los contenidos son opcionales, al menos uno es requerido para poder darle unlike en esa red social</p> ",
    "success": {
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "PostApiUserUser_idMediaLike",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/media/like"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/user/:user_id",
    "title": "Actualizar usuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>Nombre del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "picture",
            "description": "<p>Foto del usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"email\":\"unify.argentina@gmail.com\",\n  \"name\":\"Juan Losa\",\n  \"picture\":\"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"__v\": 0,\n        \"_id\": \"55c421354037f03842898378\",\n        \"email\": \"90joelmarquez@gmail.com\",\n        \"main_circle\": {\n            \"user\": \"55c421354037f03842898378\",\n            \"name\": \"Main Circle\",\n            \"_id\": \"55c421364037f03842898379\",\n            \"__v\": 0,\n            \"ancestors\": [\n            ]\n        },\n        \"name\": \"Joel Márquez\",\n        \"google\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n        },\n        \"instagram\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11385614_441266499409188_453477140_a.jpg\",\n            \"username\": \"joe__marquez\"\n        },\n        \"twitter\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n            \"username\": \"joelmarquez90\"\n        },\n        \"facebook\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n        },\n        \"valid_local_user\": true,\n        \"verified\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "PutApiUserUser_id",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/user/:user_id/password",
    "title": "Actualizar password del usuario",
    "group": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOizMTIsImV4cCI6MTQzNzM2NTMxMn0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Nueva password del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirmación de la nueva password del usuario</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "old_password",
            "description": "<p>Antigua password del usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de request",
          "content": "{\n  \"password\":\"hola1234\",\n  \"confirm_password\":\"hola1234\",\n  \"old_password\":\"hola123456\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Aclaración: el old_password se tiene que enviar cuando el usuario tiene el atributo valid_local_user en true, ya que si el usuario se registró con alguna red social, nunca le habrá puesto password a su cuenta, por lo tanto valid_local_user va a estar en false y en ese caso no se tiene que enviar</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta valida",
          "content": "HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"__v\": 0,\n        \"_id\": \"55c421354037f03842898378\",\n        \"email\": \"90joelmarquez@gmail.com\",\n        \"main_circle\": {\n            \"user\": \"55c421354037f03842898378\",\n            \"name\": \"Main Circle\",\n            \"_id\": \"55c421364037f03842898379\",\n            \"__v\": 0,\n            \"ancestors\": [\n            ]\n        },\n        \"name\": \"Joel Márquez\",\n        \"google\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://lh5.googleusercontent.com/-QnDa8Ya8z38/AAAAAAAAAAI/AAAAAAAARw0/ye1DoA5JF9Y/photo.jpg?sz=200\"\n        },\n        \"instagram\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/s150x150/11385614_441266499409188_453477140_a.jpg\",\n            \"username\": \"joe__marquez\"\n        },\n        \"twitter\": {\n            \"display_name\": \"Joel Márquez\",\n            \"picture\": \"http://pbs.twimg.com/profile_images/490125015044456449/O-wWpWq0_bigger.jpeg\",\n            \"username\": \"joelmarquez90\"\n        },\n        \"facebook\": {\n            \"display_name\": \"Joel Márquez\",\n            \"email\": \"90joelmarquez@gmail.com\",\n            \"picture\": \"https://graph.facebook.com/v2.3/10153267328674738/picture?type=large\"\n        },\n        \"valid_local_user\": true,\n        \"verified\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/user/index.js",
    "groupTitle": "Usuarios",
    "name": "PutApiUserUser_idPassword",
    "sampleRequest": [
      {
        "url": "http://api.myunify.io/api/user/:user_id/password"
      }
    ]
  }
] });