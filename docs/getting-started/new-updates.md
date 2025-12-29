---
layout: page
title: Redirecting...
---

<script setup>

const isGitHubPages = import.meta.env.GITHUB_PAGES === 'true'

if (typeof window !== 'undefined') {
  window.location.replace(isGitHubPages ? '/bedrock-perfected-wiki-vite/updates/26-1-0' : '/updates/26-1-0')
}
</script>

<style scoped>
body {
  background: transparent !important;
}
</style>