import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/css/style.css'
import './App.css';
import PopularDestinations from './components/destinations/PopularDestinations'
import Join from './components/joinUs/Join'
import FacultyMembers from './components/FacultyMembers/FacultyMembers';
import Title from './components/title/Title'
import Footer from './components/footer/Footer'
import News from './components/news/News'
/*import setLang from './components/title/languages'*/

function App() {
const engLang = {
  titleAbout:'About',
  titleDestinations:'Destinations',
  titleForm:'Form',
  titleNews:'News',
  titleMembers:'Members',
  titleLanguage:'Language',
  titleWelcome:'Welcome to ',
  titleVladivostok:'Vladivostok',
  titleVVSU:'VVSU',
  titleITS:'ITS',
  destinationsTitle:'Popular Destinations',
  destinationSoftwareEngineeringTitle:'Software Engineering',
  destinationSoftwareEngineeringDesc:'The direction of training a specialist in the development of software products for various purposes',
  destinationSoftwareEngineeringPlaceCount:'25',
  destinationSoftwareEngineeringPlace:'budget places',
  destinationSoftwareEngineeringReadBtn:'Read',
  destinationSoftwareEngineeringViewAllBtn:'View all destinations',
  joinTitle:'Join us',
  joinDesc1:'Submit your documents right now',
  joinDesc2:' and study for a promising direction',
  joinIncoming:'ANNUALLY INCOMING',
  joinIncomingSucc:'STUDENTS SUCCESSFULLY GRADUATED',
  joinGraduated:'GRADUATED',
  joinGraduatedSuc:'STUDENTS SUCCESSFULLY GRADUATED',
  joinChooseDirection:'CHOOSE DIRECTION',
  joinName:'Name',
  joinSurname:'Surname',
  joinDirection:'Direction',
  joinAgree:'I agree for personal data processing',
  joinAgreeFeetback:"You must agree before submitting.",
  joinSubmit:'Submit',
  facultyMembersTitle:'Faculty Members',
  facultyMembersDesc:'Our irreplaceable teachers wil teach you everything that will be useful to you in future',
  facultyMembersLevchenkoDesc:'Assistant',
  facultyMembersGrinyakDesc:'Doctor of Technical Sciences',
  facultyMembersKiykovaDesc:'PhD in Economics Department head',
  newsTitle:'Latest News',
  newsMainNewTitle:'The number of Chinese partner universities is increasing at VVGU',
  newsMainNewAuthor:'ADMIN',
  newsMainNewDate:'SEPTEMBER 9, 2016',
  newsMainNewDesc:'The Rector of VVGU Tatiana Terentyeva and Ms. He Ying, Rector of one of the largest universities in China...',
  newsSideNew1Title:'VVGU together with Chinese scientists held the second International Masters Forum in Harbin',
  newsSideNew1Author:'ADMIN',
  newsSideNew1Date:'JUNE 25, 2015',
  newsSideNew2Title:'Warm greetings from China: Graduates of the Institute of Pedagogy and Linguistics share their experience.',
  newsSideNew2Author:'ADMIN',
  newsSideNew2Date:'JUNE 25, 2015',
  newsSideNew3Title:'New prospects for cooperation between VVGU and the Chinese University of Culture',
  newsSideNew3Author:'ADMIN',
  newsSideNew3Date:'JUNE 25, 2015',
  newsSideNew4Title:'VVGU discussed the trends in the development of Chinese law',
  newsSideNew4Author:'ADMIN',
  newsSideNew4Date:'JUNE 25, 2015',
  newsMoreNewsBtn:'More News',
  footerSubmitTitle:'Here you will be able to get the best education',
  footerSubmitDesc:'You will be able to achieve all your goals',
  footerSubmitBtn:'Submit documents',
  footerInformation:'Information',
  footerAboutUs:'About Us',
  footerInformationAbout:'Information about the education organization',
  footerStudyDestinations:'Study Destinations',
  footerPartner:'Partner Universities',
  footerContactsTitle:'Contacts',
  footerLocationTitle:'Location'
}
const chiLang = {
  titleAbout:'关于',
  titleDestinations:'目的地',
  titleForm:'形状',
  titleNews:'新闻',
  titleMembers:'成员',
  titleLanguage:'语言',
  titleWelcome:'欢迎来到',
  titleVladivostok:'符拉迪沃斯托克',
  titleVVSU:'VVSU',
  titleITS:'ITS',
  destinationsTitle:'热门目的地',
  destinationSoftwareEngineeringTitle:'软件工程',
  destinationSoftwareEngineeringDesc:'训练专家开发各种用途的软件产品的方向',
  destinationSoftwareEngineeringPlaceCount:'25',
  destinationSoftwareEngineeringPlace:'预算场所',
  destinationSoftwareEngineeringReadBtn:'阅读',
  destinationSoftwareEngineeringViewAllBtn:'查看全部',
  joinTitle:'加入我们',
  joinDesc1:'现在就提交你的文件',
  joinDesc2:'为一个有前途的方向而学习',
  joinIncoming:'每年访',
  joinGraduated:'毕业了',
  joinIncomingSucc:'成功毕业的学生比例',
  joinChooseDirection:'选择方向',
  joinName:'名称',
  joinSurname:'姓氏',
  joinDirection:'方向',
  joinAgree:'我同意进行个人数据处理',
  joinAgreeFeetback:"你必须在提交前同意。",
  joinSubmit:'提交',
  facultyMembersTitle:'教职员工',
  facultyMembersDesc:'我们不可替代的老师会教你一切对你未来有用的东西。',
  facultyMembersLevchenkoDesc:'助理',
  facultyMembersGrinyakDesc:'技术科学博士',
  facultyMembersKiykovaDesc:'经济学博士，系主任',
  newsTitle:'最新新闻',
  newsMainNewTitle:'VVGU的中国合作大学的数量正在增加',
  newsMainNewAuthor:'管理员',
  newsMainNewDate:'2016年9月9日',
  newsMainNewDesc:'维多利亚大学校长塔蒂亚娜-捷伦蒂耶娃和中国最大的大学之一的校长何颖女士...',
  newsSideNew1Title:'维多利亚大学与中国科学家在哈尔滨举办第二届国际大师论坛',
  newsSideNew1Author:'管理员',
  newsSideNew1Date:'2015年6月25日',
  newsSideNew2Title:'来自中国的热情问候： 教育学和语言学研究所的毕业生分享他们的经验。',
  newsSideNew2Author:'管理员',
  newsSideNew2Date:'2015年6月25日',
  newsSideNew3Title:'VVGU与中国文化大学合作的新前景',
  newsSideNew3Author:'管理员',
  newsSideNew3Date:'2015年6月25日',
  newsSideNew4Title:'VVGU讨论了中国法律发展的趋势',
  newsSideNew4Author:'管理员',
  newsSideNew4Date:'2015年6月25日',
  newsMoreNewsBtn:'更多新闻',
  footerSubmitTitle:'在这里，你将能够得到最好的教育',
  footerSubmitDesc:'你将能够实现你的所有目标',
  footerSubmitBtn:'提交文件',
  footerInformation:'信息',
  footerAboutUs:'关于我们',
  footerInformationAbout:'关于教育组织的信息',
  footerStudyDestinations:'学习目的地',
  footerPartner:'伙伴大学',
  footerContactsTitle:'契约',
  footerLocationTitle:'地点'
}
let [siteLang, changeSiteLang] = useState(engLang)
const changeLangChi = function() {
  changeSiteLang(chiLang)
}
const changeLangEng = function () {
  changeSiteLang(engLang)
}
  return (
    <div className="App">
        <Title siteText={{
          About:siteLang.titleAbout, 
          Destinations:siteLang.titleDestinations, 
          Form:siteLang.titleForm, 
          News:siteLang.titleNews,
          Members:siteLang.titleMembers, 
          Language:siteLang.titleLanguage,
          Welcome:siteLang.titleWelcome,
          Vladivostok:siteLang.titleVladivostok,
          VVSU:siteLang.titleVVSU,
          ITS:siteLang.titleITS, 
          changeFuncChi:changeLangChi, 
          changeFuncEng:changeLangEng}}></Title>
        <PopularDestinations siteText={{
          Title:siteLang.destinationsTitle,
          destinationSoftwareEngineeringTitle1:siteLang.destinationSoftwareEngineeringTitle,
          destinationSoftwareEngineeringDesc1:siteLang.destinationSoftwareEngineeringDesc,
          destinationSoftwareEngineeringPlaceCount1:siteLang.destinationSoftwareEngineeringPlaceCount,
          destinationSoftwareEngineeringTitle2:siteLang.destinationSoftwareEngineeringTitle,
          destinationSoftwareEngineeringDesc2:siteLang.destinationSoftwareEngineeringDesc,
          destinationSoftwareEngineeringPlaceCount2:siteLang.destinationSoftwareEngineeringPlaceCount,
          destinationSoftwareEngineeringTitle3:siteLang.destinationSoftwareEngineeringTitle,
          destinationSoftwareEngineeringDesc3:siteLang.destinationSoftwareEngineeringDesc,
          destinationSoftwareEngineeringPlaceCount3:siteLang.destinationSoftwareEngineeringPlaceCount,
          destinationSoftwareEngineeringPlace:siteLang.destinationSoftwareEngineeringPlace,
          destinationSoftwareEngineeringReadBtn:siteLang.destinationSoftwareEngineeringReadBtn,
          destinationSoftwareEngineeringViewAllBtn:siteLang.destinationSoftwareEngineeringViewAllBtn
        }}></PopularDestinations>
        <Join siteText={{
          title:siteLang.joinTitle,
          desc1:siteLang.joinDesc1,
          desc2:siteLang.joinDesc2,
          incoming:150, 
          incomingText:siteLang.joinIncoming,
          graduated:1500, 
          graduatedText:siteLang.joinGraduated,
          success:95,
          successText:siteLang.joinIncomingSucc,
          chooseDirection:siteLang.joinChooseDirection,
          name:siteLang.joinName,
          surname:siteLang.joinSurname,
          direction:siteLang.joinDirection,
          agreement:siteLang.joinAgree,
          agreementFeedback:siteLang.joinAgreeFeetback,
          submit:siteLang.joinSubmit
          }}></Join>
        <FacultyMembers siteText={{
          title:siteLang.facultyMembersTitle,
          desc:siteLang.facultyMembersDesc,
          levchenkoDesc:siteLang.facultyMembersLevchenkoDesc,
          grinyakDesc:siteLang.facultyMembersGrinyakDesc,
          kiykovaDesc:siteLang.facultyMembersKiykovaDesc
        }
        }
        ></FacultyMembers>
        <Footer siteText={{
          title:siteLang.footerSubmitTitle,
          desc:siteLang.footerSubmitDesc,
          submitBtn:siteLang.footerSubmitBtn,
          information:siteLang.footerInformation,
          about:siteLang.footerAboutUs,
          informationAbout:siteLang.footerInformationAbout,
          destination:siteLang.footerStudyDestinations,
          partnerUniversities:siteLang.footerPartner,
          contacts:siteLang.footerContactsTitle,
          location:siteLang.footerLocationTitle,
        }}
        ></Footer>
    </div>
  );
}

export default App;
