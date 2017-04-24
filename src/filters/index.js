/*import extractURL from './extractURL.js'
import replaceURL from './replaceURL.js'*/

export default {
    // 从网址中将网页名提取出来
    extractURL: (str) => {
        var strTmp = str;
        return strTmp.replace(/.html/g, '');
    },
    // 替换字符串
    replaceURL: (str, oldStr, newStr) => {
        return str.replace(oldStr, newStr);
    },
    // 获取后台返回的图片标签中的图片链接
    getImgURL: (str)=>{
        console.log(1);
        var regEx = new RegExp('src=\\"(.)*?\\"');
        var tmp = regEx.exec(str);
        console.log(tmp);
        return tmp[1];
    }
};
