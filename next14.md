# next14

---

## 1.[경로 생성](https://nextjs.org/docs/app/building-your-application/routing/defining-routes#creating-routes)

**Next.js는 폴더를** 사용하여 경로를 정의하는 파일 시스템 기반 라우터를 사용합니다 .

각 폴더는 **URL** 세그먼트 에 매핑되는 [**경로** 세그먼트를](https://nextjs.org/docs/app/building-your-application/routing#route-segments) 나타냅니다 . [중첩된 경로를](https://nextjs.org/docs/app/building-your-application/routing#nested-routes) 만들려면 폴더를 서로 중첩하면 됩니다.

### 페이지 및 레이아웃

App router에는 페이지,공유 레이아웃, 및 템플릿을 쉽게 생성 할 수 있는 새로운 파일 규칙이 도입되었다.

#### 알아두면 좋음점

- 페이지는 항상 경로 하위 트리의 리프이다.

- `.js`, `.jsx`, 또는 `.tsx`파일 확장자를 페이지에 사용할 수 있다

  - tsx파일 과 tx파일에 혼선이 있으면 안된다.

  - ```
    TS2749: refers to a value, but is being used as a type here.
    ```

- `page.js`경로 세그먼트를 공개적으로 액세스하려면 파일이 필요합니다.

- 페이지는 기본적으로 [서버 구성 요소 이지만 ](https://nextjs.org/docs/app/building-your-application/rendering/server-components)[클라이언트 구성 요소](https://nextjs.org/docs/app/building-your-application/rendering/client-components) 로 설정할 수 있습니다.

- 페이지는 데이터를 가져올 수 있습니다. 자세한 내용은 [데이터 가져오기](https://nextjs.org/docs/app/building-your-application/data-fetching) 섹션을 참조하세요.



### 레이아웃

레이아웃은 여러 페이지에서 공유 될 수 있다. 레이아웃의 상태는 공유,유지 지면 다시 렌더링 하지 않는다.

또한 레이아웃은 중첩될 수 있다.

```tsx
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {children}
    </section>
  )
}
```

#### 알두두면 좋은점

- 최상위 레이아웃을 루트 레이아웃 이라고 한다. 이 필수 레이아웃은 애플리케이션의 모든 페이지에서 공유 되며 루트 레이아웃에는 html 및 body 태그가 포함된다.
- 모든 경로 세그먼트는 선택적으로 자체 [레이아웃을](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts) 정의할 수 있습니다 . 이러한 레이아웃은 해당 세그먼트의 모든 페이지에서 공유됩니다.
- 경로의 레이아웃은 기본적으로 **중첩 됩니다.** 각 상위 레이아웃은 React `children`prop을 사용하여 그 아래의 하위 레이아웃을 래핑합니다.
- 레이아웃은 기본적으로 [서버 구성요소 이지만 ](https://nextjs.org/docs/app/building-your-application/rendering/server-components)[클라이언트 구성요소](https://nextjs.org/docs/app/building-your-application/rendering/client-components) 로 설정할 수 있습니다 .
- 레이아웃은 데이터를 가져올 수 있습니다. 자세한 내용은 [데이터 가져오기](https://nextjs.org/docs/app/building-your-application/data-fetching) 섹션을 참조하세요 .
- 상위 레이아웃과 해당 하위 레이아웃 간에 데이터를 전달하는 것은 불가능합니다. 그러나 경로에서 동일한 데이터를 두 번 이상 가져올 수 있으며 React는 성능에 영향을 주지 않고 [자동으로 요청의 중복을 제거합니다](https://nextjs.org/docs/app/building-your-application/caching#request-memoization) .
- 레이아웃은 자체 아래의 경로 세그먼트에 접근할 수 없습니다. 모든 경로 세그먼트에 액세스하려면 클라이언트 구성 요소에서 [`useSelectedLayoutSegment`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment)또는를 사용할 수 있습니다 .[`useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments)
- `.js`, `.jsx`, 또는 `.tsx`파일 확장자를 레이아웃에 사용할 수 있습니다.
- A `layout.js`와 `page.js`파일은 동일한 폴더에 정의될 수 있습니다. 레이아웃이 페이지를 래핑합니다.

#### [루트 레이아웃(필수)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)

루트 레이아웃은 디렉터리 최상위 수준에서 정의되며 app모든 경로에 적용된다.이 레이아웃을 사용하면 서버에서 반환된 초기 HTML을 수정 할 수 있다.

#### 알아두면 좋은점

- 디렉토리 app에는 루트레이아웃이 포함되어여 한다.
- 루트 레이아웃은 자동으로 생성되지 않으므로 루트 레이아웃을 정의하고, <html>,<body>를 생성해야 한다.
- [내장된 SEO 지원을](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)`<head>` 사용하여 HTML 요소(예: 요소)를 관리 할 수 있습니다 `<title>`.
- [경로 그룹을](https://nextjs.org/docs/app/building-your-application/routing/route-groups) 사용하여 여러 루트 레이아웃을 생성 할 수 있습니다 . [여기에서 예를](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts) 참조하세요 .
- 루트 레이아웃은 기본적으로 [서버 구성 요소 이며 ](https://nextjs.org/docs/app/building-your-application/rendering/server-components)[클라이언트 구성 요소](https://nextjs.org/docs/app/building-your-application/rendering/client-components) 로 설정할 **수 없습니다** .
- 루트 레이아웃은 [`_app.js`](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)및 [`_document.js`](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)파일을 대체합니다.



### 중첩 레이아웃

기본적으로 파일 계층 구조의 레이아웃은 중첩된다.즉, `children`prop을 통해 하위 레이아웃을 래핑합니다.

**알아두면 좋은 점** :

- 루트 레이아웃에만 `<html>`및 `<body>`태그가 포함될 수 있습니다.
- ![중첩 레이아웃](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnested-layouts-ui.png&w=3840&q=75&dpl=dpl_Ekn7g1svMFrmiPHmLbm17NNjunHQ)



### 템플릿

템플릿은 각 하위 레이아웃이나 페이지를 래핑하여 렌더링 하는 방식은 레이아웃과 유사하지만 다음과 같은 차이점이 있다.

- 템플릿을 공유하는 페이지를 라우터시 해당 템플릿은 새로운 인스턴스를 마운트한다
  - 이는 상태가 공유되지 않는것을 의미한다.
- 탬플릿은 레이아웃과 하위 항목 사이에 렌더링 된다.

### 메타데이터

메타데이터 또는 파일의 [`metadata`개체](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object) 나 [`generateMetadata`함수를](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function) 내보내 정의할 수 있다.

```tsx
export const metadata: Metadata = {
  title: 'Next.js',
}
```

#### 정적 메타데이터/동적 메타데이터

##### 정적 메타데이터

```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
export default function Page() {}
```

ㅎㅎ

### 라우팅

서버에서 애플리케이션 코드는 경로 세그먼트를 자동으로 코드 분할한다. **경로 세그먼트를 미리 가져 오고 캐싱한다**.즉 경로 이동시 브라우저는 페이지를 다시 로드하지 않고 변경된 경로만 다시 렌더링한다.



### 경로 그룹

app 폴더 내 하위 경로의 중첩된 세그먼트는 일반적으로 URL 경로에 매핑된다. 그러나 폴더가 경로의 URL 경로에 포함되지 않도록 폴더를 경로 그룹으로 표시 할 수 있다.

![Route Groups with Opt-in Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-opt-in-layouts.png&w=3840&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

##### 경로 세그먼트 그룹화의 장점

- [여러 루트 레이아웃을 포함하여 동일한 세그먼트에 여러 중첩 레이아웃 만들기](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts)

  - top level의 루트 레이아웃을 제거하고 각 그룹화된 경로 세그먼트에 독립적인 레이아웃을 적용 할 수 있다.

  - 루트 레이아웃이 없기에 다음의 추가는 반드시 이루워져야 한다.

    - ```
      The <html> and <body> tags need to be added to each root layout.
      ```

- [공통 구간의 경로 하위 집합에 레이아웃 추가](https://nextjs.org/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout)

  - 각 그룹마다 공통의 레이아웃을 만들 수 있다.

##### 알아두면 좋은점

- 경로 그룹의 이름은 각 폴더의 관심사를 나타낸것이지, URL경로에 영향을 주지 않는다.
- 하지만 동일한 경로의 페이지를 중복 생성하면 안된다.
- 최상위 layout 파일이 없이 여러 루트 레이아웃을 사용하는 경우 홈 page.js파일은 경로 그룹 중 하나에 정의되어야 한다.

### UI로딩 및 스트리밍

경로 세그멘트의 콘테츠가 로드되는 동안 서버에서 즉시 로드 상태를 표시할 수 있다. 렌더링이 완료되면 새 콘텐츠가 자동으로 교체된다.

- 페이지 전체의 로딩 U를 표기한다.

![loading.js 특수 파일](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-special-file.png&w=3840&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

#### 즉시 로딩 상태(Instant Loading states)

Instant Loading states는 네비게이션시 즉시 보여지는 대체 UI이다.

Loading Ui는 레이아웃 컴포넌트내 중첩형태로 표기되며, 자동으로 <Suspense> 컴포넌트의 fallback이 된다.

#### 서스펜스를 이용한 스트리밍

<Suspense> 사용한 스트리밍을 수동으로 생성 할 수 있다.

서스펜스는 비동기 작업을 구성하는 요소를 래핑하고 해당 작업이 진행되는 동안 대체 UI를 표시한 다음 구성요소를 교체한다.

##### 서스펜스를 이용한 이점

1. 스트리밍 서버 렌더링: 서버에서 클라이언트로 HTML을 점진적으로 렌더링한다.
2. 선택적 하이드레이션:  React는 사용자 상호 작용을 기반으로 어떤 구성 요소를 먼저 대화식으로 만들 것인지 우선순위를 정한다.

##### 스트리밍이란?

SSR시 일련의 단계

1. 먼저, 특정 페이지의 모든 데이터를 서버에서 가져옵니다.
2. 그런 다음 서버는 페이지의 HTML을 렌더링합니다.
3. 페이지의 HTML, CSS 및 JavaScript가 클라이언트로 전송됩니다.
4. 비대화형 사용자 인터페이스는 생성된 HTML 및 CSS를 사용하여 표시됩니다.
5. 마지막으로 React는 [수화물을 공급합니다.](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)사용자 인터페이스를 대화형으로 만듭니다.

![스트리밍 없이 서버 렌더링을 보여주는 차트](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-without-streaming-chart.png&w=3840&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

이러한 단계는 순차적이며 차단이 발생 할 수 있다. 모든 데이터 패칭 후 서버에서 페이지의 HTML 렌더링 후 클라이언트에서 해당 파일의 다운로드된 후에야 UI를 하이드레이션 할 수 있다.

- 서버자원의 다운이 완료된 후 사용자에게 표기 되기에 여전히 속도가 느릴 수 있다.
- 이때 **스트리밍**을 사용하면 페이지의 HTML을 더 작은 청크로 나누고 점진적으로 해당 청크를 서버에서 클라이언트로 보낼 수 있다.
- **스트리밍**은 각 구성 요소가 하나의 덩어리로 간주될 수 있기 때문에, 우선순위가 높거나 데이터에 의존적이지 않는 요소는 더 일찍 하이드레이션 할 수 있다.
- [스트리밍은 TTFB(Time To First Byte)를](https://web.dev/ttfb/) 줄일 수 있으므로 긴 데이터 요청으로 인해 페이지 렌더링이 차단되는 것을 방지하려는 경우 특히 유용하다.
-  [첫 번째 콘텐츠가 포함된 페인트(FCP)](https://web.dev/first-contentful-paint/). 또한 [TTI(Time to Interactive)를 개선하는 데 도움이 된다.](https://developer.chrome.com/en/docs/lighthouse/performance/interactive/)

![스트리밍 없이 서버 렌더링](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-without-streaming.png&w=3840&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

[SSR 과정]

![스트리밍을 통한 서버 렌더링 작동 방식](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming.png&w=3840&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

[스트리밍 과정]

![스트리밍을 사용한 서버 렌더링을 보여주는 차트](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming-chart.png&w=3840&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

### 오류 처리

런타임 오류를 적절하게 처리 할 수 있다.

- [React Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) 에서 경로 세그먼트와 중첩된 하위 항목을 자동으로 래핑합니다..
- 세분성을 조정하기 위해 파일 시스템 계층 구조를 사용하여 특정 세그먼트에 맞는 오류 UI를 만듭니다.
- 나머지 애플리케이션 기능을 유지하면서 영향을 받은 세그먼트에 대한 오류를 격리합니다.
- 전체 페이지를 다시 로드하지 않고 오류 복구를 시도하는 기능을 추가합니다.



### 병렬 경로

병렬 라우팅을 사용하면 동일한 레이아웃에서 하나 이상의 페이지를 동시에 또는 조건부로 렌더링할 수 있다.

