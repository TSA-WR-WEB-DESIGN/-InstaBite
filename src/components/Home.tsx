import React, { useState } from 'react';
import { Users, UtensilsCrossed, Trophy, ArrowRight } from 'lucide-react';

function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src="https://www.frugalandthriving.com.au/wp-content/uploads/2017/08/simmering.jpg"
                alt="Young chef cooking"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Join Young Chefs Community
              </h2>
              
              <div className="space-y-8">
                {/* Benefits */}
                <div className="space-y-4">
                  <p className="text-lg text-gray-600">
                    Join thousands of young cooking enthusiasts and start your culinary journey today!
                  </p>
                  <ul className="space-y-3">
                    <li key="recipes" className="flex items-center text-gray-700">
                      <span className="bg-orange-100 p-1 rounded-full mr-3">
                        <UtensilsCrossed className="h-5 w-5 text-orange-600" />
                      </span>
                      Access to 1000+ kid-friendly recipes
                    </li>
                    <li key="community" className="flex items-center text-gray-700">
                      <span className="bg-orange-100 p-1 rounded-full mr-3">
                        <Users className="h-5 w-5 text-orange-600" />
                      </span>
                      Connect with other young chefs
                    </li>
                    <li key="badges" className="flex items-center text-gray-700">
                      <span className="bg-orange-100 p-1 rounded-full mr-3">
                        <Trophy className="h-5 w-5 text-orange-600" />
                      </span>
                      Earn badges and rewards
                    </li>
                  </ul>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 px-4 py-3"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                  >
                    Join Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>

                {/* Social Proof */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">50K+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">1000+</div>
                    <div className="text-sm text-gray-600">Recipes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">100K+</div>
                    <div className="text-sm text-gray-600">Successful Cooks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
