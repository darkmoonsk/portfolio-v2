interface TextProps {
  children: React.ReactNode
  className?: string
  tag: "p" | "span"
  theme: "default"
}

const themes = {
  default: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500",
}

function Text({ children, className, tag, theme } : TextProps) {
  return (
    <>
      {tag === "p" && (
        <p className={`${themes[theme]} ${className}`}>
          {children}
        </p>
      )}
      {tag === "span" && (
        <span className={`${themes[theme]} ${className}`}>
          {children}
        </span>
      )}
    </>
  )
}

export default Text;