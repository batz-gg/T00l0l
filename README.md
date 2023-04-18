# T00l0l
  The following is a function that converts numbers to Mongolian words. The allowed range of input numbers are from 0 to 9007199254740991 or 10^15. The function takes in one parameter, the number to convert. The Mongolian words for all numbers in the range are stored in a number of constant arrays within the function: "ones", "onesAlt", "onesAltH", "tens", and "tenth". To use these constants, the input number is split into 16 digits and each group of digits is then converted to Mongolian words by concatenating the words from the appropriate constant array. The converted words are then concatenated with the appropriate separators (e.g., "тунамал", "зуун") and returned; all multiple spaces are replaced with a single space and the string is trimmed before being returned. If the input number is zero, the function returns "тэг". If the input number is greater than Number.MAX_SAFE_INTEGER, the function returns a warning message.

For example: [Тунамал хөрвүүлэгч](https://eloquent-bubblegum-02fffa.netlify.app/)

Keywords: Эерэг бүхэл 16 оронтой тоог Монгол үг болгон хөрвүүлж хувиргана.👹

![image](https://user-images.githubusercontent.com/87542210/228274240-a3488110-93c5-42df-8f03-cc6ec19740c8.png)

**[GOOGLE SHEETS](https://docs.google.com/spreadsheets) ДЭЭР ТООГ ҮГ РҮҮ ХӨРВҮҮЛЭГЧИЙГ АШИГЛАХ НЬ:**

Google Sheets App Script ашиглан T00l0l функц оруулах заавар нь дараах байдлаар байна:

1. Google Sheets-д шинэ эсвэл одоо байгаа spreadsheet-г нээнэ.
2. Extensions > Apps Script гэсэн цэсийг сонгоно.
3. Script editor доторх кодыг устгана.
4. T00l0l функцээ script editor дотор бичнэ.
5. Дээр талд Save товчлуурыг дарна.

Функцыг хадгалсны дараа та үүнийг Google Sheet доторх бусад функцүүд шиг ашиглаж болно.

![Animation](https://user-images.githubusercontent.com/87542210/232683486-a12ccf62-b01f-42ea-92c3-5a469737bcca.gif)

UPDATE: Текстэн тоог буцаагаад тоо болгодог боллоо😊 || The mn2nm of read_tunamal.js can convert text to number.

[Give me a coffee](https://eloquent-bubblegum-02fffa.netlify.app/khnqr.png)

Made with 💝 in UB @2023
