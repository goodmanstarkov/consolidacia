import clsx from 'clsx'

interface IContainer {
  children: React.ReactNode
  className?: string
}

export const Container = (props: IContainer) => {
  const { children, className } = props

  return <div className={clsx('container h-full sm:px-4 lg:px-5', className)}>{children}</div>
}
