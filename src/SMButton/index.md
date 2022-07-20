---
nav:
  title: 组件
  path: /components
---

## SMButton

按钮组件，功能齐全，款式多样，随便挑随便选，随便扒拉随便捡

##### 普通按钮

```tsx
import React from 'react';
import { SMButton } from 'smcomponents';

export default () => {
  return <SMButton>大按钮</SMButton>;
};
```

##### 不同类型

```tsx
import React from 'react';
import { SMButton } from 'smcomponents';

export default () => {
  return (
    <>
      <SMButton btnType="primary">大按钮</SMButton>
      <SMButton btnType="link" href="www.baidu.com">
        大按钮
      </SMButton>
      <SMButton btnType="dashed">大按钮</SMButton>
    </>
  );
};
```

##### 大小

```tsx
import React from 'react';
import { SMButton } from 'smcomponents';

export default () => {
  return (
    <>
      <SMButton size="large">大按钮</SMButton>
      <SMButton size="small">小按钮</SMButton>
    </>
  );
};
```

##### 禁用

```tsx
import React from 'react';
import { SMButton } from 'smcomponents';

export default () => {
  return (
    <>
      <SMButton disabled>大按钮</SMButton>
      <SMButton btnType="link" href="http://www.baidu.com" disabled>
        link
      </SMButton>
    </>
  );
};
```

<API src='./index.tsx'></API>
