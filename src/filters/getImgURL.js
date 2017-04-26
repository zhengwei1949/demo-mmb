export const getImgURL = (str) => {
    console.log(1);
    var regEx = new RegExp('src=\\"(.)*?\\"');
    var tmp = regEx.exec(str);
    console.log(tmp);
    return tmp[1];
}
