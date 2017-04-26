export const extractURL = (str)=>{
	var strTmp = str;
    return strTmp.replace(/.html/g, '');
}