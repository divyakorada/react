import React, { Suspense, useState } from 'react';


const UserComponent = React.lazy(() => import('./UserComponent'));

const CodeSplitting2 = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(true)}>Load User Component</button>
        {show && (
            <Suspense fallback={<p>Loading...</p>}>
                <UserComponent />
            </Suspense>
        )}
    </div>
  )
}

export default CodeSplitting2
