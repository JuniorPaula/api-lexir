## API

## Api para fins de teste / processo de seleção.

A Api está configurada para a inserção de carros na base de dados onde podem ser passados os parâmetros de **marca**, **modelo**, **ano**, **preco** .

### Tecnologias utilizadas:
* NodeJS
* Express
* Nodemon
* Sequelize
* Mysql

============================================
:------ COMO RODAR O ARQUIVO BAIXADO ------:
============================================

## Para instalar as dependências

### npm install

## Configurações database

Crie um arquivo ```.env``` na raiz do projeto, configure de acordo com sua base de dados, as configurações do ```process.env``` estão no diretótio **src/config/database**

## endpoints

**Listar todos os carros**

Retorna um ```json``` com todo os carros.

~~~
http://localhost:${port}
~~~

**Listar apenas um carro**

Passar o id como parâmentro na url, retorna um ```json``` com carro selecionado.

~~~
http://localhost:${port}/id
~~~

**Criar um carro**

Passar no body da requisição os campos **marca**, **modelo**, **ano**, **valor**, retorna um ```json``` com carro criado.

~~~
http://localhost:${port}
~~~

**Atualizar um carro**

Passar o id como parâmentro na url, retorna um ```json``` com o carro atualizado.

~~~
http://localhost:${port}/id
~~~

**Detelar um carro**

Passar o id como parâmentro na url, retorna ```null``` se o carro for deletado.

~~~
http://localhost:${port}/id
~~~
