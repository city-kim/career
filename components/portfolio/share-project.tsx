'use client'

import { useState } from 'react'
import { Link2 } from 'lucide-react'

export function ShareProject() {
  const [message, setMessage] = useState('')
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setMessage('프로젝트 링크를 복사했습니다.')
    } catch {
      setMessage('주소창의 링크를 복사해 주세요.')
    }
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="button-secondary" onClick={copyLink}>
        <Link2 size={16} aria-hidden="true" /> 링크 복사
      </button>
      <span role="status" className="text-xs text-zinc-600 dark:text-zinc-400">
        {message}
      </span>
    </div>
  )
}
