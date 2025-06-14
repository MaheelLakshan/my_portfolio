import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {' '}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web & Mobile app Developer</h3>

            <p>
              As a <span className="text-primary font-bold"> B.Sc. (Hons) Software Engineering graduate with a Second Upper Class, </span>
              <span className="text-muted-foreground">
                I’ve gained over
                <span className="text-primary font-bold"> 2 years </span>
                of experience in web development, specializing in creating responsive, accessible, and performant web applications using modern JavaScript-based technologies.
              </span>
            </p>

            <p className="text-muted-foreground">I'm passionate about building elegant solutions to complex problems, with a strong focus on both web and mobile app development. I continuously explore new technologies and techniques to stay ahead in the ever-evolving tech landscape.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="/maheelLakshan_react_native_cv.pdf" download className="cosmic-button">
                Download React Native CV
              </a>

              <a href="/maheelLakshan_common_cv.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Common CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and web applications with modern JavaScript based frameworks.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile App Developer</h4>
                  <p className="text-muted-foreground">Experienced with both React Native CLI and Expo for mobile app development.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
