import React from "react";

const Footer = () => {
  return (


<footer class="bg-black rounded-lg shadow m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center">© 2024 <a href="https://snapdragonhemp.com/" class="hover:underline">Snapdragon Cannabis Co™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
            <a href="/" class="hover:underline me-4 md:me-6 font-bold">About</a>
        </li>
        <li>
            <a href="https://www.snapdragonhemp.com/privacy-policy/" class="hover:underline me-4 md:me-6 font-bold">Privacy Policy</a>
        </li>
        <li>
            <a href="https://www.snapdragonhemp.com/terms-of-service/" class="hover:underline me-4 md:me-6 font-bold">Terms of Service</a>
        </li>
        <li>
            <a href="mailto:contact@snapdragonhemp.com" class="hover:underline font-bold">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  );
};

export default Footer;
