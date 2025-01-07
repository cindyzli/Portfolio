'use client'

import React from 'react'
import Image from 'next/image'
import Cat from '@/images/logos/animatedwalkingcat.gif'

export function AnimatedImage() {
    return (
        <div className="relative w-full">
            <Image
                src={Cat}
                alt="cat"
                width={200}
                height={200}
                className="absolute animate-slideRightToLeft"
            />
        </div>
    )
}
