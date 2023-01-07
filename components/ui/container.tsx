import cn from 'clsx'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: React.ComponentType | keyof JSX.IntrinsicElements
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-[602px]': !clean
  })

  const Component = el

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
