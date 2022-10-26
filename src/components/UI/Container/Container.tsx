import cn from 'clsx'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement | any
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-xl': !clean
  })

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
