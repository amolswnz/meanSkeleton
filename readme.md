# MEAN Application

### Walking skeleton
0. `npm init`
0. `npm install express --save`
0. Git Repo
    * `git init`
    * Create .gitignore file
    * Add the directory names in this file that you want to ignore in commit (eg node_modules)
    * `git add .`
    * `git commit -m "Project Init"`
0. Bower components
    * Create .bowerrc file
    * Add the directory name to specify the vendor files location
    ```
    {
        "directory": "public/vendor"
    }```
    * `bower init`
    * Install client side dependencies with bower
        * bootstrap
        * toastr
        * angular
        * angular-resource
        * angular-route
    * `bower install bootstrap toastr angular angular-resource angular-route --save`
0. Create node application starting point index.js
0. Add view engine `npm install pug --save` ([More info on pug  ](https://pugjs.org/language/attributes.html))
0. Install dependencies
    * stylus
    * moragan
    * body-parser
    * `npm install stylus morgan body-parser --save`
0. MongoDB
    * `npm install mongoose --save`
    * Connection path mongodb://`dbUser`:`dbPwd`@`dbhost`:`dbPort`/`dbName`
0. Adding Stylus
0. DONE
