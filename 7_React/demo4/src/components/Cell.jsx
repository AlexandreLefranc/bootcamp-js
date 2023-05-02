import { useEffect, useState } from 'react'

export default function Cell({ value, x, y, updateValue }) {
  const [selected, setSelected] = useState(false)

	useEffect(() => {
    window.document.addEventListener('unselectAll', () => {
      setSelected(false)
    })
  }, [])

  if (selected) {
    return (
      <input
        className='border-2 p-3'
        value={value}
        onChange={(e) => {
          updateValue(x, y, e.target.value)
        }}
      />
    )
  }
  return (
    <div
      className='border-2 p-3'
      onClick={(e) => {
        window.document.dispatchEvent(new Event('unselectAll'))
        setSelected(true)
      }}>
      {value || <span className='text-gray-200'>-</span>}
    </div>
  )
}