import RainScene from "@/components/RainClouds";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute -z-10">
          <RainScene />
        </div>
        <div className="absolute z-10 w-full">
          <div className="mt-40 flex flex-col items-center">
            <p className="text-5xl text-center">FREQUENTLY ASKED QUESTIONS:</p>
            <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 faq mt-10 p-10">
              <div>
                <p>Q:</p>
                <p>What APIs have been utilized?</p>
                <p>A:</p>
                <ol>
                  <li>Google Air Quality</li>
                  <li>OpenWeather</li>
                  <li>Windy</li>
                  <li>Nominatim</li>
                </ol>
              </div>
              <div>
                <p>Q:</p>
                <p>What libraries have been utilized?</p>
                <p>A:</p>
                <ol>
                  <li>Motion</li>
                  <li>Spline</li>
                  <li>Tailwind</li>
                  <li>Recharts</li>
                  <li>D3</li>
                  <li>Three.js</li>
                </ol>
              </div>
              <div>
                <p>Q:</p>
                <p>What frameworks have been used?</p>
                <p>A:</p>
                <p>Next.js</p>
              </div>
              <div>
                <p>Q:</p>
                <p>What is the folder structure of this project?</p>
                <p>A:</p>
                <p>The project follows a typical Next.js structure, with folders for <code>pages</code>, <code>components</code>, and <code>public</code>. Styles are managed using Tailwind CSS in a <code>styles</code> folder, and API logic is centralized in a <code>services</code> or <code>utils</code> folder.</p>
              </div>
              <div>
                <p>Q:</p>
                <p>How is state management handled?</p>
                <p>A:</p>
                <p>State management is lightweight and primarily achieved using React's built-in hooks like <code>useState</code> and <code>useEffect</code>. For more complex state, context or external libraries like Redux or Zustand can be used.</p>
              </div>
              <div>
                <p>Q:</p>
                <p>How are API integrations structured?</p>
                <p>A:</p>
                <p>API calls are abstracted into a <code>services</code> folder, ensuring that all network logic is reusable and separate from UI components. This improves maintainability and scalability.</p>
              </div>
            </div>
            <p className="text-5xl text-center mt-20">GOOGLE AIR QUALITY API:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            The Google Air Quality API is utilized to fetch real-time air quality data for a specified location. This API provides valuable insights into air pollutants such as PM2.5, PM10, and other metrics related to air quality. In the project, it powers features like displaying the air quality index (AQI) or creating visual representations of pollution levels in various regions.
            </div>
            <p className="text-5xl text-center">OPENWEATHER API:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            The OpenWeather API is leveraged to gather weather-related data such as temperature, humidity, wind speed, and precipitation forecasts. This API is essential for creating weather dashboards or integrating real-time weather updates into the application. Data from this API is often visualized using chart libraries like Recharts or D3 to provide users with intuitive and interactive weather summaries.
            </div>
            <p className="text-5xl text-center">WINDY API:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            The Windy API is employed for its specialized data on wind patterns and meteorological phenomena. It is particularly useful for displaying detailed wind maps and animations, often using tools like Three.js or custom overlays in the app. This adds a layer of interactivity and utility for users who need precise wind and weather information.
            </div>
            <p className="text-5xl text-center">NOMINATIM API:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            The Nominatim API, based on OpenStreetMap, is used for geocoding and reverse geocoding tasks. It helps convert location names into geographic coordinates and vice versa. This is critical for mapping features, like plotting weather or air quality data on a map, ensuring seamless integration of location-based services within the project.
            </div>
            <p className="text-5xl text-center">MOTION:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            The Motion library is a powerful animation library built on Framer Motion. It is used in the project to create smooth, interactive animations for UI components. For instance, transitions between screens, hover effects, and scroll-based animations are all handled by Motion. This enhances the user experience by making the interface more dynamic and visually appealing.
            </div>
            <p className="text-5xl text-center">SPLINE:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            Spline is a tool for creating and embedding 3D models and scenes in web applications. In the project, Spline may be used to generate 3D visuals, such as models of weather icons, interactive 3D charts, or immersive environmental effects. These assets can be seamlessly integrated with libraries like Three.js for further interactivity.
            </div>
            <p className="text-5xl text-center">TAILWIND CSS:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            Tailwind CSS is a utility-first CSS framework that enables rapid UI development. It simplifies styling by providing pre-defined classes for layout, typography, spacing, and more. In the project, Tailwind CSS ensures a consistent and responsive design system, significantly reducing the need for custom CSS while maintaining flexibility.
            </div>
            <p className="text-5xl text-center">RECHARTS:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            Recharts is a charting library built with React, used for creating simple yet effective data visualizations. In the project, Recharts is used to display weather and air quality data in formats such as bar charts, line graphs, and pie charts. It integrates seamlessly with React components, making it an ideal choice for lightweight and interactive charts.
            </div>
            <p className="text-5xl text-center">D3:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            D3.js (Data-Driven Documents) is a JavaScript library for creating complex and highly customizable data visualizations. In this project, D3 may be used for advanced visualization needs, such as interactive maps, force-directed graphs, or dynamic data-driven animations. It complements simpler charting libraries like Recharts by offering granular control over visual elements.
            </div>
            <p className="text-5xl text-center">THREE.JS:</p>
            <div className="mt-10 p-10 max-w-[70%]">
            Three.js is a powerful 3D graphics library used for rendering and animating 3D scenes in the browser. In the project, it powers the RainScene component and other immersive effects, such as cloud animations and weather simulations. Three.js adds a unique interactive layer that enhances the overall user experience.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}