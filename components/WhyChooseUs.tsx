import Image from 'next/image';

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      title: 'SPORTS',
      description: 'Engage in a variety of sports activities and develop your physical skills in a fun and supportive environment.',
      image: '/images/sports.jpg',
    },
    {
      id: 2,
      title: 'EDUCATION',
      description: 'Receive a top-notch education with experienced teachers and a curriculum designed to foster critical thinking and creativity.',
      image: '/images/education.jpg',
    },
    {
      id: 3,
      title: 'CULTURE',
      description: 'Immerse yourself in cultural activities and learn about different traditions, fostering a deep appreciation for diversity.',
      image: '/images/culture.jpg',
    },
    {
      id: 4,
      title: 'INFRASTRUCTURE',
      description: 'Benefit from state-of-the-art infrastructure that supports your learning and extracurricular activities.',
      image: '/images/infrastructure.jpg',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Why Choose Us</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" className="rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-white">
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm leading-tight">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
