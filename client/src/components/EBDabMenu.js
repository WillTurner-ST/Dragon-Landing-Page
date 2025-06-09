export default function DrinkMenu() {
    const menuSections = [
      {
        title: "ON-TAP",
        subtitle: "ELEVATE IT! 10MG-$3 | 25MG-$6 | 50MG-$9",
        items: [
          { 
            name: "Draft Drinks", 
            description: "Pink Lemonade, Cream Soda, Dam Water, Doobie Blast, Rootbeer, or Orange Soda. Choose any 4 flavors to create a flight",
            prices: [
              { size: "12oz", mg: "10MG", price: "$6" },
              { size: "16oz", mg: "13MG", price: "$8" },
              { size: "Pick 4 (24oz total)", mg: "20MG", price: "$10" }
            ]
          },
          { 
            name: "Nitro Cold Brew", 
            description: "50MG blend of: THCV/CBD/CBG. Add coconut milk or half & half and your choice of simple syrup: Vanilla, Hazelnut, Caramel, or Butterscotch",
            prices: [
              { size: "‎ ", mg: "‎ ", price: "‎ " },
              { size: "16oz", mg: "100MG", price: "$10" },
              { size: "12oz", mg: "50MG", price: "$6" }
            ]
          }
        ]
      },
      {
        title: "Warmup",
        subtitle: "Keep it virgin OR ELEVATE IT! 10MG-$3 | 25MG-$6 | 50MG-$9",
        items: [
          { 
            name: "Winter Wonderland", 
            description: "Peppermint and vanilla simple syrup, whipped cream, topped with crushed candy canes.",
            prices: [
              { size: "", mg: "", price: "$5" }
            ]
          },
          { 
            name: "Golden Drizzle", 
            description: "Caramel and butterscotch simple syrup, whipped cream, topped with a caramel drizzle",
            prices: [
              { size: "", mg: "", price: "$5" }
            ]
          },
          { 
            name: "Mocha Cocoa", 
            description: "Vanilla simple syrup, whipped cream, topped with a chocolate drizzle & chocolate shavings.",
            prices: [
              { size: "", mg: "", price: "$5" }
            ]
          }
        ]
      },
      {
        title: "Chill Out",
        items: [
          { 
            name: "Ice Cream Float", 
            description: "Your choice of Butterbeer, Root Beer, Orange soda, or Cream soda with vanilla ice cream.",
            prices: [
              { size: "", mg: "10MG", price: "$8" }
            ]
          },
          { 
            name: "Seshees", 
            description: "Blue Raspberry, Grape, Tropical Rush, Strawberry, Candy Apple, or Margarita.",
            prices: [
              { size: "12oz", mg: "25MG", price: "$9" },
              { size: "16oz", mg: "33MG", price: "$12" }
            ]
          }
        ]
      },
      {
        title: "LOADED SODAS",
        subtitle: "Keep it virgin OR ELEVATE IT! 10MG-$3 | 25MG-$6 | 50MG-$9",
        items: [
          { 
            name: "Love Doctor", 
            description: "Dr. Pepper, raspberry simple syrup, & coconut milk.",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          },
          { 
            name: "Smooth Operator", 
            description: "Dr. Pepper, caramel simple syrup, caramel sauce, half & half.",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          },
          { 
            name: "Red Eye", 
            description: "Coke, grenadine, vanilla simple syrup, half & half.",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          },
          { 
            name: "Sour Diesel", 
            description: "Coke, lemon simple syrup, & ginger beer.",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          },
          { 
            name: "Cloud Nine", 
            description: "Sprite, blueberry simple syrup, & coconut milk.",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          },
          { 
            name: "Raspberry Kush", 
            description: "Sprite, cranberry juice, raspberry simple syrup, & lime juice.",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          }
        ]
      },
      {
        title: "CANNA COCKTAILS",
        subtitle: "Keep it virgin OR ELEVATE IT! 10MG-$3 | 25MG-$6 | 50MG-$9",
        items: [
          { 
            name: "Cranberry Chronic Mule", 
            description: "Cranberry juice, mint, cranberry simple syrup, & ginger beer",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          },
          { 
            name: "Pink Pony", 
            description: "Raspberry puree, lime juice, raspberry simple, syrup & berry seltzer.",
            prices: [
              { size: "", mg: "", price: "$8" }
            ]
          },
          { 
            name: "Blueberry Dream", 
            description: "Blueberries, mint, blueberry simple syrup, lime juice, & soda water.",
            prices: [
              { size: "", mg: "", price: "$8" }
            ]
          },
          { 
            name: "Wake & Bake Martini", 
            description: "Cold brew, hazelnut simple syrup, half & half, topped with sweet cold foam.",
            prices: [
              { size: "", mg: "", price: "$9" }
            ]
          },
          { 
            name: "The Italian", 
            description: "Club soda with your choice of simple syrup. Coconut, Lime, Blueberry, Lemon, Strawberry, Raspberry, Cranberry, Vanilla, Hazelnut, Peppermint, Caramel, Butterscotch. (Add a splash of half & half or coconut milk for no charge!)",
            prices: [
              { size: "", mg: "", price: "$7" }
            ]
          }
        ]
      }
    ];
  
    return (
      <div className="m-auto bg-black text-white p-8 border-2 border-SnapGreen w-2/3">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-3xl uppercase tracking-wider mb-2 text-center">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-center text-gray-200 font-normal mb-4">{section.subtitle}<br/>{section.price}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <div className="border-b border-SnapGreen pb-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-normal">{item.name}</h3>
                        {item.options && (
                          <p className="text-sm text-gray-200 font-normal mt-1">{item.options}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm font-normal">{item.description}</p>
                    {section.title === "ON-TAP" && item.prices && (
                      <div className="text-right text-gray-200 font-normal mt-1">
                        {item.prices.map((price, priceIndex) => (
                          <div key={priceIndex} className="flex justify-between">
                            <span>{price.size && `${price.size} `}{price.price}</span>
                            <span className="block text-sm text-gray-200 font-normal">{price.mg}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.title === "LOADED SODAS" && item.prices && (
                      <div className="text-right text-gray-200 font-normal mt-1">
                        {item.prices.map((price, priceIndex) => (
                          <div key={priceIndex} className="flex justify-between">
                            <span>{price.size && `${price.size} `}{price.price}</span>
                            <span className="block text-sm text-gray-200 font-normal">{price.mg}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.title === "CANNA COCKTAILS" && item.prices && (
                      <div className="text-right text-gray-200 font-normal mt-1">
                        {item.prices.map((price, priceIndex) => (
                          <div key={priceIndex} className="flex justify-between">
                            <span>{price.size && `${price.size} `}{price.price}</span>
                            <span className="block text-sm text-gray-200 font-normal">{price.mg}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
  
        <div className="mt-8 text-center text-sm text-gray-200 font-normal">
          *ALL PRICES & AVAILABILITY ARE SUBJECT TO CHANGE
        </div>
      </div>
    );
  }