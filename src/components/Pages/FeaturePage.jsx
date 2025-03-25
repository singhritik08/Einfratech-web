import { motion } from "framer-motion";

export default function FeaturePage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Section 1 - Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full bg-blue-600 text-white p-6 sm:p-16 flex flex-col md:flex-row items-center justify-between shadow-xl"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="md:w-1/2"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white">
            Elevate Your Business with <span className="text-yellow-400">Smart Solutions</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
            Transform your workplace with next-gen automation, security, and cloud infrastructure.
          </p>
          <ul className="mt-6 sm:mt-8 space-y-3 text-base sm:text-lg font-semibold">
            {[
              "AI-Powered Insights",
              "Smart Workflow Automation",
              "Real-Time Data Processing",
              "Secure Cloud Integration"
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="flex-shrink-0">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img 
            src="https://www.hellotars.com/blog/wp-content/uploads/2023/05/33468239_8002021.jpg" 
            alt="AI Solutions" 
            className="rounded-xl shadow-2xl w-full sm:w-3/4 max-w-md hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.section>

      {/* Section 2 - Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-6 sm:p-16 grid md:grid-cols-2 gap-8 sm:gap-16 mt-8 sm:mt-16 md:mt-4"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-800 border-l-4 border-blue-700 pl-4 sm:pl-6">
            Key Features
          </h3>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {[
              { title: "Cloud-Based Access", description: "Manage your business from anywhere with secure, scalable cloud solutions." },
              { title: "Multi-Device Compatibility", description: "Seamless access across desktops, tablets, and mobile devices." },
              { title: "Predictive Analytics", description: "AI-driven insights to optimize workflows and reduce costs." },
              { title: "Customizable Workflows", description: "Tailor solutions to meet the unique needs of your business." },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition"
              >
                <h4 className="font-semibold text-lg sm:text-xl text-gray-900">{feature.title}</h4>
                <p className="text-gray-700 text-sm sm:text-base mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="flex flex-col space-y-6 justify-center"
        >
          <img 
            src="https://img.freepik.com/free-vector/new-functions-concept-illustration_114360-5986.jpg" 
            alt="Cloud Solutions" 
            className="rounded-xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-300 md:ml-20"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}