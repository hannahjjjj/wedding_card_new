export const weddingData = {
  cover: {
    image: `${import.meta.env.BASE_URL}image/cover.jpg`,
    groom: 'Jong yun',
    bride: 'Da som',
    date: '2026. 08. 08 SAT',
    time: '오후 1시 30분',
    venue: '라움 웨딩홀 2층 그랜드볼룸',
  },
  greeting: {
    title: '소중한 분들을 초대합니다',
    message:
      '서로의 가장 좋은 친구가 되어 같은 방향을 바라보며 걸어가려 합니다. 저희의 첫걸음에 함께하시어 따뜻한 축복으로 자리를 빛내주세요.',
    parents: {
      groom: '고승원 · 함영애의 아들 종윤',
      bride: '김태건 · 이상은의 딸 다솜',
    },
  },
  contacts: [
    { role: '신랑', name: '고종윤', phone: '010-9528-3397' },
    { role: '신부', name: '김다솜', phone: '010-9879-7712' },
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
    name: '그랜드컨벤션센터 서울',
    address: '서울특별시 양평로 58 그랜드 컨벤션 센터',
    mapImage:
        `${import.meta.env.BASE_URL}image/map.png`,
    links: [
      { label: '카카오맵', href: 'https://map.kakao.com/link/search/그랜드컨벤션센터 서울' },
      { label: '네이버 지도', href: 'https://map.naver.com/p/search/그랜드컨벤션센터 서울' },
      { label: '티맵', href: 'https://apis.openapi.sk.com/tmap/app/routes?name=그랜드컨벤션센터 서울' },
    ],
  },
  accounts: [
    {
      side: '신랑측',
      items: [
        { bank: '국민은행', holder: '고종윤', number: '40240204177502' }
      ],
    },
    {
      side: '신부측',
      items: [
        { bank: '우리은행', holder: '김다솜', number: '1002-345-678901' }
      ],
    },
  ],
};
