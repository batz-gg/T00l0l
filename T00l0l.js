// ==========================================================================================
// Title:   #Tunamal - Converts until 9007199254740991 or 10^16 numbers to Mongolion words😉
// Author:  Batzorig Gonchigsumlaa
// email:   batz.gg@gmail.com
// Date:    03 Mar 2023
//===========================================================================================

function nm2mn (tunamal){
    const ones = ["", "нэг", "хоёр", "гурав", "дөрөв", "тав", "зургаа", "долоо", "найм", "ес"];
    const onesAlt = ["", "нэг", "хоёр", "гурван", "дөрвөн", "таван", "зургаан", "долоон", "найман", "есөн"];
    const onesAltH = ["", "нэгэн", "хоёр", "гурван", "дөрвөн", "таван", "зургаан", "долоон", "найман", "есөн"];
    const tens = ["", "арав", "хорь", "гуч", "дөч", "тавь", "жар", "дал", "ная", "ер"];
    const tenth = ["", "арван", "хорин", "гучин", "дөчин", "тавин", "жаран", "далан", "наян", "ерэн"];

    process.stdout.write(tunamal + " : ");
    if(tunamal === 0) return 'тэг' ;
    if(tunamal > Number.MAX_SAFE_INTEGER) return '⚠️  АНХААР: Тунамалын оронгоос хэтэрлээ';

    let num = ('0000000000000000'+ tunamal).slice(-16).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/); // тунамал 

    if(!num) return;
    
    let result = num[1] != 0 ? (onesAlt[Number(num[1])] || `${tenth[num[1][0]]} ${onesAlt[num[1][1]]}`) + ' тунамал ' : '';

    result += num[2] != 0 ? (onesAlt[Number(num[2])] || `${tenth[num[2][0]]} ${onesAlt[num[2][1]]}`) + ' зуун ' : '';
    result += num[3] != 0 ? (onesAlt[Number(num[3])] || `${tenth[num[3][0]]} ${onesAlt[num[3][1]]}`) + ' их наяд ' : '';

    result += num[4] != 0 ? (onesAlt[Number(num[4])] || `${tenth[num[4][0]]} ${onesAlt[num[4][1]]}`) + ' зуун ' : '';
    result += num[5] != 0 ? (onesAlt[Number(num[5])] || `${tenth[num[5][0]]} ${onesAlt[num[5][1]]}`) + ' тэрбум ' : '';
    
    result += num[6] != 0 ? (onesAlt[Number(num[6])] || `${tenth[num[6][0]]} ${onesAlt[num[6][1]]}`) + ' зуун ' : '';
    result += num[7] != 0 ? (onesAlt[Number(num[7])] || `${tenth[num[7][0]]} ${onesAlt[num[7][1]]}`) + ' сая ' : '';
    
    result += num[8] != 0 ? (onesAlt[Number(num[8])] || `${tenth[num[8][0]]} ${ones[num[8][1]]}`) + ' зуун ' : '';
    result += num[9] != 0 ? (onesAlt[Number(num[9])] || `${tenth[num[9][0]]} ${num[9][0]!=='0' ? onesAltH[num[9][1]] : onesAlt[num[9][1]]}`) + ' мянга ' : (num[8] !== '0' ? ' мянга ' : '');
    result += num[10] != 0 ? (onesAlt[Number(num[10])] || `${tenth[num[10][0]]} ${ones[num[10][1]]}`) + (num[11] === '00' ? ' зуу ' : ' зуун ') : '';
    result += num[11] != 0 ? (ones[Number(num[11])] || `${(num[11][1]==="0")?tens[num[11][0]]:tenth[num[11][0]]} ${ones[num[11][1]]} `) : '';

    return result.replace(/\s+/g, ' ').trim();
}