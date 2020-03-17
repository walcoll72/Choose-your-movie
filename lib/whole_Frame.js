module.exports = {
  html: function(bg_image, today_recommend) {
    return `<!DOCTYPE html>
    <html lang="ko">

    <head>
      <meta charset="utf-8">
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/css?family=Sunflower:300&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Choose your movie</title>
    </head>

    <body>
      ${bg_image}
      <div class="sign"><span>C</span><span>hoose</span><span> Y</span><span>our</span><span> M</span><span>ovie</span></div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Box Office</a>
            <ul>
              <li><a href="/?id=bo_ko">국내 박스오피스</a></li>
              <li><a href="/?id=bo_na">북미 박스오피스</a></li>
            </ul>
          </li>
          <li><a href="#">Review Board</a>
            <ul>
              <li><a href="#">한국영화</a></li>
              <li><a href="#">외국어영화</a></li>
            </ul>
          </li>
          <li><a href="#">Inspiration</a></li>
        </ul>
      </nav>
      ${today_recommend}

      <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

    </body>

    </html>`;
  },
  today_recommend:function(action,comedy,family,fantasy,horror,romance){
  return `  <h1 style="font-size:65px; line-height:1.2em; text-align:center">
        <span class="tochoo">
          <span style="letter-spacing:0em;font-family: 'Sunflower'">
            오늘의 추천 영화
          </span>
        </span>
      </h1>
      <div class="container">
        <div class="row">
          <div class="col">
            <span style="color:white;">액션</span>
            <img src=${action.image_url} alt="My Image" class="choosenImage">
            <div class="rec_title">${action.title}</div>
          </div>
          <div class="col-6">
          <span style="color:white;">코미디</span>
            <img src=${comedy.image_url} alt="My Image" class="choosenImage">
            <div class="rec_title">${comedy.title}</div>
          </div>
          <div class="col">
          <span style="color:white;">가족영화</span>
            <img src=${family.image_url} alt="My Image" class="choosenImage">
            <div class="rec_title">${family.title}</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <span style="color:white;">판타지</span>
            <img src=${fantasy.image_url} alt="My Image" class="choosenImage">
            <div class="rec_title">${fantasy.title}</div>
          </div>
          <div class="col-5">
          <span style="color:white;">공포영화</span>
            <img src=${horror.image_url} alt="My Image" class="choosenImage">
            <div class="rec_title">${horror.title}</div>
          </div>
          <div class="col">
          <span style="color:white;">멜로/로멘스</span>
            <img src=${romance.image_url} alt="My Image" class="choosenImage">
            <div class="rec_title">${romance.title}</div>
          </div>
        </div>
      </div>
`;
},
  bo_table: function(movie_list) {
    let table = `
<div id="table_body">
  <table class="table">
    <colgroup>
      <col width="30%" />
      <col width="30%" />
      <col width="20%" />
      <col width="20%" />
    </colgroup>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Title</th>
      <th scope="col">주말관객수</th>
      <th scope="col">전국누계</th>
    </tr>
  </thead>
  <tbody>`;
    for (i = 0; i < movie_list.length; i++) {
      table = table + `
    <tr>
      <th scope="row">
      <span class="rank_num">${i+1}</span>
      <img src=${movie_list[i].image_url}>
      <div class="p_p">
        <span class="em">${movie_list[i].em}</span>
        <input type ="button" name ="id" value="줄거리요약" class="summary">
      </div>
      <div class="date">개봉일:${movie_list[i].date}</div>
      </th>
      <td>
      <sapn class="movie_title">${movie_list[i].title}</span>
      </td>
      <td class="w_p">${movie_list[i].weekly_person}</td>
      <td class="w_p">${movie_list[i].total_person}</td>
    </tr>
    `;
    }
    table = table + '</tbody>' + '</table>' + '</div>';

    return table;
  },
  na_table:function(movie_list){
    let table = `
<div id="table_body">
  <table class="table">
    <colgroup>
      <col width="30%" />
      <col width="30%" />
      <col width="20%" />
      <col width="20%" />
    </colgroup>
  <thead class="thead-dark">
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Title</th>
      <th scope="col">주말수입</th>
      <th scope="col">총수입</th>
    </tr>
  </thead>
  <tbody>`;
    for (i = 0; i < movie_list.length; i++) {
      table = table + `
    <tr>
      <th scope="row">
      <span class="rank_num">${i+1}</span>
      <img src=${movie_list[i].image_url}>
      <div class="p_p">
        <span class="em">${movie_list[i].em}</span>
        <input type ="button" name ="id" value="줄거리요약" class="summary">
      </div>
      <div class="date">개봉일:${movie_list[i].date}</div>
      </th>
      <td>
      <sapn class="movie_title">${movie_list[i].title}</span>
      </td>
      <td class="w_p">${movie_list[i].weekly_person}</td>
      <td class="w_p">${movie_list[i].total_money}</td>
    </tr>
    `;
    }
    table = table + '</tbody>' + '</table>' + '</div>';

    return table;
  }

};
