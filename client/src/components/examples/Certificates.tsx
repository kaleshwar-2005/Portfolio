import Certificates from '../Certificates';

export default function CertificatesExample() {
  const certificates = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      icon: "🐍",
      description: "Fundamental Python programming concepts including data types, control structures, and functions.",
      credentialUrl: "#"
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco",
      icon: "🐍",
      description: "Advanced Python programming including object-oriented programming, exception handling, and modules.",
      credentialUrl: "#"
    },
    {
      title: "Introduction to Networks",
      issuer: "Cisco",
      icon: "🌐",
      description: "Networking fundamentals covering protocols, network models, and basic network configuration.",
      credentialUrl: "#"
    },
    {
      title: "IBM z/OS Mainframe Practitioner",
      issuer: "IBM",
      icon: "💻",
      description: "Comprehensive understanding of IBM mainframe systems and z/OS operating system fundamentals.",
      credentialUrl: "#"
    }
  ];

  return <Certificates certificates={certificates} />;
}