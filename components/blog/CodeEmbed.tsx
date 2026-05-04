interface CodeEmbedProps {
  src: string
  title?: string
  height?: number
}

export default function CodeEmbed({ src, title = 'Interactive embed', height = 450 }: CodeEmbedProps) {
  return (
    <div className="code-embed">
      <iframe
        src={src}
        title={title}
        height={height}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        scrolling="no"
      />
    </div>
  )
}
