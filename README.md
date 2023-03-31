# T00l0l
  The following is a function that converts numbers to Mongolian words. The allowed range of input numbers are from 0 to 9007199254740991 or 10^15. The function takes in one parameter, the number to convert. The Mongolian words for all numbers in the range are stored in a number of constant arrays within the function: "ones", "onesAlt", "onesAltH", "tens", and "tenth". To use these constants, the input number is split into 16 digits and each group of digits is then converted to Mongolian words by concatenating the words from the appropriate constant array. The converted words are then concatenated with the appropriate separators (e.g., "тунамал", "зуун") and returned; all multiple spaces are replaced with a single space and the string is trimmed before being returned. If the input number is zero, the function returns "тэг". If the input number is greater than Number.MAX_SAFE_INTEGER, the function returns a warning message.

Assisted by CodeGPT

Made with 💝 in UB @2023

Tested on nodeMon.js && Jest.js

For example: [https://eloquent-bubblegum-02fffa.netlify.app/](http://bit.ly/40Mxy7F)

Keywords: Эерэг бүхэл 16 оронтой тоог Монгол үг болгон хөрвүүлж хувиргана.👹

![image](https://user-images.githubusercontent.com/87542210/228274240-a3488110-93c5-42df-8f03-cc6ec19740c8.png)

UPDATE: Текстэн тоог буцаагаад тоо болгодог боллоо😊 || The mn2nm of read_tunamal.js can convert text to number.

Give me a coffee: http://bit.ly/3KmOwEj


