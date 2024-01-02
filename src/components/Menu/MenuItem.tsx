interface MenuItemProps {
  text: string
  url: string
}

function MenuItem({ text, url } : MenuItemProps) {
  return (
    <li>
      <a href={url} className="cursor-pointer bg-gradient-to-r from-violet-500 to-violet-700  bg-[length:0px_3px]
            hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat 
            transition-[background-size] duration-500">{text}</a>
    </li>
  )
}

export default MenuItem;