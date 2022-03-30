# React Powerfool Modal

Package for a React modal.

## Table of Contents

1. Installation
2. Example

---

### Installation

To install, you can use [npm](https://nodejs.org/en/):

```
$ npm install --save react-powerfool-modal
```

---

### Example

```javascript
import React, { useState } from "react";
import { Modal } from "react-powerfool-modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Open the modal</button>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        message="The modal is open ! If you want you can close it with the button"
      />
    </div>
  );
}

export default App;
```
