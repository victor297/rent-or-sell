import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-gray-300 px-3 min-h-[40rem] flex items-center justify-center">
      <div className="w-full max-w-7xl text-center py-14">
        <h1 className="text-white text-6xl lg:text-7xl font-extrabold mb-4">
          Rent or sell house at best price.
        </h1>
        <p className="leading-loose mb-10 max-w-2xl mx-auto">
          rentorsell is an innovative web and mobile application designed to simplify the process of finding, listing, and managing properties for rent or sale. This comprehensive real estate platform caters to property owners, real estate agents, and individuals searching for their next home or investment opportunity.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <Link
            to="/login"
            className="btn bg-white text-gray-900 hover:bg-gray-200 flex-shrink-0 w-[160px]">
            Login
          </Link>
          <Link to="/login" className="btn btn-primary flex-shrink-0 w-[160px]">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
