
import SiteHeader from '@/components/site-header'
import { TooltipProvider } from '@/components/ui/tooltip'
import React, { ReactNode } from 'react'

export default function FrontLayout({ children }: {
    children: ReactNode }) {
      return (
      <div>
        <SiteHeader />
        <TooltipProvider>
        {children}
        </TooltipProvider>
        {/* <SiteFooter /> */}
        </div>
      )
}