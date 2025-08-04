
import React from 'react';
import { Award, Globe, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Mern Stack Developer 
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Tulasi Prasanna, a  MERN Stack Developer dedicated to building modern, responsive, and scalable web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, 
                I specialize in creating seamless full-stack solutions—from intuitive front-end interfaces to robust back-end architectures
              </p>
              
              <p>
              I thrive on turning ideas into interactive digital products, writing clean and maintainable code, 
              and solving real-world problems through technology. Whether it’s a single-page application, a dynamic dashboard, or an e-commerce platform,
              I aim to deliver fast, user-friendly, and performance-optimized web experiences.
              </p>
              
              <p>
                Driven by curiosity and continuous learning, I keep up with evolving tech trends and best practices to ensure every project I work on is efficient, secure, and future-ready.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Details</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-medium">Name:</span> Tulasi Prasanna</li>
                      <li><span className="font-medium">Email:</span> tulasiprasannamarisetti@gmail.com</li>
                      <li><span className="font-medium">Location:</span> Tadepalligudem, India</li>
                      <li><span className="font-medium">Available:</span> For freelance & full-time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-medium">English:</span> Fluent</li>
                      <li><span className="font-medium">Telugu:</span> Native</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>C Programing Certification</li>
                      <li>Certification In Software Developer Intern at Micro IIT</li>
                      <li>OPTIFYX Certification in Frontend-Development Program</li>
                      <li>Soft Skills Certification in Mepro</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
