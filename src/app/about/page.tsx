import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa"

const AboutPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-28">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.</p>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / Gitlab / Github</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>AWS</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="mb-16" >
        <h2 className="section-title">Experiences</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-primary mb-2">Kasikorn Bussiness Technology Group • 2022 - Present</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Blockchain Solution & Research.</li>
              <li>DevSecOps.</li>
              <li>Blockchain & Artificial Intelligence (AI) Project</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Analyst Programmer</h3>
            <p className="text-primary mb-2">alphametrics co. ltd • 2019 - 2021</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Microsoft Dynamics NAV and Business Central.</li>
              <li>Modified Microsoft standard program to support customer business.</li>
              <li>Business Solution Consultant.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Data Scientist</h3>
            <p className="text-primary mb-2">Persona Solution • 2019 - 2019</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>mage Processing, Machine Learning and IOT.</li>
              <li>Detection Vehicle & Plate from CCTV camera.</li>
              <li>Develop an intelligent OCR system.</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="mb-16" >
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Mahasarakham University • 2015 - 2018</p>
            <p className="text-secondary">Graduated in Computer Science. Relevant coursework included Data Structures, Algorithms, Database Systems,
              Web Development, and Software Engineering.</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default AboutPage