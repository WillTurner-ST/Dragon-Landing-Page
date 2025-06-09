import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jackson C.",
    text: "This place was awesome. Pretty cheap prices compared to what I’m used to and the stuff was still really great. The vibe inside is so cool and my wife and I had nothing but fantastic customer service. The staff was knowledgeable and friendly and was more than happy to educate us. I wish I could remember their names so I could shout them out. 10/10",
    rating: 5,
  },
  {
    name: "Barricus B.",
    text: "A wonderful place to bring a person who enjoys a relaxing and accommodating atmosphere with a knowledgeable and kind hearted staff. Iggy gave us wonderful guidance in our choices and Brittany provided excellent service. Would recommend to anyone in the lifestyle of hemp or just looking to vibe. 10/10",
    rating: 5,
  },
  {
    name: "Janet b.",
    text: "The decor is loud and lively. I love the human touches to the lounge such as the handmade art and paintings on the walls. As well as customer service is excellent! The staff are friendly and inviting and are mindful of being attentive to everyone. The drinks are fantastic! If you are in a party mood highly recommend. But with all that said the place can be alittle overwhelming and overstimulating with all the neon decor and such.",
    rating: 5,
  },
];

export default function RotatingReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-white py-12 px-4">
      <h2 className="text-4xl mb-6">What Our Customers Say</h2>
      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1.0 }}
            className="bg-[#0D0D0D] border-DragYellow border-2 shadow-xl rounded-2xl p-6"
          >
            <p className="text-lg text-center font-normal tracking-wide text-gray-50">"{reviews[index].text}"</p>
            <div className="flex mt-3 justify-center">
              {[...Array(reviews[index].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400" size={30} />
              ))}
            </div>
            <span className="mt-3 text-white font-normal block text-center">
              - {reviews[index].name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}