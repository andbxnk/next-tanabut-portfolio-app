import Image from "next/image";

export default function Contact() {
  return (
    <div className="py-10 max-w-2xl mx-auto text-center mb-10 mt-10">
      <h1 className="text-3xl font-bold mb-6 font-prompt border-b-2 border-blue-600 pb-2 inline-block">Contact Me</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-md mt-6">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-50 shadow-sm">
            <Image 
              src="/profile.jpg" 
              alt="Tanabut Watayakone Profile" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 font-prompt">Tanabut Watayakone</h2>
        
        <div className="space-y-4 font-sarabun text-lg">
          <p>
            <strong className="text-gray-800">Email:</strong>{" "}
            <a href="mailto:tanabut1955@gmail.com" className="text-blue-600 hover:underline">tanabut1955@gmail.com</a>
          </p>
          <p>
            <strong className="text-gray-800">Phone:</strong>{" "}
            <a href="tel:0909859124" className="text-blue-600 hover:underline">090-985-9124</a>
          </p>
          <p>
            <strong className="text-gray-800">GitHub:</strong>{" "}
            <a href="https://github.com/andbxnk" target="_blank" className="text-blue-600 hover:underline">github.com/andbxnk</a>
          </p>
        </div>

        <div className="mt-8">
          <a 
            href="/tanabut.pdf" 
            download 
            className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}