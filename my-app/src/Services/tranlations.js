import axios from "axios";


// function  changeLanguage(textToTranslate) {
//     let lang;
//     if(language === 'Ukraine'){
//         lang = 'uk|en';
//     }else{
//         lang = 'en|uk'
//     }
//     const options = {
//         method: 'GET',
//         url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
//         params: {langpair: lang, q: textToTranslate, mt: '1', onlyprivate: '0', de: 'a@b.c'},
//         headers: {
//             'X-RapidAPI-Key': '3c38a9602cmsh9e181fc483d187ep1b86b6jsn43a1d5b070f5',
//             'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
//         }
//     };
//
//     axios.request(options).then(function (response) {
//         console.log(response.data.responseData.translatedText)
//         setHeader(response.data.responseData.translatedText)
//         language === 'English' ? setLanguage('Ukraine') : setLanguage('English')
//     }).catch(function (error) {
//         console.error(error);
//     });
//
//
// }