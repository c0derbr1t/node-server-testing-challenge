## Features

- Admin can see employees
- Admin can see admins
- Admin can see one employee
- Admin can see one admin
- Admin can create account
- Admin can login

-----

- Employee can see employees
- Employee can create account
- Employee can login
- Employee can add products
- Employee can delete products

-----
-----
-----


## Table

|Feature|Method|URL|Access|
|:--------------------------------------|:-----------|:---------------------------|:---------------|
|View all employees|GET|/api/employees|admins, employees|
|View all admins|GET|/api/admins|admin|
|View one employee|GET|/api/employees/:id|admins, employees|
|View one admin|GET|/api/admins/:id|admins|
|View list of all products|GET|/api/products/|admins, employees|
|View one product|GET|/api/products/:id|admins, employees|
|Add products|PUT|/api/products/|employees|
|Delete products|DELETE|/api/products/:id|employees|
|Create an account|POST|/api/auth/register|admins, employees|
|Log in|POST|/api/auth/login|admins, employees|

-----
-----
-----

## Employee

- id
- name
- products


## Admin

- id
- name


## Products

- id
- name
- description
- price

