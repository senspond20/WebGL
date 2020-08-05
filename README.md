# WebGL & Three.js
 - WEB 상에서 인터랙티브 한 3D 그래픽을 구현하기 위한
공부를 하고 정리하는 레파지토리

## WebGL
+ 웹 기반의 그래픽 라이브러리로 OpenGL ES 2.0을 기반으로 하고 3차원 그래픽을 사용하기 위한 표준 인터페이스를 제공한다.
+ 3D Low Level 에 대한 이해가 필요하다.
+ 브라우저에서 WebGL이 지원되는지 확인

## Three.js 
+ WebGL 을 좀더 간편하게 사용 할 수 있는 자바스크립트 오픈소스 라이브러리이다.

### 기본개념
    3D를 구현하는 것이기 때문에 자바스크립트 뿐만아니라 기본적인 3D 모델링과 물리엔진에 대한 이해가 필요하다. 3D 게임 등에서 사용되는것들을 참고할 필요가 있다.

### Three.js에서 사용되는 개념들

+ ### 3D (X, Y, Z)
    + X축,y축,z축 좌표공간에 대한 개념

    vector . metrix

```js
function Matrix4() {
	this.elements = [
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	];
}

function Vector3( x = 0, y = 0, z = 0 ) {
	this.x = x;
	this.y = y;
	this.z = z;
}
```

+ ### Scene 

+ ### Renderer
    + antialias : true/false
        + 안티엘리어싱 - 고해상도의 텍스쳐가 저해상도에서 랜더링이 될때 깨짐현상이 발생하는것을 처리하는 그래픽 기술

+ ### Camera
    + Perspective 카메라 (원근 카메라)
        + 가까이 있는 물체는 크게, 먼 거리에 있는 물체는 작게 보여주는 카메라이다.
    ```js
    var camera = new THREE.PerspectiveCamera(45,1, 0.1, 1000);
    
    //PerspectiveCamera 생성자를 통해서 카메라 객체는 만든다.
    // 파라미터 
    // : 원근감을 얼마나 줄것인지
    // : 종횡비를 얼마나 줄것인지
    // : 어디서부터
    // : 어디까지

    ```

    + Orthographic 카메라(직교 카메라)
        + 원근감이 필요없는 경우(체력바,점수 등의 UI)나 위에서 아래를 내려다 볼때 고정시점 45도의 각도에서 균일하게 보여줄때 등에 사용한다.

+ ### Material
    + 질감을 의미


+ ### Map Texture
  
    + 질감의 거칠기 수준에 따라서 빛을 반사하는 정도가 달라지게 되는데 거칠기가 없거나 값이 낮다면 주변 배경이나 빛을 그대로 비춰주는데 반해 거칠기가 높다면 고무처럼 주변 반사를 최소화 한다.

    + Basic Map, Metalic Map, Normal Map, Env Map ...
    + 유니티 엔진, 언리얼 엔진 등 참고.
+ ### Geometry

+ ### Mesh


### 코드 경량화
``` js
uglifyjs test.js -o test.js -m
```

+ 

[https://davidlyons.dev/threejs-intro/]

