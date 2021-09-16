### UI Features 

1. Used ant design (https://ant.design/) library to display table
2. Used scss for styling
3. Used context API for state management
4. Used Navi for routing
5. Support for protected and unprotected route
    1. Go to  http://localhost:3000/profile it will redirect you to http://localhost:3000/login, because you are trying to access a protected route.
    2. Uncomment Line Number 16 in index.tsx {//localStorage.setItem("data_token_tookit","XYZ-ABC-DEF")}  now you have set te access token (Loged In) Now you can access http://localhost:3000/profile

6. Single services file to handle server calls
7. Company List and Company details two component to demonstrate state management 