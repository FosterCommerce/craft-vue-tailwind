<template>

  <div class="md:fixed md:inset-x-0 md:top-0 md:flex md:justify-between md:items-center md:h-16 md:bg-white md:border-b md:border-gray-400">

    <header class="fixed inset-x-0 top-0 z-50 md:static md:border-b md:border-gray-400">

      <div class="h-16 flex justify-between items-center pl-5 pr-3 bg-white border-b border-gray-400 md:border-b-0">

        <a class="inline-block text-lg hover:text-orange-500" :href="info.siteUrl">{{ info.siteName }}</a>

        <button @click="isOpen = !isOpen" class="inline-block p-2 focus:outline-none md:hidden" type="button">
          <svg class="h-4 w-4 fill-current hover:text-orange-500 focus:text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            <path v-if="isOpen" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
          </svg>
        </button>

      </div>

    </header>

    <nav :class="isOpen ? 'is-open' : ''" class="fixed inset-x-0 z-40 md:static">

      <ul class="md:flex">
        <li class="px-5 py-3 border-t border-gray-400 md:border-t-0" v-for="item in navigation">
          <a class="inline-block font-display text-blue-500 hover:text-orange-500" :href="item.url">{{ item.title }}</a>
        </li>
      </ul>

    </nav>

    <div :class="isOpen ? 'is-open' : ''" class="mask absolute inset-0"></div>

  </div>

</template>

<script>
	export default {
		name: "SiteHeader",
    props: ["info", "navigation"],
    data() {
			return {
				isOpen: false
      };
    }
	}
</script>

<style scoped>

  a,
  button svg {
    transition: all 0.25s;
  }
  nav {

    top: 0;
    padding-top: 63px;
    transform: translate3d(0,-100%,0);
    transition: transform 0.5s;

    &.is-open {
      transform: translate3d(0,0,0);
    }

  }

  .mask {

    z-index: -1;
    background-color: rgba(255,255,255,0.9);
    opacity: 0;
    transition: all 0.25s;

    &.is-open {
      z-index: 30;
      opacity: 1;
    }

  }

  @screen md {

    nav {
      padding-top: 0;
      transform: translate3d(0,0,0) !important;
    }

    .mask {
      z-index: -1 !important;
      opacity: 0 !important;
    }

  }

</style>