import { motion } from "framer-motion";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
function About() {
  return (
    <>
<div className="bg-black">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[75px] text-gray-400 font-semibold text-center px-4">
        My Story
    </h1>
    <div className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40 my-0 pt-8 sm:pt-10 pb-12 sm:pb-20 bg-black">
      {[
        `My name is Saad Khan, a name given to me by my father, Mohd Javed, on April 14, 2004, the day I was born in a small village in Sursanda, Uttar Pradesh, India. My family was overjoyed at my arrival, and as I grew up, so did my curiosity about the world around me. I was always fascinated by how small gadgets could perform complex tasks like connecting people and entertaining us. These little questions sparked my curiosity and fueled my passion for technology.`,
        `My academic journey began at Chandra Shekhar Azad College, Rasuli, where I completed my primary education. Later, I moved to Young Stream Academy for high school and intermediate studies. My teachers often praised me, especially my math teachers, who recognized my analytical mindset. I am particularly grateful to my math teacher, whose guidance deepened my love for mathematics. During my school years, I was introduced to coding and took my first steps into web development by learning HTML and CSS.`,
        `In 2022, I embarked on my tech career by enrolling in the Goel Group of Higher Studies, Mahavidyalaya, Lucknow, to pursue a Bachelor of Computer Applications (BCA). This decision has been one of the best of my life. My college provided me with numerous opportunities to enhance my technical skills, and I was fortunate to learn from highly knowledgeable faculty members who were always willing to help us grow.`,
        `My journey into web development started with simple HTML & CSS projects, but my curiosity soon led me to explore JavaScript and backend technologies. During my second year, I discovered the power of MongoDB, Express.js, React, and Node.js (MERN Stack)—and I was instantly hooked. Through various projects, I gained hands-on experience in building full-stack applications, working with APIs, and managing databases efficiently.`,
        `In my second year of college, I had the incredible opportunity to take an internship course at Coding Blocks. I am deeply grateful to my mentor, Mr. Subhanshu Gautam, who taught me the complete MERN stack and patiently helped me debug and refine my code whenever I faced challenges.`,
        `With my growing expertise in full-stack development, I took on the challenge of building my own MERN-based project, Shopify, in my second year. Additionally, I actively contributed to open-source projects, which further honed my problem-solving and teamwork skills. I am always eager to innovate and build something new.`,
        `As I continue to grow as a developer, I look forward to tackling challenging projects that push my skills even further. I am passionate about creating seamless web experiences and am always open to collaboration, learning, and innovation. Feel free to check out my projects and connect with me!`
      ].map((text, index) => (
        <motion.p
          key={index}
          className="mb-6 sm:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={textVariants}
        >
          {text.split(/(Saad Khan|Mohd Javed|April 14, 2004|in Sursanda, Uttar Pradesh, India|Chandra Shekhar Azad College, Rasuli|Young Stream Academy|HTML and CSS|2022|Goel Group of Higher Studies, Mahavidyalaya, Lucknow|Bachelor of Computer Applications \(BCA\)|MongoDB, Express.js, React, and Node.js \(MERN Stack\)|internship course at Coding Blocks|Mr. Subhanshu Gautam|MERN stack|MERN-based project, Shopify|open-source projects|my projects and connect with me!)/g).map((part, i) =>
            ["Saad Khan", "Mohd Javed", "April 14, 2004", "in Sursanda, Uttar Pradesh, India", "Chandra Shekhar Azad College, Rasuli", "Young Stream Academy", "HTML and CSS", "2022", "Goel Group of Higher Studies, Mahavidyalaya, Lucknow", "Bachelor of Computer Applications (BCA)", "MongoDB, Express.js, React, and Node.js (MERN Stack)", "internship course at Coding Blocks", "Mr. Subhanshu Gautam", "MERN stack", "MERN-based project, Shopify", "open-source projects", "my projects and connect with me!"].includes(part) ? (
              <span key={i} className="text-red-500">{part}</span>
            ) : (
              part
            )
          )}
        </motion.p>
      ))}
    </div>
</div>
    </>
  )
}

export default About
