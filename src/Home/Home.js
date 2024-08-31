import React from 'react'
import { HeroSec } from '../HeroSec/HeroSec'
import { SmsSol } from '../SMSSolutions/SmsSol'
import { WhatsApp } from '../WhatsApp/WhatsApp'
import { Footer } from '../Footer/Footer'

export function Home() {
    return (
        <div>
            <HeroSec />
            <SmsSol />
            <WhatsApp />
            <Footer />
        </div>
    )
}
