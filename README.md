App description:

This is search engine app, that searches for most relevant gif. Using IBM AI Watson technology, it can scan throughout websites, articles, phrases, words and return most relevant gif from https://giphy.com/. It also displays 5 last gif of specific user.

Live demo: https://master.ddhgbk9pm1vsb.amplifyapp.com/ (deployed on AWS cloud)

Additional resources:

To get your giphy API please visit: https://developers.giphy.com/branch/master/docs/api/
To get started with IBM Watson technology please visit: https://cloud.ibm.com/docs/natural-language-understanding?topic=natural-language-understanding-getting-started

Client side is built with React.

Server side is built with Node, Express and MySQL on https://freemysqlhosting.net/

Development: You can clone this app by copying this code in to your terminal:

'git clone https://github.com/Rokas214/Service my-app'

Install all necessary packages:

'npm install'

Database connected on https://freemysqlhosting.net/ but you can do it on your own machine or cloud platform of your choise (AWS, Azure, IBM Cloud)

To create your database table run this sql script:

CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT,email TEXT, password TEXT)

CREATE TABLE gif_history (id INT PRIMARY KEY AUTO_INCREMENT,url TEXT, email TEXT);

Create file called .env in server root directory, define local variables. If you plan on running app locally define PORT like so PORT=8080. Boilerplate for server .env file can be found in server root directory, .env.example file.
