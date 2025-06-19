

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
          name: "Candyland (Sativa)", 
          description: "Candyland (aka Kandyland) is a sativa concentrate with uplifting, creative effects that ease tension and boost mood. It features Caryophyllene, Limonene, and Humulene, giving it a sweet, earthy flavor with hints of spice and citrus. Great for daytime use or social vibes."
        },
        { 
          name: "Jack's Delight (Sativa)", 
          description: "A vibrant cross of Jack Herer x Afternoon Delight, Jack’s Delight brings a bright, citrusy burst up front with hints of pine, sweet funk, and a subtle floral finish. This Sativa-Dominant Hybrid delivers an energizing head high paired with a breezy body buzz — perfect for sparking creativity or starting your day with clarity. Citrus, pine, sweet, and lightly floral with dominant terpenes Terpinolene, Limonene, and Caryophyllene. "
        },
        { 
          name: "Mango Crack (Sativa)", 
          description: "a cross of Skunk #1 and an unknown pheno. Dominant in Myrcene, Pinene, and Caryophyllene. Great for enjoying anytime of day as a fuel-focused Sativa profile. Mango Crack is a terpy badder and works best with blunt or scooping dab tools."
        },
        { 
          name: "Poptarts (Sativa)", 
          description: "Crossing Sour OG Affie (SOGA) x Lemon Cake creates a sweet, lemon-frosted & bright berry profile with intense cerebral effects. Pop Tarts delivers creativity, stimulation, and euphoria in one delectable dab."
        },
        { 
          name: "Dosidos (Hybrid)", 
          description: "a potent hybrid that tends to lean more toward the Indica side. It is a cross of OG Kush Breath and Face Off OG and carries deep and delicious cookies and kush notes. It is sweet and earthy with dominant terps of Limonene, Caryophyllene, and Linalool."
        },
        { 
          name: "Ghost Ryder (Hybrid)", 
          description: "A well-balanced Hybrid with delicious lemon notes that’ll free you from the couch lock and keep you strong on the euphoria with dominant terpenes like Caryophyllene, Humulene, and Limonene."
        },
                { 
          name: "Dark Matter (Hybrid)", 
          description: " Cherry Thunderfuck x Rusty Haze. Dark Matter is a heavy body hitter with calming and regulating cerebral effects. Dominant in myrcene, this is a great unwinding Hybrid best suited for end of day relaxing. "
        },
                { 
          name: "Rainbow Runtz (Hybrid)", 
          description: "Zkittlez x Dosi Do. If you enjoy our Dosi Do then you’ll love Rainbow Runtz! Sweet, tart with pungent fuel. Great for anytime of day."
        },
                { 
          name: "Gelato 33 (Hybrid)", 
          description: "A standout cross of Sunset Sherbet x Thin Mint GSC, Gelato #33 brings a rich burst of creamy berry sweetness with a hint of minty earth. This Balanced Hybrid is known for its smooth, euphoric lift that settles into deep, carefree relaxation. Sweet, fruity, creamy, and slightly herbal with dominant terpenes Caryophyllene, Limonene, and Humulene. "
        },
                { 
          name: "Cereal Milk Kush (Hybrid)", 
          description: " A delicious cross known for its creamy sweetness and even-keeled effects, Cereal Milk Kush is a smooth, uplifting, and deeply relaxing Balanced Hybrid strain. Sweet, fruity, creamy, and slightly gassy with dominant terpenes Caryophyllene, Limonene, and Myrcene."
        },
        { 
          name: "Indigo Haze (Indica)", 
          description: "A flavorful blend with mysterious origins, Indigo Haze delivers a smooth rush of sweet berries, fresh herbs, and a hint of floral earthiness. This Indica-Dominant Hybrid offers a dreamy headspace that gradually melts into a deep, content body relaxation. Sweet, fruity, herbal, and lightly floral with dominant terpenes Myrcene, Caryophyllene, and Linalool."
        }
      ]
    },
    {
      title: "PREMIUM CONCENTRATES",
      price: ["0.05g - $3.99 | 0.1g - $7.99 | 0.20g - $12 | 0.30g - $16"],
      items: [
        { 
          name: "Lemon Cherry Gelato (premium)", 
          description: "Indica-Dominant Hybrid. A blissful marriage of euphoria and flavor. The nose is fruity with fresh pine and gas background notes, dominant in Limonene and caryophyllene, with generous amounts of Bisabolol, Terpinene, and Humulene carrying bright, fruity herbal tones."
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
          description: "Lamb’s Bread delivers a sweet, spicy flavor, thanks to its rich terpene profile dominated by caryophyllene, with supporting notes from myrcene and limonene. The effects are typically uplifting, energetic, and creativity-enhancing, making it a go-to for clear-headed daytime use."
        }
      ]
    },
        {
      title: "Rosin",
      price: ["0.05g - $5.99 | 0.10g - $12"],
      items: [
        { 
          name: "Blue Gusherz", 
          description: "Blue Gusherz is a flavorful, balanced hybrid with heavy body effects and a euphoric twist. Born from Triangle Kush and Gelato #41, this strain combines earthy kush, sweet berry, and creamy gas into one smooth, satisfying experience."
        },
        { 
          name: "Jelly Donutz", 
          description: "Jelly Donutz is a face-melting, high-energy sativa-dominant hybrid that delivers an explosion of fruity sweetness and unstoppable creative energy. With lineage from White Runtz, Hella Jelly, and two standout Jelly Donutz phenos, this strain brings bold flavor and serious uplift."
        },
                { 
          name: "White Trufflez", 
          description: "White Trufflez is a knockout indica-dominant hybrid that leans heavily into earthy, musky aromas with a powerful sedative edge. This phenotype of Gorilla Butter delivers dense, trichome-coated buds and an aroma of rich soil, garlic, and funk."
        },
                { 
          name: "Mandarin Cookies", 
          description: "Mandarin Cookies is an incredibly uplifting strain that has a sharp and tangy citrus citrus flavor rounded out by sweet and earthy Kush notes. Rich nutty and herbal flavors with citrus and spice makes Mandarin Cookies a mouthwatering dab."
        },
      ]
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-auto'>
      </div>
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
                    <h3 className="text-lg md:text-xl">{item.name}</h3>
                  </div>
                  <p className="text-gray-200 text-xs md:text-sm font-medium">{item.description}</p>
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