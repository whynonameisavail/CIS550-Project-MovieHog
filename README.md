# CIS550-Project-MovieHog
## List of dependencies

**Client**

```
package.json

   "@testing-library/jest-dom": "^5.16.3",
   "@testing-library/react": "^12.1.4",
   "@testing-library/user-event": "^13.5.0",
   "antd": "^4.19.3",
   "react": "^18.0.0",
   "react-dom": "^18.0.0",
   "react-scripts": "5.0.0",
   "web-vitals": "^2.1.4"
```

**Server**

```
package.json

       "cors": "^2.8.5",
       "express": "^4.17.3",
       "express-session": "^1.15.6",
       "mysql": "^2.18.1",
       "node-fetch": "^3.0.0",
       "nodemon": "^2.0.12",
       "supertest": "^6.1.6"
```

## Instructions for building it locally

(1) Run npm install in both server and client

(2) Check if the config.json file includes the correct information in order to connect the database appropriately

**Server**

```
{
   "rds_host": "cis550project.cknfcl4yexrb.us-east-1.rds.amazonaws.com",
   "rds_port": "3306",
   "rds_user": "admin",
   "rds_password" : "MovieHog",
   "rds_db": "movies",
   "server_host": "127.0.0.1",
   "server_port":"8080"
}
```

**Client**

```
{
   "server_host": "127.0.0.1",
   "server_port":"8080"
}
```

(3) Then, run npm run start under both server and client sequentially.

(4) API should be initialized on http://localhost:3000/

(5) Enter preset account information to enter the application
Username: john
Password: pwd1
