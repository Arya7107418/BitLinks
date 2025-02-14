export default function GitHub() {
    // You can update this to your actual GitHub repository URL
    const GITHUB_URL = "https://github.com/Arya7107418/BitLinks";
    
    // If running on client side, redirect to GitHub
    if (typeof window !== "undefined") {
      window.location.href = "https://github.com/Arya7107418/BitLinks";
    }
    
    return (
      <main className="pt-20 min-h-screen bg-purple-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-purple-900 mb-4">
            Redirecting to GitHub...
          </h1>
          <p className="text-purple-700">
            If you're not redirected automatically,{" "}
            <a 
              href={"https://github.com/Arya7107418/BitLinks"}
              className="text-purple-500 hover:text-purple-600 underline"
            >
              click here
            </a>
          </p>
        </div>
      </main>
    );
  }