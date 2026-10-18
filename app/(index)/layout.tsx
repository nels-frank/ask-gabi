
import FloatingAskGabi from '@/components/ask-gabi-whatsapp'
import SiteFooter from '@/components/site-footer'
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
        <FloatingAskGabi />
        <SiteFooter />
        </div>
      )
}