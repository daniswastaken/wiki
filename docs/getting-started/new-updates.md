---
layout: page
title: Redirecting...
---

<script setup>
if (typeof window !== 'undefined') {
  const isGitHubPages = import.meta.env.VITE_GITHUB_PAGES === 'true'
  console.log('VITE_GITHUB_PAGES:', import.meta.env.VITE_GITHUB_PAGES)  // Debug
  window.location.replace(isGitHubPages ? '/bedrock-perfected-wiki-vite/updates/26-2-0' : '/updates/26-2-0')
}
</script>
<style scoped>
body {
  background: transparent !important;
}
</style>
