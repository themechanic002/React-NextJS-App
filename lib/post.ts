import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // /posts 파일 이름을 잡아주기
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map(fileName => {
    // 정규식으로 파일 이름에서 확장명만 지우기
    const id = fileName.replace(/\.md$/, "");

    // 파일의 전체 경로를 잡아주기 (join 함수를 이용해서 postsDirectory와 fileName을 합치기)
    const fullPath = path.join(postsDirectory, fileName);

    // 파일 내 실제 콘텐츠를 string 형태로 잡아주기 (utf-8 로 인코딩)
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // gray-matter 라이브러리를 이용해 fileContents를 객체형태로 변환해준다
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {date: string; title: string})
    }
  })

  // 포스트 정렬하기 (날짜 순으로)
  return allPostsData.sort((a, b) => {
    if(a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
    
  })

}