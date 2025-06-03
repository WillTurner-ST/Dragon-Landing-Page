

export default function DabMenu() {
  const menuSections = [
    {
      title: "PICK YOUR PIECE",
      items: [
        { name: "OLA FILTER/CART", price: "$3" },
        { name: "PUFFCO PROXY", price: "$5" },
        { name: "CROSSING CORE 2.1", price: "$5" },
        { name: "PUFFCO PEAK PRO", price: "$10" },
        { name: "E-NAIL", price: "$10" },
        { name: "VOLCANO", price: "$15" },
      ],
      upgrades: [
        { name: "HEADY GLASS", price: "$3", description: "(PROXY/PRO/CROSSING)" }
      ]
    },
    {
      title: "HOUSE CONCENTRATES",
      price: [".05g $2.99 | .10g $6 | .20g $10 | .30g $14"],
      items: [
        { 
          name: "Ghost Ryder", 
          description: "A Hybrid with notes of lemon that'll free you from the couch lock and keep you strong on the euphoria with dominant terpenes like Caryophyllene, Humulene, and Limonene."
        },
        { 
          name: "Magic Mountain", 
          description: "An Indica-dominant hybrid, sedates and relaxes you. Perfect with TV and cereal, it features spicy,herbal terpenes like Caryophyllene, Humulene, Limonene, and fresh Linalool notes."
        },
        { 
          name: "Pop Tarts", 
          description: "A Sativa-dominant hybrid from Sour OG Affie x Lemon Cake, Offers a sweet lemon-berry profule with intense cerebral effects. It delivers creativity, stimulation, and euphoria."
        },
        { 
          name: "Devil Driver", 
          description: "A Sativa-dominant hybrid of Melonade and Sundae Driver, has spicy, earthy, and citrusy flavors. High in Caryophyllene, Limonene, and Pinene, it provides potent cerebral and body relaxation."
        },
        { 
          name: "Dosi-Do", 
          description: "A potent Indica-leaning hybrid of OG Kush Breath and Face Off OG, Dosi Do has sweet, earth cookies and kush notes with Limonene, Caryophyllene, and Linalool."
        }
      ]
    },
    {
      title: "PREMIUM CONCENTRATES",
      price: ["0.05g - $3.99 | 0.1g - $7.99 | 0.20g - $12 | 0.30g - $16"],
      items: [
        { 
          name: "Head Stash", 
          description: "AKA Headstash #3, an incredibly potent indica-dominant hybrid and a cross of Cherry Pie x GSC x KarmaRado OG x Biker Kush. Headstash brings powerful euphoria and full-body melting effects with smooth, earthy, and pine flavors."
        },
        { 
          name: "White Widow", 
          description: "A Sativa-dominant hybrid of a Brazilian sativa landrace and a South Indian indica, is potent, stimulating, and euphoric. it has spicy, earthy herbal notes with Myrcene, Caryophyllene, and Pinene."
        }
      ]
    },
    {
      title: "DIAMONDS",
      price: ["0.05g - $5.99 | 0.10g - $12 | 0.20g - $15 | 0.30g - $20"],
      items: [
        { 
          name: "THCA Diamonds", 
          description: "99% pure THCA in crystalline form. These diamonds provide an intense potency boost without terpenes or other cannabinoids. The ultimate way to experience THCA."
        }
      ]
    },
    {
      title: "Saucy DIAMONDS",
      price: ["0.05g - $5.99 | 0.10g - $12 | 0.20g - $15 | 0.30g - $20"],
      items: [
        { 
          name: "Lambs Bread", 
          description: "AKA Headstash #3, an incredibly potent indica-dominant hybrid and a cross of Cherry Pie x GSC x KarmaRado OG x Biker Kush. Headstash brings powerful euphoria and full-body melting effects with smooth, earthy, and pine flavors."
        }
      ]
    }
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-auto text-center text-gray-200 mb-8'>
        <h1 className='text-5xl mb-6'>Dragon Hour</h1>
        <p className='text-lg font-bold text-gray-200'>Everyday from 4:00PM to 5:00PM Everyday</p>
        <p className='text-lg font-bold text-gray-200'>2x loyalty points</p>
        <p className='text-lg font-bold text-gray-200'>Piece rental waived for dabs</p>
      </div>
      <div className='mx-auto'>
      </div>
      <div className="m-auto bg-black text-white p-4 md:p-8 border-2 border-SnapGreen w-2/3 md:w-2/3">
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
              <h2 className="text-2xl md:text-3xl uppercase mb-2 text-white">UPGRADES</h2>
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
                    <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                  </div>
                  <p className="text-gray-200 text-xs md:text-sm font-bold">{item.description}</p>
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