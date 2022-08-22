<template>
  <div class="container mx-auto">
    <header
      class="w-full absolute rounded-none bg-none items-center transition-all transform ease duration-200 h-16 z-40"
    >
      <div
        class="relative transition-width ease-out duration-200 z-20 flex justify-center h-full flex mx-auto px-5 lg:px-3 xl:px-0 w-full max-w-6xl flex-center"
      >
        <div
          class="relative left-0 flex items-center justify-start flex-shrink-0 h-full lg:w-40 flex-shrink-0"
        >
          <HeaderMainButton></HeaderMainButton>
          <div class="flex items-center justify-start w-full h-full">
            <HeaderMenuButton></HeaderMenuButton>
          </div>
        </div>
        <div class="relative flex items-center w-full pl-5 lg:pl-1">
          <div class="w-full flex items-center">
            <HeaderSearchBar></HeaderSearchBar>
          </div>
        </div>
        <div
          id="nav_right_container"
          class="relative right-0 lg:min-w-80 flex items-center justify-end flex-shrink-0 lg:w-80 mr-0"
        >
          <BaseButton label="Login" cssClass="text-gray-600 bg-gray-100"></BaseButton>
          <BaseButton label="Singup" cssClass="text-gray-100 bg-gray-900"></BaseButton>
        </div>
      </div>
    </header>
    <div class="w-full h-full pt-14">
      <!-- <img src="/public/backgroud.avif" alt="" /> -->
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-800 text-white",
    },
    title: "Nuxt.js with TailwindCSS",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with TailwindCSS example",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
