import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SearchProvider } from "@/contexts/SearchContext";
import { SearchModal } from "@/components/search";

import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Changelog = lazy(() => import("./pages/Changelog"));
const Documentation = lazy(() => import("./pages/Documentation"));
const ApiReference = lazy(() => import("./pages/ApiReference"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AuditPage = lazy(() => import("./routes/index"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <SearchProvider>
          <SearchModal />
          <Suspense fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-background">
              <div className="w-16 h-1 bg-ui-border overflow-hidden rounded-full">
                <div className="w-full h-full bg-primary origin-left animate-loading-bar" />
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/docs/*" element={<Documentation />} />
              <Route path="/api/*" element={<ApiReference />} />
              <Route path="/audit" element={<AuditPage />} />
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
