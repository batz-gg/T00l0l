# T00l0l
  The following is a function that converts numbers to Mongolian words. The allowed range of input numbers are from 0 to 9007199254740991 or 10^15. The function takes in one parameter, the number to convert. The Mongolian words for all numbers in the range are stored in a number of constant arrays within the function: "ones", "onesAlt", "onesAltH", "tens", and "tenth". To use these constants, the input number is split into 16 digits and each group of digits is then converted to Mongolian words by concatenating the words from the appropriate constant array. The converted words are then concatenated with the appropriate separators (e.g., "тунамал", "зуун") and returned; all multiple spaces are replaced with a single space and the string is trimmed before being returned. If the input number is zero, the function returns "тэг". If the input number is greater than Number.MAX_SAFE_INTEGER, the function returns a warning message.

Assisted by CodeGPT

Made with 💝 in UB @2023

Tested on nodeMon.js && Jest.js

For example: https://eloquent-bubblegum-02fffa.netlify.app/

Keywords: Эерэг бүхэл 16 оронтой тоог Монгол үг болгон хөрвүүлж хувиргана.👹

![image](https://user-images.githubusercontent.com/87542210/228274240-a3488110-93c5-42df-8f03-cc6ec19740c8.png)

CDN Usage of JsDeliver: import nm2mn from 'https://cdn.jsdelivr.net/gh/batz-gg/T00l0l@main/tunamal.js';

GIST.GITHUB: https://gist.github.com/batz-gg/860db8462cac4c652b2ecbad1290a7c9

Give me a coffee: ![338381102_677069737756510_2853259805913367190_n](https://user-images.githubusercontent.com/87542210/228422577-14daf642-c642-4afd-bc24-e7821c347724.png)
