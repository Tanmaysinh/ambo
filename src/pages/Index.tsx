import { Star, Users, Heart, Award, Clock, MapPin, TrendingUp, Globe, ChefHat, Calendar, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Expanded About Us */}
      <section id="about" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in mb-8">
              Welcome to AmboEats - where culinary passion meets exceptional service. 
              We're more than just a food delivery service; we're your gateway to extraordinary flavors and unforgettable dining experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At AmboEats, we believe that great food has the power to bring people together, 
                create lasting memories, and brighten your day. Our mission is to deliver not just meals, 
                but moments of joy and satisfaction to every customer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are committed to sourcing the finest ingredients, maintaining the highest standards 
                of food preparation, and ensuring that every dish that leaves our kitchen meets our 
                exacting standards for quality, taste, and presentation.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <span className="text-gray-700 font-medium">Made with love, served with pride</span>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <Card className="bg-orange-500 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
                  <ul className="space-y-4 text-orange-100">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Authentic recipes passed down through generations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Fresh, locally-sourced ingredients whenever possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personalized customer service that exceeds expectations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Continuous innovation while honoring traditional flavors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Strong commitment to our local community</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <ChefHat className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Culinary Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Every dish is crafted with precision, passion, and the finest ingredients to ensure an extraordinary dining experience.
              </p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <Users className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Community First</h3>
              <p className="text-gray-600 leading-relaxed">
                We're deeply rooted in our community, supporting local suppliers and giving back to the neighborhoods we serve.
              </p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                <Award className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Proven Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Our 4.8-star rating and 99.2% customer satisfaction rate speak to our unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Metrics Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">Our Growing Impact</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg animate-fade-in">
              From humble beginnings to becoming a trusted name in food delivery, 
              our numbers tell the story of excellence and community satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Users className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-1">15,000+</h3>
              <p className="text-gray-600 font-medium">Happy Customers</p>
              <p className="text-gray-500 text-sm mt-1">Growing daily</p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Award className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-1">4.8★</h3>
              <p className="text-gray-600 font-medium">Average Rating</p>
              <p className="text-gray-500 text-sm mt-1">Across all platforms</p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <TrendingUp className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-1">50,000+</h3>
              <p className="text-gray-600 font-medium">Orders Delivered</p>
              <p className="text-gray-500 text-sm mt-1">And counting</p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Globe className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-1">3</h3>
              <p className="text-gray-600 font-medium">Major Platforms</p>
              <p className="text-gray-500 text-sm mt-1">Maximum reach</p>
            </div>
          </div>

          {/* Single Impact Stat */}
          <div className="flex justify-center">
            <Card className="bg-orange-500 border-none hover-scale max-w-md">
              <CardContent className="p-8 text-center">
                <ChefHat className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">99.2%</h3>
                <p className="text-orange-100 text-lg font-medium mb-2">Customer Satisfaction</p>
                <p className="text-orange-50">Based on verified reviews and repeat orders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expanded Our Story Section with Timeline */}
      <section id="story" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg animate-fade-in">
              From a small family kitchen to a beloved community institution - discover our journey 
              through the years of passion, growth, and culinary excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* 2019-2020 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Card className="bg-orange-500 border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-8 h-8 text-white mr-3" />
                      <h3 className="text-2xl font-bold text-white">2019-2020: The Beginning</h3>
                    </div>
                    <p className="text-orange-100 leading-relaxed">
                      AmboEats started as a passionate family project in a small kitchen. Our founders, 
                      driven by their love for authentic flavors, began with just a handful of signature 
                      dishes and a dream to share exceptional food with the community.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4">Key Milestones</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Founded with 5 signature recipes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      First 100 satisfied customers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Local community recognition
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 animate-fade-in">
                <Card className="bg-orange-500 border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-8 h-8 text-white mr-3" />
                      <h3 className="text-2xl font-bold text-white">2021: Digital Expansion</h3>
                    </div>
                    <p className="text-orange-100 leading-relaxed">
                      We embraced the digital revolution by joining major food delivery platforms. 
                      This year marked our transition from a local favorite to reaching customers 
                      across the wider community through technology.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:order-1 animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4">Growth Achievements</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Joined Uber Eats platform
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Expanded menu to 25+ items
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Reached 1,000+ orders milestone
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2022 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Card className="bg-orange-500 border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-8 h-8 text-white mr-3" />
                      <h3 className="text-2xl font-bold text-white">2022: Multi-Platform Success</h3>
                    </div>
                    <p className="text-orange-100 leading-relaxed">
                      Our reputation for quality and consistency led to partnerships with DoorDash 
                      and Grubhub. We also focused on sourcing locally and building stronger 
                      relationships with our ingredient suppliers.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4">Platform Expansion</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Added DoorDash partnership
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Joined Grubhub network
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Local supplier partnerships established
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2023-2024 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 animate-fade-in">
                <Card className="bg-orange-500 border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-8 h-8 text-white mr-3" />
                      <h3 className="text-2xl font-bold text-white">2023-2024: Excellence & Recognition</h3>
                    </div>
                    <p className="text-orange-100 leading-relaxed">
                      Today, we continue to honor our roots while embracing innovation. Every meal 
                      reflects our unwavering commitment to excellence, with 15,000+ happy customers 
                      and a 4.8-star average rating across all platforms.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:order-1 animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4">Current Success</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      15,000+ satisfied customers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      50,000+ successful orders
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      99.2% customer satisfaction rate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-orange-500 font-semibold italic text-lg">
              "From our family kitchen to your table, every dish tells a story of passion, 
              quality, and community."
            </p>
          </div>
        </div>
      </section>

      {/* Expanded Meet Our Team Section */}
      <section id="team" className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg animate-fade-in">
              The passionate individuals behind AmboEats who work tirelessly to bring you 
              exceptional food and service every day. Each team member brings unique skills 
              and dedication to creating memorable dining experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <ChefHat className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Person 1</h3>
                <p className="text-orange-100 mb-4 font-medium">Head Chef & Co-Founder</p>
                <p className="text-orange-50 leading-relaxed">
                  With over 15 years of culinary experience, Person 1 brings creativity and 
                  passion to every dish, making AmboEats a local favorite with innovative 
                  recipes and perfect execution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Person 2</h3>
                <p className="text-orange-100 mb-4 font-medium">Operations Manager & Co-Founder</p>
                <p className="text-orange-50 leading-relaxed">
                  Person 2 ensures every customer experience exceeds expectations through 
                  dedication to quality service, streamlined operations, and building 
                  lasting relationships with our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Person 3</h3>
                <p className="text-orange-100 mb-4 font-medium">Customer Experience Lead</p>
                <p className="text-orange-50 leading-relaxed">
                  Person 3 leads our customer service team with a focus on creating 
                  exceptional experiences. Their attention to detail ensures every 
                  interaction reflects our commitment to excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Person 4</h3>
                <p className="text-orange-100 mb-4 font-medium">Quality & Innovation Director</p>
                <p className="text-orange-50 leading-relaxed">
                  Person 4 oversees quality control and menu innovation, ensuring 
                  we maintain the highest standards while continuously evolving 
                  to meet our customers' changing tastes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose AmboEats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our commitment 
              to excellence in every meal we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Heart className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We source the finest ingredients and maintain the highest standards in 
                food preparation to ensure every bite is exceptional.
              </p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Community Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in giving back to our community and creating connections 
                through shared meals and experiences.
              </p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously evolve our menu and service to exceed customer 
                expectations while staying true to our authentic flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Us Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Share Your Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us serve you better by sharing your experience with our community.
              Your feedback drives our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Uber Eats</h3>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-orange-100 text-sm mb-4">
                  Rate your AmboEats experience
                </p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold text-sm px-4 py-2">
                  Rate Us
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">DoorDash</h3>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-orange-100 text-sm mb-4">
                  Share your food journey
                </p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold text-sm px-4 py-2">
                  Rate Us
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 border-none hover-scale">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Grubhub</h3>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-current" />
                  ))}
                </div>
                <p className="text-orange-100 text-sm mb-4">
                  Help others discover us
                </p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold text-sm px-4 py-2">
                  Rate Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Experience AmboEats?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have made AmboEats their go-to choice 
            for exceptional food delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 hover-scale">
              Order Now
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 hover-scale">
              View Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
