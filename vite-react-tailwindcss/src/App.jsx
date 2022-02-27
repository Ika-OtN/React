
import React, { useState }  from "react"


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    // mobile first Ansatz
    <div>

      <div class="text-center">
        <button class="m-10 px-6 py-2 bg-gray-600 text-white font-semibold hover:bg-gray-700 rounded-md">DarkMode</button>
      </div>

      <div class="dark:bg-black flex flex-col items-center md:flex-row md:justify-center">
        
        <div class="shadow-md m-4 max-w-lg hover:shadow-lg xl:grid grid-cols-5 xl:max-w-2xl">
          <img src="./images/image1.jpg" alt='' class="col-span-3 w-full h-48 object-cover" />
          <div class="p-6 col-span-2">
            <h3 class="text-blue-400">Pizza, Rezepte</h3>
            <h2 class="text-2xl font-bold pt-2 pb-1 dark:text-white">Leckere Pizza</h2>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque!
            </p>
          </div>
        </div>

        <div class="shadow-md m-4 max-w-lg hover:shadow-lg xl:grid grid-cols-5 xl:max-w-2xl">
          <img src="./images/image2.jpg" alt='' class="col-span-3 w-full h-48 object-cover" />
          <div class="p-6 col-span-2">
            <h3 class="text-blue-400">Pizza, Rezepte</h3>
            <h2 class="text-2xl font-bold pt-2 pb-1 dark:text-white">Leckere Pizza</h2>
            <p class="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque!
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
