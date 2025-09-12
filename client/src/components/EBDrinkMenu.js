export default function EBDrinkMenu() {
  const menuSections = [
    {
      title: "Canna Cocktails",
      subtitle: "",
      items: [
        {
          name: "Strawberries & Cream - $8",
          description: "Strawberries, Coconut Milk, Strawberry Simple Syrup, Vanilla Simple Syrup, & Coconut Shavings",
          kava: true, // New kava data point
          prices: [
            { size: "", mg: "", price: "" },
          ]
        },
        {
          name: "Classic Mojito - $8",
          description: "Coconut Milk, Coconut Simple Syrup, Lime Juice, Gingerbeer, Mint",
          kava: true,
          prices: [
            { size: "", mg: "", price: "" },
          ]
        },
        {
          name: "Midnight Mimosa - $9",
          description: "Orange Juice, Blueberry Simple Syrup, Lime Juice, Lime Seltzer, Dried Lime ",
          prices: [
            { size: "", mg: "", price: "" },
          ]
        },
        {
          name: "Golden Hour - $7",
          description: "Apricot Simple Syrup, Ginger, Lemon Juice, Club Soda, Candied Apricots ",
          prices: [
            { size: "", mg: "", price: "" },
          ]
        },
        {
          name: "Watermelon Sugar High - $7",
          description: "Watermelon, Agave Syrup, Lime Juice, Club Soda, Rock Candy",
          prices: [
            { size: "", mg: "", price: "" },
          ]
        },
      ]
    },
    {
      title: "Loaded Sodas",
      subtitle: "",
      items: [
        {
          name: "Peachy Keen - $7",
          description: "Sprite, Peaches, Mango Simple Syrup, Coconut Milk",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
        {
          name: "Raspberry Kush - $7",
          description: "Sprite, Raspberries, Cranberry Juice, Raspberry Simple Syrup, & Lime juice",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
        {
          name: "Smooth Operator - $7",
          description: "Dr. Pepper, Caramel Sauce, Butterscotch Simple Syrup, Half & Half",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
        {
          name: "The Melon Doc - $7",
          description: "Dr. Pepper, Watermelon Simple Syrup, Coconut Milk",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
        {
          name: "Red Eye - $7",
          description: "Coke or Diet Coke, Grenadine, Vanilla Simple Syrup, Half & Half",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
        {
          name: "Blue Crush - $7",
          description: "Coke or Diet Coke, Blueberry Simple Syrup, Coconut Milk",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
      ]
    },
    {
      title: "Choose Your Own Adventure",
      items: [
        {
          name: "The Italian - $7",
          // Added <br /> tags for line breaks
          description: "Club soda with your choice of simple syrup. <br /> <br />Coconut, Lime, Blueberry, Lemon, Strawberry, Raspberry, Cranberry, Watermelon, Vanilla, Hazelnut, Caramel, Butterscotch.<br /> <br />(Add a splash of half & half or coconut milk for no charge!)",
          prices: [
            { size: "", mg: "", price: "" }
          ]
        },
        {
          name: "The Mojito - $8",
          description: "A classic mojito with your choice of additional simple syrup flavor",
          prices: [
            { size: "", mg: "", price: "" },
          ]
        },
        {
          name: "Draft Drinks - $6 12oz | $8 16oz",
          description: "Rootbeer, Cream Soda, Orange Soda, Pink Lemonade, Dam Water, Doobie Blastor ",
          prices: [
            { size: "Make it a Flight - $10 for 20mg", price: "" }, // Removed mg from here as it's not applicable
            { size: "Make it a Float - +$2", price: "" }, // Removed mg from here as it's not applicable
          ]
        },
        {
          name: "Seshees",
          description: "Choose from our rotating seshee flavors ",
          prices: [
            { size: "12oz", price: "$9", mg: "25mg" }, // Moved mg to correct field
            { size: "16oz", price: "$12", mg: "33mg" }, // Moved mg to correct field
          ]
        },
        {
          name: "Nitro Cold Brew ",
          description: "Add coconut milk or half & half plus your choice of simple syrup: Vanilla, Hazelnut, Caramel, Butterscotch",
          prices: [
            { size: "12oz", mg: "50mg blend of THCV/CBD/CBG", price: "$6" },
            { size: "16oz", mg: "100mg blend of THCV/CBD/CBG", price: "$12" },
          ]
        },
      ]
    },
  ];

  return (
    <div className="m-auto bg-black text-white p-8 border-2 border-SnapGreen w-5/6 rounded-lg"> {/* Added rounded-lg back */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl uppercase tracking-wider mb-2 text-center">Summer Drink Menu</h2>
        <p className="text-lg text-gray-300">Keep it virgin or Elevate it!</p>
        <p className="text-md text-gray-300">Canna 10mg - $3 / 25mg - $6 / 50mg - $9</p>
        <p className="text-md text-gray-300">Kava 100mg - $6</p>
      </div>
      {menuSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <h2 className="text-3xl uppercase tracking-wider mb-4 text-center">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-center text-gray-200 font-normal mb-4">{section.subtitle}<br />{section.price}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="space-y-1">
                <div className="border-b border-SnapGreen pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-normal mb-1">{item.name}</h3>
                      {item.options && (
                        <p className="text-sm text-gray-200">{item.options}</p>
                      )}
                    </div>
                  </div>
                  {/* Using dangerouslySetInnerHTML to render HTML line breaks */}
                  <p
                    className="text-gray-200 text-sm font-normal mt-1"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  >
                  </p>
                  {item.kava && ( // Conditionally render kava message
                    <p className="text-gray-300 text-sm font-normal mt-4">(Pairs well with Kava)</p>
                  )}
                  {/* Universal price rendering for items with prices array */}
                  {item.prices && item.prices.length > 0 && (
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