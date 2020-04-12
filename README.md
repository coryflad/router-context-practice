# GoogleBook API React

## Components Structure
* __Index.js__ (stateless)
    * __ThemeContext.js__ (context provider) - sends the _"theme"_ props and _"toggleTheme"_ callback prop
    * __App.js__ (stateless) 
        *__ThemeContext.js__ (context consumer) - gets the _"theme"_ props and _"toggleTheme"_ callback prop
        * __Button.js__ (stateless) 
            *__ThemeContext.js__ (context consumer) - gets the _"theme"_ props and _"toggleTheme"_ callback prop
        * __Error.js__ (stateless)  
        * __Home.js__ (stateless) 
        * __Navigation.js__ (stateless)  
        * __Search.js__ (stateful) 
            * __Book.js__ (stateless) - gets the _"title"_ and _"description"_ from the __Search.js__