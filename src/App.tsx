import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SearchProvider } from "@/contexts/SearchContext";
import { SearchModal } from "@/components/search";
import { CustomCursor } from "@/components/CustomCursor";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Changelog = lazy(() => import("./pages/Changelog"));
const Documentation = lazy(() => import("./pages/Documentation"));
const ApiReference = lazy(() => import("./pages/ApiReference"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <BrowserRouter>
        <SearchProvider>
          <SearchModal />
          <Suspense fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-background">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/docs/*" element={<Documentation />} />
              <Route path="/api/*" element={<ApiReference />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SearchProvider>
      </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
