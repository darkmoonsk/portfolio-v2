interface MenuItemProps {
  text: string
  url: string
}

function MenuItem({ text, url } : MenuItemProps) {
  return (
    <li>
      <a href={url} className="cursor-pointer">{text}</a>
    </li>
  )
}

export default MenuItem;