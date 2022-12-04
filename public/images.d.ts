declare module '*.svg' {
  import React = require('react')

  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.ico' {
  const content: string
  export default content
}
