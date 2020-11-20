# 박상훈 201740116
## movie_app_2020
React JS Fundametals Course 2020

## 11월 13일
1. HashRouter 와 Route 컴포넌트를 임포트해야 Home 컴포넌트가 보인다.
2. 라우터를 테스트하면 localhost:3000 about컴포넌트는 내용이 보인다.
3. 주의사항 HashRouter가 제대로 동작하지 않아 /about#/으로 주소가 표시되는 문제가 있다.



## 11월 6일
 1. 사용하지 않는 props는 흐리게 표시되어 있다.
 2. 이미지에 마우스 커서를 올리면 alt속성의 값이 나온다.
 3. css파일을 만들어으면 App.js Movie.js에 import시켜줘야한다.


## 10월30일
1. movies 키안에 영화데이터가 들어있다 data -> data -> movies 순서대로 객체에 접근하면 원하는 데이터를 볼수있다.
2. this.setState({movies:movies})와 같이 작성하면 movies state에 영화 데이터를 저장할수있다.
3. isLoding state false에서 true로 업데이트할려면  그러기 위해서는 Movie컴포넌트가 필요하다.
4. 컴포넌트를 여러 개 출력할 때는 유일한 값을 이용하여 key props를 추가해야한다.



## 10월16일
1. constructor() 함수가 render() 함수보다 빠르게 실행된다.
2. 자바 스크립트는 문자열을 작은, 큰따옴표 중 하나로 감싸 표현한다.
3. render(), constructor(), componentDidMount()함수는 마운트로 분류하는 생명주기 함수이다.
4. componentDidUpdate() 함수는 업데이트로 분류된 생명주기 함수이다.
5. componentWillUnmount() 함수는 컴포넌트가 죽을때 언마운트로 분류한다.

## 10월 9일
1. props 의 자료형을 검사할수 있도록 만들어주는 prop-types라는 도구가 필요하다.
2. prp-type 설치 명령어는 (npm install prob-types)
3. prop-types 를 설치한후 정상 설치여부를 확인할려면 Package.json 파일을 열어 dependencies 키값이 있는지 확인한다.


## 9월 25 일
1.  어떤 브라우저던 F12 개발자 도구이다.
2.  이미지태그를 쓸꺼면 import를 써서 이름을 새로 정한다.
3.  F12를 눌렀을때 WARNING이 뜨면 Key값을 부여한다.


## 9월 18 일
1. 컴포넌트가 무엇인지 알아보고, JSX를 학습.
2. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다.
3. 컴퍼넌트 이름의 첫자는 반드시 대문자로 해야한다.
4. 컴퍼넌트에 데이터를 전달 할 때는 props를 사용할 수 있다
5. 점 연사자를 대신해서 ES6의 구조 분해 할당을 사용 할 수 있다.
6. 리액트는 다수의 컴포넌트로 이루어지나, 최종적으로는 하나의 컴포넌트만 사용한다.


## 9월 11일
1. Dothmoe에 indexfile 수정하기
2. _read.md 수정후 Github에 push하기.