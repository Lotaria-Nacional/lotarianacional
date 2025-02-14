export interface RegulationProps {
  content: {
    title: string
    subtitle: string
    content: (string | { list: string[] })[]
  }
}

export default function RregulationContent({
  content: { content, subtitle, title },
}: RegulationProps) {
  return (
    <div className="mb-2">
      <div className="mb-4 text-center">
        <h2>{title}</h2>
        <span className="font-bold">{subtitle}</span>
      </div>
      <ul className=" pl-6">
        {content.map((item, index) => {
          if (typeof item === "string") {
            return (
              <li key={index} className="text-justify mb-2">
                {item}
              </li>
            )
          } else if (item.list) {
            return (
              <ul key={index} className="pl-6">
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex} className="text-justify mb-2">
                    {listItem}
                  </li>
                ))}
              </ul>
            )
          }
          return null
        })}
      </ul>
    </div>
  )
}
