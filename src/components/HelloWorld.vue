<template>

  <div class="hello max-w-lg mx-auto px-4 group-v-2 md:group-v-4">

    <img class="inline-block mx-auto" src="/assets/logo.png" />

    <div class="group-v-1">
      <h1 class="text-3xl">{{ msg }}</h1>
      <p>You're viewing the <code>&#060;HelloWorld&#062;</code> component!</p>
      <p>If this text is white, you've successfully installed Tailwind!</p>
      <p>Passing in some data from twig:</p>
    </div>

    <div class="p-4 rounded-lg leading-loose bg-black text-left">
      <code class="text-gray-500">
        <span class="text-white">Craft Version: </span>
        <span class="text-green-400">{{ info.craftVersion }}</span> (passed in
        as prop)<br />
        <span class="text-white">Environment: </span>
        <span class="text-green-400">{{ info.environment }}</span> (passed in as
        prop)<br />
        <span class="text-white">DB Name: </span>
        <span class="text-green-400"><slot></slot></span> (passed in through
        slot)
      </code>
    </div>

    <div class="grid grid-gap-5 md:grid-columns-3 lg:grid-columns-6 lg:grid-gap-8">
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
      <div class="h-6 bg-white"></div>
    </div>

    <div>
      <a class="btn btn--blue" href="#">Click Me</a>
    </div>

  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  props: ["info"],
  data() {
    return {
      msg: "Hello World"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  @apply text-white;
}
h1,
h2 {
  font-weight: normal;
}
</style>