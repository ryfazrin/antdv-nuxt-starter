<script lang="ts" setup>
const scale = ref(1)

const handleScale = () => {
  const { innerWidth } = window
  const width40 = innerWidth * 0.4

  if (width40 < 640) scale.value = Math.ceil(width40) / 640
  else if (scale.value !== 1) scale.value = 1
}

onMounted(() => {
  window.addEventListener('resize', handleScale)
  handleScale()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleScale)
})
</script>

<template>
  <div
    style="
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    "
  >
    <div style="position: absolute; width: 100%; height: 100%; top: 0; left: 0">
      <nuxt-img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjcyMCIgdmlld0JveD0iMCAwIDY0MCA3MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDZfNTE1KSI+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iNzIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTA2XzUxNSkiLz4KPHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSI3MjAiIGZpbGw9InVybCgjcGFpbnQxX3JhZGlhbF8xMDZfNTE1KSIgZmlsbC1vcGFjaXR5PSIwLjc4Ii8+CjxyZWN0IHdpZHRoPSI2NDAiIGhlaWdodD0iNzIwIiBmaWxsPSJ1cmwoI3BhaW50Ml9yYWRpYWxfMTA2XzUxNSkiLz4KPHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSI3MjAiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8xMDZfNTE1KSIvPgo8cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjcyMCIgZmlsbD0idXJsKCNwYWludDRfcmFkaWFsXzEwNl81MTUpIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2ZfMTA2XzUxNSkiPgo8ZWxsaXBzZSBjeD0iNzcuNjE4NiIgY3k9Ijk2LjcyOCIgcng9IjI3NC42ODciIHJ5PSIzMDguOTY5IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzYuODY2NyA3Ny42MTg2IDk2LjcyOCkiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2ZfMTA2XzUxNSkiPgo8ZWxsaXBzZSBjeD0iODcuOTc1MSIgY3k9IjcxNS4zOTQiIHJ4PSIzMjciIHJ5PSIyNjUiIHRyYW5zZm9ybT0icm90YXRlKC0zNi44NjY3IDg3Ljk3NTEgNzE1LjM5NCkiIGZpbGw9IiNCNDk3RkYiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9mXzEwNl81MTUpIj4KPHBhdGggZD0iTTk5OCA0ODIuNUM5OTggNjk3LjYxNSA4ODMuNSA4NTkgNjA4LjUgODcyQzMzMy41IDg4NSAzNDguNSA3MDguNSAyMTkgNDgyLjVDODkuNSAyNTYuNSAzOTMuMzg1IDkzIDYwOC41IDkzQzgyMy42MTUgOTMgOTk4IDI2Ny4zODUgOTk4IDQ4Mi41WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzEwNl81MTUpIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzEwNl81MTUiIHg9Ii0zMDkuODg2IiB5PSItMzAwLjM4OSIgd2lkdGg9Ijc3NS4wMDkiIGhlaWdodD0iNzk0LjIzMyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1MCIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzEwNl81MTUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZl8xMDZfNTE1IiB4PSItMzE4LjIwMyIgeT0iMzI2LjUzOSIgd2lkdGg9IjgxMi4zNTYiIGhlaWdodD0iNzc3LjcxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUwIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA2XzUxNSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9mXzEwNl81MTUiIHg9Ijg3Ljk0NzYiIHk9Ii03IiB3aWR0aD0iMTAxMC4wNSIgaGVpZ2h0PSI5NzkuNjc1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUwIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA2XzUxNSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEwNl81MTUiIHgxPSI2NDAiIHkxPSI3MDYuMDkxIiB4Mj0iLTI3NC4wOTgiIHkyPSItNTIuNzAxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzQxRDY1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYwNEFFQSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWxfMTA2XzUxNSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg2MDMuNjM2IDY3OS45MDkpIHJvdGF0ZSgtMTMwLjgzOCkgc2NhbGUoNTQ4LjI5NiAxMDQ1LjU4KSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0MUY0RkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjMyMjkxNyIgc3RvcC1jb2xvcj0iIzgzREFGRiIgc3RvcC1vcGFjaXR5PSIwLjg0Ii8+CjxzdG9wIG9mZnNldD0iMC42NDA2MjUiIHN0b3AtY29sb3I9IiM2M0FGRjAiIHN0b3Atb3BhY2l0eT0iMC41MSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyQjVBRDMiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50Ml9yYWRpYWxfMTA2XzUxNSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyMjQuNzI3IC03OS4zNjM2KSByb3RhdGUoODMuMjQ5Mykgc2NhbGUoMzI3LjkxIDI5Mi41NDUpIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzc5MzZBRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3OTM2QUUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMTA2XzUxNSIgeDE9IjE2LjcyNzMiIHkxPSI3MDEuMTgyIiB4Mj0iNDM0Ljg1OCIgeTI9IjU4My44ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VGNTE2RCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QTY3RTMiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50NF9yYWRpYWxfMTA2XzUxNSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg2MDkuNDU1IDQzLjM2MzYpIHJvdGF0ZSgxMjEuNzc3KSBzY2FsZSg1MzAuMzExIDUwNi4xMTMpIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2MEU3MSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTQ3MDU3IiBzdG9wLWNvbG9yPSIjMTMwRDVDIiBzdG9wLW9wYWNpdHk9IjAuMjYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUEyM0Y4IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzEwNl81MTUiIHgxPSI4MjIuMTcyIiB5MT0iNTkxLjM3NCIgeDI9IjMyNy44NzQiIHkyPSI0ODMuMDgyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4wMjI4OTM3IiBzdG9wLWNvbG9yPSIjOUE5RUYyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlGNjBDRCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwNl81MTUiPgo8cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjcyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
        alt="layout-bg-image"
        fill
        quality="100"
        style="
          position: absolute;
          height: 100%;
          width: 100%;
          inset: 0px;
          color: transparent;
        "
      />
    </div>

    <!-- Content Sider -->
    <div
      style="
        display: flex;
        width: 540px;
        height: 456px;
        padding: 120px 50px 50px 50px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 20px;
        flex-shrink: 0;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        position: relative;
        border-color: transparent;
        margin-top: 100px;
      "
      :style="{
        transform: `scale(${scale})`,
      }"
    >
      <nuxt-img
        src="/images/layout/image-icon-auth.png"
        alt="card-image-auth"
        :width="435"
        :height="435"
        :quality="100"
        placeholder="blur"
        style="margin-top: -217.5px; position: absolute; top: 0; left: 80"
      />

      <h2
        style="
          color: #fff;
          font-size: 40px;
          font-weight: 900;
          line-height: 48px;
          font-family: inherit;
          margin: 0;
        "
      >
        <nuxt-img
          src="/images/layout/content-arrow.png"
          alt="arrow"
          :width="30"
          :height="40"
          :quality="100"
          style="margin-bottom: -5px; margin-inline-end: 10px"
        />
        Enjoy your freedom <br>
        to manage your CMS
      </h2>

      <p
        style="
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          line-height: 26px;
          margin: 0;
        "
      >
        Everything you need to manage is here, content, product, campaign.
        Generate pages based on CMS entries and easily update content across
        your site.
      </p>
    </div>
  </div>
</template>

<style lang="scss"></style>
