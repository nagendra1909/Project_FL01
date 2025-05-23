"use client";

import { useState } from 'react';
import { motion } from "framer-motion";

const ProjectInsight = () => {
  const [isTechnicalView, setIsTechnicalView] = useState(false);

  return (
    <section className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">PROJECT PORTFOLIO</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Data Science Project</h3>

            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium focus:outline-none transition ${!isTechnicalView ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                onClick={() => setIsTechnicalView(false)}
              >
                View as Stakeholder (High Level)
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium focus:outline-none transition ${isTechnicalView ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                onClick={() => setIsTechnicalView(true)}
              >
                Technical Reviewer (Low Level)
              </button>
            </div>

            {isTechnicalView ? (
              <div className="text-gray-700 dark:text-gray-300">
                <h4 className="text-xl font-semibold mb-3">Technical Details</h4>
                <p className="mb-4">Detailed technical insights and code snippets related to the project implementation.</p>
                <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm text-gray-300">
{`from sklearn.metrics import confusion_matrix

# Train the model
# Make predictions
y_pred = model.predict(X_test)
accuracy = confusion_matrix(y_tet, y_pred)`}
                    </code>
                  </pre>
                </div>
              </div>
            ) : (
              <div className="text-gray-700 dark:text-gray-300">
                <h4 className="text-xl font-semibold mb-3">Insight</h4>
                <p className="mb-4">The model identified key customer segments, which can help to target marketing efforts.</p>
                {/* Placeholder for chart/visual element */}
                <div className="w-full h-40 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-400">
                  [Placeholder for Chart/Visual]
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectInsight;
