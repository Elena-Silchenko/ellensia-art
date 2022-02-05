import { useEffect, useState } from "react"

export default function GoUp() {
  const [visible, setVisible] = useState(false)
  
  function updateVisible() {
    setVisible(window.scrollY > 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", updateVisible)
    return () => {
      window.removeEventListener("scroll", updateVisible)
    }
  })

  return (
    <>
      {visible && (
        <div class="btn-go-up" onClick={() => window.scroll(0, 0)}>
          <i class="fas fa-angle-up" />
        </div>
      )}
    </>
  )
}