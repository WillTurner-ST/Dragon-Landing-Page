

export default function StoreDabMenu() {
  const menuSections = [
    {
      title: "PICK YOUR PIECE",
      items: [
        { name: "OLA FILTER", price: "$5" },
        { name: "PUFFCO PROXY", price: "$5" },
        { name: "CROSSING CORE", price: "$5" },
        { name: "PUFFCO PEAK PRO", price: "$5" },
        { name: "Puffco Pivot", price: "$5" },
      ],
      upgrades: [
      ]
    },
    {
      title: "HOUSE CONCENTRATES",
      price: [".05g - $3 | .10g - $6 | .20g - $10 | .30g - $14"],
      items: [
     { 
          name: "Sativa", 
          description: "Mango Crack, Grapefruit Runtz, Devil Driver, Blue Cookies, Candy Land"
        },
             { 
          name: "Hybrid", 
          description: "Ghost Ryder, Cereal Milk Kush, Gelato #33, Jack’s Delight, Dark Matter, Gelato 42, Rainbow Runtz"
        },
             { 
          name: "Indica", 
          description: "Indigo Haze, Magic Mountain, Peanut Butter Runtz, Rainbow Sherbet #11"
        },

      ]
    },
    {
      title: "PREMIUM CONCENTRATES",
      price: ["0.05g - $4 | 0.1g - $8 | 0.20g - $12 | 0.30g - $16"],
      items: [
        { 
          name: "White Widow", 
          description: "Sativa"
        },
        { 
          name: "Lemon Cherry Gelato", 
          description: "Indica-Hybrid"
        },
                { 
          name: "Birthday Cake", 
          description: "Indica"
        }
      ]
    },
    {
      title: "DIAMONDS",
      price: ["0.05g - $6 | 0.10g - $12 | 0.20g - $15 | 0.30g - $20"],
      items: [
        { 
          name: "THCA Diamonds", 
          description: "99% pure THCA in crystalline form. These diamonds provide an intense potency boost without terpenes or other cannabinoids. The ultimate way to experience THCA."
        }
      ]
    },
    {
      title: "Saucy DIAMONDS",
      price: ["0.05g - $6 | 0.10g - $12 | 0.20g - $15 | 0.30g - $20"],
      items: [
        { 
          name: "Lambs Bread", 
          description: "Lamb’s Bread delivers a sweet, spicy flavor, thanks to its rich terpene profile dominated by caryophyllene, with supporting notes from myrcene and limonene. The effects are typically uplifting, energetic, and creativity-enhancing, making it a go-to for clear-headed daytime use."
        }
      ]
    },
     {
      title: "Rosin",
      price: ["0.05g - $6 | 0.10g - $12 | 0.20g - $15 | 0.30g - $20"],
      items: [
        { 
          name: "Blue Gushers", 
          description: "Blue Gusherz is a flavorful, balanced hybrid with heavy body effects and a euphoric twist. Born from Triangle Kush and Gelato #41, this strain combines earthy kush, sweet berry, and creamy gas into one smooth, satisfying experience."
        },
                { 
          name: "Mandarin Cookies", 
          description: "Want a bright, Sativa-dominant profile to brighten your day or night? Mandarin Cookies is an incredibly uplifting strain that has a sharp and tangy citrus citrus flavor rounded out by sweet and earthy Kush notes. Rich nutty and herbal flavors with citrus and spice makes Mandarin Cookies a mouthwatering dab"
        },
                { 
          name: "Melted Strawberries", 
          description: "Melted Strawberries is a lively, flavor-packed hybrid with strong sativa-leaning effects, despite its even genetic split. A cross of GMO and Strawberry Guava, this strain bursts with funky fruit, sweet berry, and a hint of garlic-diesel funk on the exhale."
        },
                { 
          name: "White Trufflez", 
          description: "White Trufflez is a knockout indica-dominant hybrid that leans heavily into earthy, musky aromas with a powerful sedative edge. This phenotype of Gorilla Butter delivers dense, trichome-coated buds and an aroma of rich soil, garlic, and funk."
        },
                        { 
          name: "Jelly Donutz", 
          description: "Jelly Donutz is a face-melting, high-energy sativa-dominant hybrid that delivers an explosion of fruity sweetness and unstoppable creative energy. With lineage from White Runtz, Hella Jelly, and two standout Jelly Donutz phenos, this strain brings bold flavor and serious uplift."
        },
      ]
    }
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-auto text-center text-gray-200 mb-8'>
        <h1 className='text-5xl mb-6'>Dragon Hour</h1>
        <p className='text-lg font-normal text-gray-200'>Everyday from 4:00PM to 5:00PM</p>
        <p className='text-lg font-normal text-gray-200'>2x loyalty points</p>
        <p className='text-lg font-normal text-gray-200'>Piece rental waived for dabs</p>
      </div>
      <div className='mx-auto'>
      </div>
      <div className="m-auto bg-black text-white p-4 md:p-8 border-2 border-SnapGreen w-4/5 md:w-4/5">
        {/* Hardware Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl uppercase tracking-wider mb-4 text-center">
            {menuSections[0].title}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Main Hardware Items */}
            <div className="space-y-4">
              {menuSections[0].items.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-SnapGreen pb-1">
                  <span className="text-lg md:text-xl">{item.name}</span>
                  <span className="text-md md:text-lg">{item.price}</span>
                </div>
              ))}
            </div>
            
            {/* Upgrades Column */}
            <div>
              <div className="space-y-4">
                {menuSections[0].upgrades.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-SnapGreen pb-1">
                    <div>
                      <span className="text-lg md:text-xl">{item.name}</span>
                      {item.description && <span className="text-xs md:text-sm ml-2 text-gray-200">{item.description}</span>}
                    </div>
                    <span className="text-md md:text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
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
                    <h3 className="text-lg md:text-xl font-normal">{item.name}</h3>
                  </div>
                  <p className="text-gray-200 text-xs md:text-sm font-normal">{item.description}</p>
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