interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const NewsCard = ({ title, date, image, description }: NewsCardProps) => {
  return (
    <div className="news-card bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;