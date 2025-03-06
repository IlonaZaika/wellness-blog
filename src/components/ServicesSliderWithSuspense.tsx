import { Suspense } from "react";
import ServicesSlider from "./ServicesSlider";

// Export with Suspense Wrapper for Next.js
const ServicesSliderWithSuspense = () => (
  <Suspense fallback={<div>Loading services...</div>}>
    <ServicesSlider />
  </Suspense>
);

export default ServicesSliderWithSuspense;
