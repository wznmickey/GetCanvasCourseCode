// ==UserScript==
// @name        getCanvasCourseCode
// @namespace   getCanvasCourseCode
// @match       *://*canvas*/*
// @grant       none
// @version     1.0
// @author      wznmickey
// @description getCanvasCourseCode and show on the top of the page
// ==/UserScript==
function getCodeN(n, m) {
    try {
        temp = document.getElementsByClassName("course-list-table-row");
        data = [];
        for (let i = 0; i < temp.length; i++) {
            try {
                url = temp[i].getElementsByClassName("course-list-course-title-column")[0].lastElementChild;
                data.push(Number(url.href.slice(n, url.href.length - m)));
            }
            catch (err) {

            }
        }
        ans = { "courseIDs": data };
        return JSON.stringify(ans);
    }
    catch (err) {

    }
}
function getCodeURL(n, m) {
    return getCodeN(n.length, m);
}
function showID(st)
{
  x=document.createElement("div");
  x.innerHTML=st;
  y=document.getElementsByClassName("header-bar")[0].parentNode;
  y.insertBefore(x,document.getElementsByClassName("header-bar")[0]);
  console.log(st);
}
showID(getCodeURL(window.location.href+1),0);
