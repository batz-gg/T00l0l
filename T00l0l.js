function doConvert (number){
    const ones = ["", "нэг", "хоёр", "гурав", "дөрөв", "тав", "зургаа", "долоо", "найм", "ес"];
    const onesAlt = ["", "нэг", "хоёр", "гурван", "дөрвөн", "таван", "зургаан", "долоон", "найман", "есөн"];
    const onesAltH = ["", "нэгэн", "хоёр", "гурван", "дөрвөн", "таван", "зургаан", "долоон", "найман", "есөн"];
    const tens = ["", "арав", "хорь", "гуч", "дөч", "тавь", "жар", "дал", "ная", "ер"];
    const tenth = ["", "арван", "хорин", "гучин", "дөчин", "тавин", "жаран", "далан", "наян", "ерэн"];

    process.stdout.write(number + " : ");
    if(number === 0) return 'тэг' ;
    if(number.toString().length > 7) return 'хэтрэш' ;
    // let num = ('0000000000'+ number).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    let num = ('0000000'+ number).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if(!num) return;
    
    let result = num[1] != 0 ? (ones[Number(num[1])] || `${tenth[num[1][0]]} ${ones[num[1][1]]}`) + ' сая ' : '';
    
    result += num[2] != 0 ? (ones[Number(num[2])] || `${tenth[num[2][0]]} ${ones[num[2][1]]}`) + ' зуун ' : '';
    result += num[3] != 0 ? (onesAlt[Number(num[3])] || `${tenth[num[3][0]]} ${num[3][0]!=='0'?onesAltH[num[3][1]]:onesAlt[num[3][1]]}`) + ' мянга ' : '';
    result += num[4] != 0 ? (onesAlt[Number(num[4])] || `${tenth[num[4][0]]} ${ones[num[4][1]]}`) + (num[5] === '00' ? ' зуу ' : ' зуун ') : '';
    result += num[5] != 0 ? (ones[Number(num[5])] || `${(num[5][1]==="0")?tens[num[5][0]]:tenth[num[5][0]]} ${ones[num[5][1]]} `) : '';
    // console.log(num);
    // console.log(num[5]);
    // console.log(num[4][0]);
    // console.log(num[4][1]);
    // console.log(num[5][1]==='0');
    // console.log(result.replace(/\s+/g, ' ').trim().length);

    return result.replace(/\s+/g, ' ').trim();
}

 // Test case for doConvert
// for (let i = 0; i <= 99; i++) console.log(doConvert(i));
// for (let i = 100; i <= 999; i++) console.log(doConvert(i));
// for (let i = 0; i <= 99999; i+=1) console.log(doConvert(i));
// for (let i = 3000; i <= 99999; i+=10000) console.log(doConvert(i));
// for (let i = 3000; i <= 99999; i+=10000) console.log(doConvert(i));

// console.log(doConvert(100000));          // Test case for 2-digit number
// const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(doConvert(randomInteger(1, 99999))); // Test case for number within 99999
// console.log(doConvert(1331567));     // Test case for custom number
// console.log(doConvert(0));           // Test case for '0'
// console.log(doConvert(12345678901)); // Test case for number greater than 7 digits
// console.log(doConvert(3));           // Test case for 1-digit number
// console.log(doConvert(12));          // Test case for 2-digit number
// console.log(doConvert(10));          // Test case for 2-digit number
// console.log(doConvert(123));         // Test case for 3-digit number
// console.log(doConvert(1234));        // Test case for 4-digit number
// console.log(doConvert(12345));       // Test case for 5-digit number
// console.log(doConvert(123456));      // Test case for 6-digit number
// console.log(doConvert(1234567));     // Test case for 7-digit number
// console.log(doConvert(1020056));     // Test case for 7-digit number with alternative ones