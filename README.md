# WeBlog

## Steps to launch the project
First, clone the entire project

### To launch the frontend 
1. `cd client`
2. `npm i`
3. `npm run start`
4. Create a new .env file in the client folder
REACT_APP_API_KEY=`7fbeff6f514f42f59fb852e44770e829`
You can get a new API key from the `https://newsapi.org/` as well (or you can use my API key)

### To launch the backend
1. `cd backend`
2. `npm i`
3. `node index.js`

****
### To Set Up Postgresql and Sequalize (For Mac Users)
1. Install PostgreSQL using Homebrew by running `brew install PostgreSQL` in your terminal, or you can download Postgresl directly from `https://www.postgresql.org/download/`
2. To create a PostgreSQL account, run the script in your terminal: `sudo -u Postgres createuser YOURUSERNAME`. For example, you script can look like this: `sudo -u postgres createuser myname044`
3. To verify if you have successfully created a PostgreSQL account, run `sudo -u postgres psql`. This command logs you into the PostgreSQL interface. Once you are logged in, you can list all roles (users are also called roles in PostgreSQL) with this command: `\du`. You should be able to see something like this: 
<img width="647" alt="postgres_setup1" src="https://github.com/minh197/WeBlog/assets/61608148/1eb03f7c-700e-4434-b558-0ce0b1530926">

After you are done checking, you can exit the PostgreSQL interface by running `\q`

4. To log into your PostgreSQL account, run `psql -U username`
5. To connect our local database locally, run `psql -U YOURUSERNAME -h localhost -d travelblog`
6. Open the `pgAdmin4` to view the PostgreSQL GUI, if successfully connected, you should see something like this:
<img width="1505" alt="postgress_setup2" src="https://github.com/minh197/WeBlog/assets/61608148/5197e8b0-bdd3-4ff0-b950-a3957bb19efd">

7. Now, after our database is up and running, lets set up **Sequalize** together. Sequalize is a promise-based `Node.js` ORM that supports PostgreSQL
   + Open a new terminal window, run `npm install sequelize pg pg-hstore`
   + Navigate to the **backend --> sequalize.js**; In the `sequalize.js` Replace my username/password with yours
   + In the terminal, run `node testConnection.js` to test the local connection between Sequalize and Postgresql. If successfully connected, you should see something like this:
<img width="639" alt="sequalize-setup" src="https://github.com/minh197/WeBlog/assets/61608148/4d4d56ae-bfea-4b62-86af-401eb57016b4">
