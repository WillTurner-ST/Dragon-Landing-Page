export default function EBDabMenu() {
  const menuSections = [
    {
      title: "PICK YOUR PIECE",
      items: [
        { name: "OLA Filter", price: "$3" },
        { name: "PUFFCO PROXY", price: "$5" },
        { name: "CROSSING CORE 2.2", price: "$5" },
        { name: "PUFFCO PEAK", price: "$8" },
        { name: "PUFFCO PEAK PRO", price: "$10" },
        { name: "E-NAIL", price: "$10" }
      ]
    },
    {
      title: "HOUSE CONCENTRATES",
      price: [".05g $3 | .10g $6 | .20g $10 | .30g $14"],
      items: [
        { name: "Durban Poison (Sativa)", description: "" },
        { name: "Girl Scout Cookies (Hybrid)", description: "" },
        { name: "Wedding Cake (Indica)", description: "" }
      ]
    },
    {
      title: "DIAMONDS & Hash Rosin",
      price: ["0.05g - $6 | 0.10g - $12 | 0.20g - $15 | 0.30g - $20"],
      items: [
        { name: "THCA Diamonds", description: "" },
        { name: "Saucy Diamonds", description: "" },
        { name: "Modified Grapes Hash Rosin", description: "" },
        { name: "Headband Haze Hash Rosin", description: "" },
        { name: "Papaya Hash Rosin", description: "" },
        { name: "Chem de la Chem Hash Rosin", description: "" },        
      ]
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mx-auto"></div>
      <div className="m-auto bg-black text-white p-4 md:p-8 border-2 border-SnapGreen w-5/6 md:w-5/6">
        {/* Hardware Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl uppercase tracking-wider mb-4 text-center">
            {menuSections[0].title}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Main Hardware Items */}
            <div className="space-y-4">
              {menuSections[0].items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-SnapGreen pb-1"
                >
                  <span className="text-lg md:text-xl">{item.name}</span>
                  <span className="text-md md:text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Concentrates Sections */}
        {menuSections.slice(1).map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-8">
            <h2 className="text-2xl md:text-3xl uppercase tracking-wider mb-2 text-center">
              {section.title}
            </h2>
            <div className="text-center text-md md:text-lg mb-4">
              {section.price.join(", ")}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <div className="flex justify-between items-center border-b border-SnapGreen pb-1">
                    <h3 className="text-lg md:text-xl">{item.name}</h3>
                  </div>
                  <p className="text-gray-200 text-xs md:text-sm font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs md:text-sm text-gray-200">
          *ALL PRICES & AVAILABILITY ARE SUBJECT TO CHANGE
        </div>
      </div>
    </div>
  );
}
