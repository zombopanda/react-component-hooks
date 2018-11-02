## Purpose
Using React 16.7+ Hooks in a regular React.Component. 

https://reactjs.org/docs/hooks-intro.html

## Install
```
npm install react-component-hooks
```
or
```
yarn add react-component-hooks
```

## Usage
with decorators:
```
import React, { useState } from "react";
import {withHooks} from "react-component-hooks";

@withHooks
export default class MyComponent extends React.Component {
  render() {
    const [a, setA] = useState(0);

    return <div> 
      <div>a: {a} <button onClick={() => setA(a + 1)}>+1</button></div>
    </div>
  }
}
```
or without decorators:
```
import React, { useState } from "react";
import {withHooks} from "react-component-hooks";

class MyComponent extends React.Component {
  render() {
    const [a, setA] = useState(0);

    return <div> 
      <div>a: {a} <button onClick={() => setA(a + 1)}>+1</button></div>
    </div>
  }
}

export default withHooks(MyComponent);
```

## Demo
https://codesandbox.io/s/lynkv5yzym
