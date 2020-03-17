const axios = require("axios");
const cheerio = require("cheerio");
const sanitizeHtml = require('sanitize-html');
const Iconv = require('iconv').Iconv;
const iconv = new Iconv('CP949', 'utf-8//translit//ignore');
const fs=require('fs');
const data="data";
//let iconv = require('iconv-lite');
const log = console.log;


module.exports.crawler=function crawler(url,index,doucment_name){
const getHtml = () => {
  try {
    return axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    //let utfHtml=iconv.convert(html.data,'utf-8').toString();
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("table.rank_body tbody").children('tr');

    $bodyList.each(function(i, elem) {

        ulList[i] = {
          title: $(this).find('p.mtx1 a').not('em').text(),
          em:$(this).find('p.mtx1 a em').text(),
          sum_url: $(this).find('p.mtx1 a').attr('href'),
          image_url: $(this).find('p.tmpo a img').attr('src'),
          date: $(this).find('p.mtx2').text(),
          weekly_person:$(this).find('td.mtxtcr strong').text(),
          total_person:'',
          total_money:''
        };

        if(index=='na'){
          ulList[i].title=ulList[i].title.substring(19,ulList[i].title.lastIndexOf('\n'));

          $(this).find('td.mtxtcb strong').each(function(){
              ulList[i].total_money=$(this).text();
          });
        }
        else if(index=='ko'){
          ulList[i].title='xxssx';
          $(this).find('td.mtxtcb').each(function(){
            if($(this).text().includes('명')){
              ulList[i].total_person=$(this).text();
            }
          });
        }
        if(ulList[i].image_url=='//images.maxmovie.com/images/web/movie_info/newimg/default_poster.png'){
          ulList[i].image_url='../images/zz.png';
        }
        ulList[i].date=ulList[i].date.substring(3);
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => {
    log(res);
    movieJson=JSON.stringify(res);
    fs.writeFileSync(doucment_name,movieJson);
  });
};
