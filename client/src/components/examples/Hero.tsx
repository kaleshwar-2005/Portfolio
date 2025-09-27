import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      name="Kaleshwar Lakaram"
      title="Full Stack Developer & CS Student"
      description="Passionate computer science student specializing in full-stack web development. Building responsive web applications with modern technologies and always eager to learn new frameworks."
      email="kaleshwarlakaram2005@gmail.com"
      phone="9182375278"
      github="kaleshwar-2005"
      linkedin="Kaleshwar Lakaram"
      skills={['React.js', 'Node.js', 'MongoDB', 'Python', 'Java', 'Express.js']}
    />
  );
}