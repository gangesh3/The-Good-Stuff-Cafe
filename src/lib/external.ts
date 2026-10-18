export function isSafeExternalUrl(value: string): boolean {
  try {
    // Social and review destinations must be absolute external URLs. This
    // prevents placeholders from silently becoming local app routes.
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

export function openExternal(url: string): boolean {
  if (!isSafeExternalUrl(url)) return false
  const popup = window.open(url, '_blank', 'noopener,noreferrer')
  if (popup) {
    popup.opener = null
    return true
  }
  return false
}

export async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Some QR browsers expose the API without granting clipboard access.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)
  let copied = false
  try {
    copied = document.execCommand('copy')
  } catch {
    copied = false
  }
  document.body.removeChild(textarea)
  return copied
}
