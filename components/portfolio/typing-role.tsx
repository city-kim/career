'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Frontend Developer',
  'React · Next.js · TypeScript',
  'Commerce · Platform · Web',
]

export function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(roles[0])
      return
    }

    const role = roles[roleIndex]
    const finishedTyping = !deleting && text === role
    const finishedDeleting = deleting && text === ''
    const delay = finishedTyping
      ? 1450
      : finishedDeleting
        ? 260
        : deleting
          ? 42
          : 82

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true)
        return
      }
      if (finishedDeleting) {
        setDeleting(false)
        setRoleIndex((current) => (current + 1) % roles.length)
        return
      }
      setText(
        deleting
          ? role.slice(0, text.length - 1)
          : role.slice(0, text.length + 1),
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, roleIndex, text])

  return (
    <p
      className="mt-5 min-h-11 animate-rise text-base leading-snug font-medium text-zinc-600 motion-reduce:animate-none sm:text-3xl lg:text-4xl dark:text-zinc-400 [animation-delay:150ms]"
      aria-label="프론트엔드 개발자. React, Next.js, TypeScript로 웹 서비스를 개발합니다."
    >
      <span aria-hidden="true">{text}</span>
      <span
        className="ml-0.5 animate-caret motion-reduce:animate-none"
        aria-hidden="true"
      >
        |
      </span>
    </p>
  )
}
