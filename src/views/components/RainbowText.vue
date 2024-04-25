<template>
  <div class="flex flex-col gap-2 items-start text-black">
    <div class="flex items-center gap-3">
      <span class="text-2xl tracking-tight">seven rings</span>
      <span class="text-sm opacity-50 px-3 py-1 rounded-full bg-black/5"
        ><span class="font-nunito">@</span>svnrnns</span
      >
    </div>
    <span class="text-2xl tracking-tight"
      >fullstack developer at
      <a
        href="https://zeus.vision/"
        target="_blank"
        class="font-bold rainbow-text"
        >Zeus</a
      ></span
    >
    <div class="flex items-center gap-3 text-font mt-3">
      <span>About</span>
      <a href="mailto:haruueel@gmail.com">Mail</a>
      <a href="https://www.linkedin.com/in/svnrnns/" target="_blank"
        >Linkedin</a
      >
    </div>
  </div>
</template>

<style scoped>
@keyframes rainbow {
  0% {
    color: #b02c4d;
  }
  25% {
    color: #9b29ab;
  }
  50% {
    color: #2727a3;
  }
  75% {
    color: #34a324;
  }
  100% {
    color: #b02c4d;
  }
}
.rainbow-text {
  animation: rainbow 10s infinite;
}
</style>
