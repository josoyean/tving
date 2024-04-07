[🔗](https://saltsoyeon.tistory.com/58)

## **Intor**

ott를 시청을 좋아하고 내가 자주 보고 좋아하는 사이트를 클론을 하면 더 재미있게 작업을 할거같아서 클론하게 되었습니다.

## **사용기술**

editot - VScode

lang - react, html ,css, javascript, npm, styled-components, react-router

배포 - github.io

## **개발 기간**

2023.08 ~ 진행중

## **구현 기능**

-   react-router를 이용해서 페이지 연결, Link로 페이지 이동
-   JSON 데이터 제작 후 server 이용해서 배포
-   카카오톡 로그인 연동

---

#### 1) React-router를 이용해서 페이지 연결, Link로 페이지 이동

```
//App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

<BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
</BrowserRouter>

main.js
<Link to="/"> </Link>
```

'react-router-dom'를 설치 후에 BrowserRouter, Route, Routes 추가

BrowserRouter - 꼭 Route,Routes 태그를 감싸야된다. 동적 페이지에 사용

Route - path에는 경로, element는 보여주고 싶은 컴포넌트를 넣으면 된다.

Routes - 여러 Route를 감싸서 그 중에서 해당되는 Route를 렌더링 해주는 역할

Link - a태그라고 생각하면 된다. to에는 Link를 클릭시 이동하고 싶은 경로를 넣으면 됨 

리액트 라우터를 공부하다가 BrowserRouter,HashRouter를 알게 되었는데 BrowserRouter는 서버에 있는 데이터들을 스크립트에 의해 가공 처리한 후 생성되어 전달되는 웹페이지에 적합하고, HashRouter는 미리 저장된 페이지가 그대로 보여지는 웹페이지에 적합 합니다. 저는 동적인 페이지를 제작할 예정이라 BrowserRouter를 사용했습니다.

#### 2) JSON 데이터 제작 후 server 이용해서 배포


프로그램 API가 따로 없어서 티빙 사이트 들어가 프로그램 정보로 json 만들었습니다. 제작 후 깃에 올리고 Raw를 이용해서 server로 구축하고 Axios·get()을 이용해서 데이터를 받고 프로그램 분리하고 시청 수 기준으로 내림차순으로 순위 적용해서 페이지를 만들었습니다.  
  
처음에는 JSON 파일만 이용해서 제작했는데 깃허브 관련 글을 찾아보다가 JSON 파일을 server로 구축을 해서 작업할 수 있다는 글을 보고 작업했습니다.

#### 3) 카카오톡 로그인 연동

[https://saltsoyeon.tistory.com/46](https://saltsoyeon.tistory.com/46)

 [\[React\] 카톡 로그인 구현

카톡 로그인 구현은 우선 에서 애플리케이션을 추가해야 합니다. 추가후 앱키는 드래그 이용해서 복사 하지말고 옆에 복사하기 버튼 이용해서 복사하기 uri는 /로컬주소/oauth/callback/kakao 입력! 로

saltsoyeon.tistory.com](https://saltsoyeon.tistory.com/46)

 캐치테이블에 적용할때도 오래 걸렸지만 성공해서 동일하게 넣으면 되겠지 라는 생각으로 티빙도 적용했지만 오류가 떠서 마음처럼 잘 되지 않았다. 앱키 , Redirect URI은 .env에 넣고 깃 푸시를 하게 되면 깃에서는 앱키가 없어서 작용이 안되는걸 인식하고 블로그 글에서 시크릿 세팅에서 앱키 , Redirect URI 값을 적용하면 된다는 글을 보고 적용을 했는데 오류도 안뜨고 위 gif처럼 잘 적용이 되는것을 알수있다.

## **회고록**

**진행하면서 아쉬운점**

안에 동영상을 못넣은게 아쉬웠다. 유튜브에도 검색했는데 관련 영상이 많이 있지 않고 ott가 아니라 유튜브 같은 느낌을 많이 받아서 우선 재생 버튼만 넣었지만 다른 방법을 더 찾아보고 적용할 예정이다

**진행후 얻은점**

진행하고 나서 얻은건 카카오 로그인 말고 내가 자주 사용하는 네이버 로그인도 연동하고 싶다는 생각을 많이 했다. 조만간 넣어야지 로그인 페이지에 카카오 하나만 있어서 그런지 허전한 느낌? 네이버 적용 빨리되면 구글이나 애플도 도전해야지
