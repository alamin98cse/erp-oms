1. How to setup
   1.1. place whole application in web server. use appropriate value of parameters in .env 
        APP_URL=http://erp.dev  -- replace with exact domain
		DB_CONNECTION=mysql
		DB_HOST=127.0.0.1
		DB_PORT=3306          -- Database port on which mysql running
		DB_DATABASE=erp       -- create a blank database in mysql and put the database name here
		DB_USERNAME=root      -- database user name 
		DB_PASSWORD=          -- database user password
		MAIL_USERNAME=alamin16au@gmail.com   -- set sender email address
		MAIL_PASSWORD=xxxxxx                 -- password to authenticate 
	
	1.2. run 'php artisan migrate' and 'php artisan db:seed --class=Categories' . This will create tables with proper  relationship.
	
	1.3. The application holding an order.json file containing sample order in ../public direcorty. Right now application will read order from this file. When this application will be atached with the third-party application from where order will come it need to change at line 23 in SaleController.
2. How to operate
   2.1. run http://domain/order . This will place order in the system. Fristly it will check is the customer is an existing one otherwise it will create new customer. Then it will check whether the order is valid/consist any ordered item. If it is valid it creates order with items.
   2.2. If it need to change logical/physical status of any item just click on the field. it will allow you to change status on that page. If you want attach any item with an other you need to go to edit of that item and put the order number.
3. Here I feel I no need to run additional background script as all this will be done based on different action.   
	