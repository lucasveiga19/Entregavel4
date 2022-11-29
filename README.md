# Entregavel 4 Ambientes de Desenvolvimento

#### Este projeto está rodando o [node](https://nodejs.org/), é recomendavel baixar a versão mais recente na sua maquina e reiniciar.
#### Após baixar os arquivos do repositório, basta executar o terminal e utilizar os seguintes comandos abaixo.
#### Caso ainda não tenha configurado o npm e o jest, recomendo dar o comandos:

~~~
npm install
~~~

~~~
npm install --save-dev jest
~~~

#### Agora que seu ambiente está com as dependências baixadas e configuradas, vamos executar os testes do projeto.
#### Pode observar que na basta tests possuem os testes de cada função na pasta funcoes, tendo um teste extra que executa todos as funções.
#### Para iniciamos vamos executar o seguinte comando:

~~~
npm run test
~~~
#### A seguinte tela será exibida, após executar esse comando acima no terminal.
![image](https://user-images.githubusercontent.com/58401882/204670738-bc5de101-4afe-4b1d-be32-78810b92e050.png)

#### No caso de querer testar um único arquivo de teste unitario para verificar mais aprofundado aquela função, você pode executar o seguinte comando abaixo:

~~~
npm run test AllFunctions.test.js
~~~

#### A seguinte tela será exibida, após executar esse comando acima no terminal.
![image](https://user-images.githubusercontent.com/58401882/204671271-30e92d83-08dd-4420-acf4-769d9cfe9cc8.png)

* #### Se observar bem usamos o mesmo comando e apenas adicionamos o nome específico do teste que queremos executar.
