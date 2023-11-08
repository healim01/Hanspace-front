// @mui
import { Box } from '@mui/material';
// types
import { IDeptInfo } from 'src/types/dept';
// components
import DeptCard from './dept-card';

const deptlist: IDeptInfo[] = [
  {
    id: 1,
    name: '전산전자공학부',
    pplNum: 123,
    spaceNum: 15,
    image: 'https://www.snunews.com/news/photo/201809/18599_11268_2922.jpg',
  },
  {
    id: 2,
    name: '상담심리사회복지',
    pplNum: 75,
    spaceNum: 8,
    image: 'https://map.snu.ac.kr/api/upload/spot/84a71dc3-9891-4e67-8f8a-b1b0cf9bfe9c.jpg',
  },
  {
    id: 3,
    name: '생명과학부',
    pplNum: 60,
    spaceNum: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyelkwHA6AFR2bCzp06Ceauo4YQ7nfA1XP30gGZkEffQ8ZP3-WcxygRO2PccgIfET6rXU&usqp=CAU',
  },
  {
    id: 4,
    name: 'ICT창업학부',
    pplNum: 100,
    image: 'https://wimg.mk.co.kr/news/cms/202212/14/news-p.v1.20221213.88bc4288ad01428c9f29203f20cba568_P1.jpg',
    spaceNum: 12,
  },
  {
    id: 5,
    name: '공간환경시스템디자인학부',
    pplNum: 45,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMjlfNjYg%2FMDAxNTUzODM4MTg1MDEy.h7Vx5F3Fj8OsCpWnhZv9jI_54LFCFr-5k5jmuvfQkmgg.-2_GcmAI44-hRnKN_pawJH9ocytF4-ecMiqgLuK8dYcg.JPEG.su_mini214%2Foutput_2725856160.jpg&type=sc960_832',
    spaceNum: 5,
  },
  {
    id: 6,
    name: '경영경제학부',
    pplNum: 50,
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_8B8E1C3B87961CEAC3D6AA8BA5AD7D4C.jpg',
    spaceNum: 7,
  },
  {
    id: 7,
    name: '기계제어공학부',
    pplNum: 40,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160725_172%2Fhyun_a_99_1469449498743J8Gp0_JPEG%2F20160528_165238_%25281%2529.jpg&type=sc960_832',
    spaceNum: 6,
  },
  {
    id: 8,
    name: '법학부',
    pplNum: 85,
    image: 'https://www.osan.ac.kr/usr/images/buildings/8_1.png',
    spaceNum: 9,
  },
  {
    id: 9,
    name: '심리학 프로이드 강당',
    pplNum: 110,
    image: 'https://source.unsplash.com/random',
    spaceNum: 11,
  },
  {
    id: 10,
    name: '경제 아담스미스 스튜디오',
    pplNum: 95,
    image: 'https://source.unsplash.com/random',
    spaceNum: 14,
  },
];

export default function DeptList() {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
      }}
    >
      {deptlist.map((dept) => (
        <DeptCard key={dept.id} deptInfo={dept} />
      ))}
    </Box>
  );
}
