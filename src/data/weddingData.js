export const weddingData = {
  cover: {
    image: `${import.meta.env.BASE_URL}image/cover.jpg`,
    groom: '타레미',
    bride: '김다솜',
    date: '2026. 10. 24 SAT',
    time: '오후 1시 30분',
    venue: '라움 웨딩홀 2층 그랜드볼룸',
  },
  greeting: {
    title: '소중한 분들을 초대합니다',
    message:
      '서로의 가장 좋은 친구가 되어 같은 방향을 바라보며 걸어가려 합니다. 저희의 첫걸음에 함께하시어 따뜻한 축복으로 자리를 빛내주세요.',
    parents: {
      groom: '김영수 · 박미정의 장남 민준',
      bride: '이상훈 · 최은주의 장녀 서연',
    },
  },
  contacts: [
    { role: '신랑', name: '김민준', phone: '010-1234-5678' },
    { role: '신부', name: '이서연', phone: '010-9876-5432' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=85',
  ],
  location: {
    name: '라움 웨딩홀',
    address: '서울특별시 강남구 언주로 564 라움아트센터',
    mapImage:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80',
    links: [
      { label: '카카오맵', href: 'https://map.kakao.com/link/search/라움아트센터' },
      { label: '네이버 지도', href: 'https://map.naver.com/p/search/라움아트센터' },
      { label: '티맵', href: 'https://apis.openapi.sk.com/tmap/app/routes?name=라움아트센터' },
    ],
  },
  accounts: [
    {
      side: '신랑측',
      items: [
        { bank: '국민은행', holder: '김민준', number: '123456-78-901234' },
        { bank: '신한은행', holder: '김영수', number: '110-123-456789' },
      ],
    },
    {
      side: '신부측',
      items: [
        { bank: '우리은행', holder: '이서연', number: '1002-345-678901' },
        { bank: '하나은행', holder: '이상훈', number: '352-910123-45678' },
      ],
    },
  ],
};
