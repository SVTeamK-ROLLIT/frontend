export default function anonymous() {
  const anonyAry = [
    '명란전코난',
    '달려야하니',
    '닮은살걀',
    '반만고양이',
    '백마탄환자',
    '순대렐라',
    '아뇨뚱인데요',
    '오드리햇반',
    '오즈의맙소사',
    '이쑤신장군',
    '짱구는목말러',
    '짱구는옷말려',
    '천국의계란',
    '천안호구과자',
    '조선왕조씰룩',
    '문희다칩니다',
    '난앓아요',
  ];
  const randomNum = Math.floor(Math.random() * 18);
  console.log(anonyAry[randomNum]);
  return anonyAry[randomNum];
}
