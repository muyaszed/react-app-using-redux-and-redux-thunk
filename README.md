Commit: login form with client side validation
setup react project, eslint, react-router and implement Login Form with client-side validation.

Commit: make async request to server and render server validation errors
- setup Redux and create our first reducer and thunk action
- make async request to server
- setup backend server with ExpressJS and use babel to use latest and greatest JS

Commit: user authentication && login and logout
- setup mongoose and create User model
- implement user authentication by searching for user in database and check password
- on react side we'll implement conditional Login/Logout links, that depend on user authentication state
- make login permanent by storing JWT in local storage, so user can reload page and stay logged in
- user logout

Commit: Autourized routes && User signup
- implement user sign up
- protect routes by implementing `UserRoute` and `GuestRoute` components
- learn about gotcha with `react-router` and `react-redux`'s `connect` function and how to deal with it
- add email uniqueness validation to `User` model on backend
