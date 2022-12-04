import clsx from 'clsx'

export interface ILogoProps {
  className?: string
}

export const Logo = (props: ILogoProps) => {
  const { className } = props

  return <div className={clsx('font-bold text-xl text-cobalt ${className', className)}>КОНСОЛИДАЦИЯ</div>
}
