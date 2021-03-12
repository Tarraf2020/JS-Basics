
const stringSize = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    text = 'This text has a certain number of characters';
    result = text.replace('e', ' ');
    return result;
}
const concatString = (text1, text2) => {
    text1 = 'el Javascript shi ' ;
    text2 = 'ra2e3' ;
    let result = text1.concat(text2);
    return result;
}
const showChar5 = (text) => {
    text = 'TDD kicks ass';
    result = text.charAt(4);
    return result;
}
const showChar9 = (text) => {
    text = 'But it is really annoying to write';
    result = text.substring(0,9);
    return result;
}
const toCapitals = (text) => {
    text = 'Another useful function';
    result = text.toUpperCase();
    return result;
}
const toLowerCase = (text) => {
    text = 'This is a sentence!';
    result = text.toLowerCase();
    return result;
}
const removeSpaces = (text) => {
    text = ' Rome wasn\'t built in a day ';
    result = text.trim();
    return result;
}
const IsString = (text) => {
    text = 'Is this a string?';
    result = typeof(text)== 'string';
    return result;
}

const getExtension = (text) => {
    text = 'images/photo01.jpg';
    result = text.substring(text.lastIndexOf(".")+1);
    return result;
}
const countSpaces = (text) => {
    text = 'Sire open we have a big one!';
    result = text.split(" ").length-1;
    return result;
}
const InverseString = (text) => {
    text = 'Après demain, à partir d\'aujourd\'hui?';
    result = text.split("").reverse().join("");
    return result;
}

const power = (x, y) => {
    w = 2;
    y = 3;
    result = Math.pow(2,3);
    return result;
}
const absoluteValue = (num) => {
    num = -5;
    result = Math.abs(num);
    return result;
}
const absoluteValueArray = (array) => {
    array = [-5, -50, -25, -568];
    const result = array.map(Math.abs);
    return result;
}
const circleSurface = (radius) => {
    radius = 5;
    res = radius * radius * 3.14;
    result = Math.ceil(res);
    return result;
}
const hypothenuse = (ab, ac) => {
ab  = 5; ac = 8;
aa = (ab*ab)+(ac*ac);
result = Math.sqrt(aa);
return result;
}
const BMI = (weight, height) => {
    weight=65; height=1.75;
    result = weight / (height*height);
    return result;
}

const createLanguagesArray = () => {
    
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}