<template>
  <VitePwaManifest />

  <div class="bg-black fixed w-[calc(100%+1px)] h-full">
    <NuxtPage />

    <!-- berikan efek overlay dan tampilkan popup full berdasarkan state isMenuOverlay pada state user untuk menandakan user klik ikon post -->
    <CreatePost
      :class="[
          {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay },
          {'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay },
      ]"
    />

    <!-- berikan efek overlay dan tampilkan popup ditengah berdasarkan state isLogoutOverlay pada state user untuk menandakan user klik ikon logout -->
    <Modal 
      :class="[
          {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isLogoutOverlay },
          {'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isLogoutOverlay },
      ]"
    />
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

useHead({
  title: 'Threads - Homepage',
  meta: [
    { name: 'description', content: 'Threads App Clone - Homepage' }
  ],
})
</script>