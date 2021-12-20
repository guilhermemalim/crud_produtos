base_url :: https://crud-produtos-demo.herokuapp.com/

Models (+id em todos)::
  Product {
    name: string;
    slug: string;
    quantity: number;
  }
  App {
    name: string;
    cnpj: string;
    app_color: string;
  }
  Admin {
    name: string;
  }
  Seller {
    name: string;
  }


Rotas ::
  base_url
      /products
          /all (GET)
            Response: {
              Products[]
            }

          /:slug (GET)
            Response: {
              Product[]
            }

          /create (POST)
            Request body {
              name: string,
              quantity: number,
            }
            Reponse {
              Product
            }

          /update-name/:slug (PATCH)
            Request body {
              name: string
            }
            Reponse {
              Product
            }

          /update-quantity/:slug (PATCH)
            Request body {
              quantity: string
            }
            Reponse {
              Product
            }

          /delete/:slug (DELETE)


      /seller
          / (POST)
            Request body {
              id: string, //id do administrador
              name: string
            }
            Response {
              Seller
            }

      /admin
          / (GET)
            Response {
              Admin[]
            }

          /color (PATCH)
            Request body {
              id,
              app_id,
              color // exemplo: #fffff
            }
            Response {
              App
            }

      /app
          / (GET)
            Response {
              App
            }
