import { Briefcase, Code, Smartphone } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-6">
          {[
            {
              title: 'Voluntary Project',
              description: 'Designed and developed a real-time bus tracking mobile App to reduce passenger waiting times by enabling users to view current bus locations. Implemented the full project architecture with RESTful APIs using Node.js, HTTP for client communication, MQTT for receiving GPS data, and Redis for real-time location updates caching.',
              tech: ['React Native', 'React', 'Node.js', 'Express', 'MySQL', 'Docker', 'Redis', 'Map Integration'],
              date: '2025 Mar - Present (4 Months)',
              icon: <Code className="w-5 h-5 text-primary" />,
            },
            {
              title: 'Freelance Full Stack Developer',
              description: 'Developed and deployed web and mobile applications for various clients, optimizing performance and user experience.',
              tech: ['React Native', 'Expo', 'MEARN Stack', 'Docker', 'CI/CD', 'Microservices'],
              date: '2023 Nov - Present (2 Years)',
              icon: <Smartphone className="w-5 h-5 text-primary" />,
            },
            {
              title: 'Aldtan (pvt) Ltd- Intern Software Engineering',
              description: 'Integrated the repository design pattern with TypeORM, ensuring better maintainability and scalability. Enhanced the backend architecture for the microservices based project and built a responsive web interface using React js, adhering to Figma design.',
              tech: ['React', 'Nest', 'Express', 'Node', 'CI/CD', 'MySQL', 'Docker', 'TypeORM', 'Zod'],
              date: '2024 Nov - 2025 Feb (3 Months)',
              icon: <Briefcase className="w-5 h-5 text-primary" />,
            },
            {
              title: 'jWare Automation (pvt) Ltd- Intern Software Engineering',
              description: ' Introduced a new status code strategy to track the progress of cash requests across four sections and enhanced the backend infrastructure for the Hayleys Fenton’s Cash App. Initiated and led the AutoCAD Design Generator Project, implementing a user friendly interface using React and managing backend functionalities with Laravel and MySQL.',
              tech: ['Node', 'Express', 'React', 'PHP', 'Laravel', 'MySQL', 'Migrations', 'Git', 'S3 Bucket', 'Agile Methodologies'],
              date: '2023 Oct - 2024 Jan (3 Months)',
              icon: <Briefcase className="w-5 h-5 text-primary" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="relative border-l border-border pl-6 pb-6 last:pb-0">
              <div className="absolute -left-3.5 top-1">
                <div className="p-2 bg-primary/10 rounded-full">{item.icon}</div>
              </div>
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-sm text-primary font-medium">
                    {item.tech.map((tech, index) => (
                      <span key={index} className="bg-primary/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 md:ml-auto font-semibold">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
