
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} АвтоШаблон. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
