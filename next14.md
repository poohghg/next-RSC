## next14

## [경로 생성](https://nextjs.org/docs/app/building-your-application/routing/defining-routes#creating-routes)

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

### [루트 레이아웃(필수)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)

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