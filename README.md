# GetCanvasCourseCode 获取Canvas课程代码
在无访问许可证的情况下获取Canvas上的课程代码。一个 https://github.com/BoYanZh/Canvas-Syncer 的小工具。

Get the code of courses on Canvas without Key required as a tool for https://github.com/BoYanZh/Canvas-Syncer.
## Usage 使用
**使用 https://umjicanvas.com/ 作为例子, 改成你需要的链接.**

**Use https://umjicanvas.com/ as the example, replace this with the canvas url you use.**

打开Canvas页面，选择课程（现在网址是"https://umjicanvas.com/courses"）。打开开发者工具里面的控制台复制`demo.js`中的代码并运行需要的函数。

Open the Canvas Page, choose course (Now the url is "https://umjicanvas.com/courses"). Open 开发者工具里面的控制台 and copy the code in `demo.js` and run the needed function.


## Function introduction
使用 `getCode(n)`，其中 `n` 是已记录的网站名字. 

Use `getCode(n)` where `n` is the name of the site if the site is recorded. 

如果网站还没被记录，使用下面2个函数并且你可以告诉我们你使用的参数让网站上其他使用这个工具的人受益。

the site needed is not recorded, use the following 2 functions and you can tell us the parameters used so that we can record it and benefit others using the tools on the site.


If the site needed is not recorded, use the following 2 functions and you can tell us the parameters used so that we can record it and benefit others using the tools on the site.

- `getCodeN(n,m)` : `n`是课程代码前的字符数，`m`是课程代码后的字符数 `n` is the number of char before the course code and `m` is the number of char after course code

- `getCodeURL(n,m)` : `n`是网址链接（包括`/courses/`），`m`是课程代码后的字符数 `n` is the url of the website(including `/courses/`) and `m` is the number of chars after course code

