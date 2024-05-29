import React from 'react'
import { Footer } from 'antd/es/layout/layout'

export default function FooterHome() {
  return (
      <Footer
          style={{
              textAlign: 'center',
          }}
      >
          hihihaha©{new Date().getFullYear()} Created by 
      </Footer>
  )
}
