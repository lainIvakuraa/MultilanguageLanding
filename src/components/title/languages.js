let siteLang = 'eng'
const engLang = {
  titleAbout:'About',
  titleDestinations:'Destinations',
  titleForm:'Form',
  titleNews:'News'
}
const chiLang = {
  titleAbout:'关于',
  titleDestinations:'目的地',
  titleForm:'形状',
  titleNews:'新闻'
}
let correctLang = {}
const changeLang = function(lang) {
  if (lang='chi') {
    correctLang = chiLang;
  }
  console.log(siteLang)
  console.log(correctLang)
}
const setLang = function(lang) {
  if (lang='eng') {
    correctLang = engLang;
  }
  if (lang='chi') {
    correctLang = chiLang;
  }
  console.log(correctLang)
}

export default {changeLang, setLang}