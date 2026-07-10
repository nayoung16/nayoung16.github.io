
# 김나영 Backend Portfolio

설치 없이 바로 실행되는 정적 포트폴리오입니다.

## 로컬에서 확인

압축을 푼 뒤 `index.html`을 더블클릭하면 됩니다.

일부 브라우저에서 로컬 이미지 로딩 정책이 적용될 경우 아래처럼 간단한 로컬 서버를 실행하세요.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## GitHub Pages 배포

### 가장 간단한 방법

1. GitHub에서 `nayoung16.github.io` 저장소를 생성합니다.
2. 이 폴더의 모든 파일을 저장소 루트에 업로드합니다.
3. `Settings → Pages`에서 `Deploy from a branch`를 선택합니다.
4. Branch를 `main`, 폴더를 `/ (root)`로 설정합니다.
5. 배포 후 `https://nayoung16.github.io`에서 확인합니다.

## 수정 위치

- 내용: `index.html`
- 디자인: `styles.css`
- 인터랙션: `script.js`
- 프로젝트 이미지: `assets/`

## 배포 전 확인할 것

- 프로젝트별 실제 GitHub 및 서비스 링크 추가
- 경력 및 교육 기간 최종 검토
- 이메일 주소 확인
- 회사 영업비밀 또는 비공개 자료가 포함되지 않았는지 확인
