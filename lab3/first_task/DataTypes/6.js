function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy eoocdkp P<<<<') );
alert( checkSpam('freepldsx[zlsdc') );
alert( checkSpam("innocent rabbit") );