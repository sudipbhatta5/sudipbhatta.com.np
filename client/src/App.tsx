import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import News from "./pages/News";
import NotFound from "./pages/not-found";
import Footer from "@/components/Footer"; // Added import for Footer component


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/news" component={News} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <div className="min-h-screen flex flex-col"> {/* Modified div to add Footer */}
        <Navigation />
        <Router />
        <Footer /> {/* Added Footer component */}
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

// Using the Footer component from components/Footer.tsx instead