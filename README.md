# Re_Play

이 프로젝트는 시니어들의 여가 생활 증진과 삶의 질 향상을 위해 취미/여가 큐레이션을 만드는 프로젝트의 웹 사이트 입니다. 자세한 기획 사항은 아래 링크에서 확인하실 수 있습니다.
https://drive.google.com/file/d/1MBvlBa5i8Xo83Xcl8sgqzRWkxGBOc_00/view?usp=sharing



### `프로젝트 진행과정`

1. 상황 분석
2. 인터뷰 및 프로젝트 설계
3. MVP 페이지 작성
4. MVP 페이지 기반 선호도 조사
5. 기획 완료
6. UI 기획
7. 프론트엔드 구현
8. 데이터 베이스 설계



### `프론트엔드 설계`

프론트엔드에는 react를 사용하였습니다.

웹 페이지 사용이 어색하신 시니어분들을 위해 웹 페이지의 변형을 최소화하기 위해 노력했습니다. 왼쪽 메뉴 바를 그대로 유지한 채로 가운데 form의 내용만을 변경하였습니다.

각 페이지는 src에 넣어두고 app과 index는 public에 넣어두었습니다.
src의 SignUpButton은 페이지 전환을 위해 만들어두었으나, 버튼의 생성 없이 페이지 전환하는 것이 더 쉽다고 깨달은 뒤엔 다른 LoginButton 등을 만들지 않았습니다.

서버 연동에 실패해 구현하지 못했지만, 예를 들어, ReviewPage에서 글쓰기를 누르면 ReviewCreationPage로 이동하고 글쓰기를 누르면 글 내용을 server에 dictionary로 저장하고 page number를 키로 삼아 ReviewInfo로 이동시킬 계획이었습니다. 또한, Review의 제목과 nn개의 글자를 섹션으로 삼아, 줄을 기준으로 ReviewPage에 리스트업할 계획이었습니다.



### `백엔드 설계`

백엔드엔 Node.js와 MySQL을 사용하였습니다.

Node.js를 연결하고 MySQL을 설계하여 프론트에 연결해야했으나 webpack에 오류가 생겨 연결하지 못했습니다.

![image](https://github.com/Muon05/re_play/assets/127873267/128a60ac-02f6-40ae-9a7f-31522d0c21ba)
서버에 저장될 내용은 아래와 같이 정리해두었으며, 아직 커뮤니티성이 짙은 만큼 user에는 최소한의 정보인 ID, password, nickname만을 받도록 해두었습니다.
review와 community는 ID, title, nickname, time을 받도록 해두었으며, ID에 중복 불가 처리를 해둔 만큼, 작성자와 현 사용자의 ID가 일치할 때만 수정 및 삭제 버튼을 올릴 계획이었습니다.


### `추후에 구현할 기능`

구현에 실패한 server 연결을 최우선으로 할 예정입니다.

이외에 추가로 구현하고 싶은 내용은, kakao map OpenApi를 가져와 사용자가 거점을 설정해 취미를 함께 즐길 사람을 찾는 글을 올리거나, 지도에 리스트업 되어있는 취미 목록을 확인할 수 있게 하고 싶습니다.

### `기능 영상`

https://drive.google.com/file/d/1GVjy1S5sO14EcctcapASE4D7DYWFSwb-/view?usp=sharing
