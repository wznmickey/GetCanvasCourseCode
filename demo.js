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
function getCodeSJTU_JI() {
    return getCodeN(31, 0);
}
function getCodeSJTU() {
    return getCodeURL("https://oc.sjtu.edu.cn/courses/", 0);
}
function getCode(n) {
    before = {};
    after = {};

    before["SJTU"] = 31;
    after["SJTU"] = 0;
    before["SJTU_JI"] = 31;
    after["SJTU_JI"] = 0;
    //shotcut
    before["JI"] = before["SJTU_JI"];
    after["JI"] = after["SJTU_JI"];

    //i18n
    before["上海交通大学"] = before["SJTU"];
    after["上海交通大学"] = after["SJTU"];
    before["上交"] = before["SJTU"];
    after["上交"] = after["SJTU"];
    before["密院"] = before["SJTU_JI"];
    after["密院"] = after["SJTU_JI"];

    return getCodeN(before[n], after[n]);
}