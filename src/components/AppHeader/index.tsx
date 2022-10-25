import React, { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoSvg } from '../../imgs/logo.svg'

import './index.scss'

export function AppHeader(): React.ReactElement {
  return (
    <header>
      <LogoSvg className="header_img" />
    </header>
  )
}
