import { motion, useMotionValue } from "motion/react"
import { useEffect } from "react"

export default function Drag() {
    const { x, y } = useFollowPointer()

    return <motion.div style={{ ...ball, x, y }} />
}

export function useFollowPointer() {
    const xPoint = useMotionValue(0)
    const yPoint = useMotionValue(0)

    useEffect(() => {
        const handlePointerMove = ({ clientX, clientY }) => {
            xPoint.set(clientX - 10)
            yPoint.set(clientY - 10)
        }

        window.addEventListener("pointermove", handlePointerMove)

        document.body.style.cursor = "none"

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
            document.body.style.cursor = ""
        }
    }, [])

    return { x: xPoint, y: yPoint }
}

const ball = {
    width: 20,
    height: 20,
    backgroundColor: "#ff0088",
    borderRadius: "50%",
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 9999,
}
