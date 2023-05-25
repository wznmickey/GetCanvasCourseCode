function getCode() {
    try {
        temp = document.getElementsByClassName("course-list-table-row");
        data = [];
        for (let i = 0; i < temp.length; i++) {
            try {
                url = temp[i].getElementsByClassName("course-list-course-title-column")[0].lastElementChild;
                x = url.href.split("/");
                y = x[x.length - 1]
                data.push(Number(y));
            }
            catch (err) {
                console.log(err);
            }
        }
        ans = { "courseIDs": data };
        return JSON.stringify(ans);
    }
    catch (err) {

    }
}
getCode();