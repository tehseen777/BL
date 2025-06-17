interface CardItem {
  title: string
  points: string[]
  backgroundColor: string
  textColor: string
}

export default function CardSection() {
  const cardData: CardItem[] = [
    {
      title: "SPECIALIZED MENTAL HEALTH STAFFING",
      points: ["Meaningful Roles", "Manageable Workload", "Supportive Environment", "Prioritizing Well-being"],
      backgroundColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "TRIPLE E TRAINING PROGRAM",
      points: ["Engagement", "Enrichment", "Excellence", "Ongoing Professional Advancement"],
      backgroundColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "UNWAVERING COMMUNICATION",
      points: ["Transparency", "Consistent Information", "Acknowledgment", "Appreciation"],
      backgroundColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "RECOGNIZED EXCELLENCE",
      points: ["Industry Accolades", "Your Steadfast Ally", "Fostering a Brighter Future"],
      backgroundColor: "bg-black",
      textColor: "text-white",
    },
  ]

  return (
    <div className="bg-black flex justify-center items-center h-screen">
    <div className="w-full  p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.backgroundColor} ${card.textColor} hover:bg-gradient-to-b from-[#B99722] to-[#726434] border border-[#726434] rounded-3xl p-8 flex flex-col`}
            style={{ minHeight: "240px" }}
          >
            <h2 className="text-xl font-sans font-medium mb-4 max-w-[250px]">{card.title}</h2>
            <ul className="space-y-2">
              {card.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="mr-2">-</span>
                  <span className='font-sans font-light tracking-wider text-sm'>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
