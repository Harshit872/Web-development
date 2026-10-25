import React from 'react'

const Page = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl font-bold mb-2">Problems solved by next.js</h1>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full stack Solution</li>
          <li>File based Routing</li>
          <li>Additional features like router from next/navigation</li>
          <li>Optimized rendering</li>
        </ul>
      </div>
    </div>
  )
}

export default Page