
const Stats = () => {
  return (
    <section className="bg-purple-600 py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-purple-400">
        <div className="flex flex-col items-center justify-center px-12 py-4 md:py-0 w-full md:w-auto text-white">
          <h2 className="text-4xl font-bold mb-2">50K+</h2>
          <p className="text-purple-200 text-sm font-medium">Active Users</p>
        </div>
        <div className="flex flex-col items-center justify-center px-12 py-4 md:py-0 w-full md:w-auto text-white">
          <h2 className="text-4xl font-bold mb-2">200+</h2>
          <p className="text-purple-200 text-sm font-medium">Premium Tools</p>
        </div>
        <div className="flex flex-col items-center justify-center px-12 py-4 md:py-0 w-full md:w-auto text-white">
          <h2 className="text-4xl font-bold mb-2">4.9</h2>
          <p className="text-purple-200 text-sm font-medium">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
