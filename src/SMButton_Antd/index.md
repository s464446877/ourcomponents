---
nav:
  title: 组件
  path: /components
---

## SMButton_Antd

Demo:

```tsx
import React from 'react';
import { SMButton_Antd } from 'smcomponents';

export default () => {
  return (
    <>
      <SMButton_Antd>Default Button</SMButton_Antd>
      <SMButton_Antd type="primary">primary Button</SMButton_Antd>
      <SMButton_Antd type="dashed">dashed Button</SMButton_Antd>
      <br />
      <SMButton_Antd type="text">text Button</SMButton_Antd>
      <SMButton_Antd type="link">link Button</SMButton_Antd>
      <br />
      <SMButton_Antd disabled>disabled</SMButton_Antd>
    </>
  );
};
```

<API src='./index.tsx'></API>
