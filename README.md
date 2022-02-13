# GetCanvasCourseCode
Get the code of courses on Canvas without Key required.

## Usage
**Use https://umjicanvas.com/ as the example, replace this with the canvas url you use.**
Open the Canvas Page,choose course(Now the url is "https://umjicanvas.com/courses") 
Copy the code in `demo.js` and run the needed function.


## Function introduction

Use `getCode(n)` where `n` is the name of the site if the site is recorded. 

If the site needed is not recorded, use the following 2 functions and you can tell us the parameters used so that we can record it and benefit others using the tools on the site.

- `getCodeN(n,m)` : `n` is the number of char before the course code and `m` is the number of char after course code

- `getCodeURL(n,m)` : `n` is the url of the website(including `/courses/`) and `m` is the number of chars after course code

