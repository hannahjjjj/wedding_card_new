# Mobile Wedding Invitation

React, Vite, Tailwind CSS, react-icons, framer-motion으로 만든 모바일 청첩장입니다.

## 실행

```bash
npm install
npm run dev
```

Vite 개발 서버는 기본적으로 아래 주소에서 확인할 수 있습니다.

```text
http://127.0.0.1:5173/wedding_card_new/
```

## 이미지와 정보 수정

청첩장 문구, 연락처, 갤러리 이미지, 주소, 지도 링크, 계좌 정보는 `src/data/weddingData.js`에서 수정합니다.

## GitHub Pages 배포

`package.json`의 `homepage`와 `vite.config.js`의 `base`를 실제 GitHub 저장소 이름에 맞춥니다.

현재 저장소 주소는 `https://github.com/hannahjjjj/wedding_card_new`입니다.

```json
"homepage": "https://hannahjjjj.github.io/wedding_card_new"
```

```js
base: '/wedding_card_new/',
```

배포 명령:

```bash
npm run deploy
```
