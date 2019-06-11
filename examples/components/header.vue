<template>
  <header class="header">
    <div class="sidebar-button" @click="handleToggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        viewBox="0 0 448 512"
        class="icon"
      >
        <path
          fill="currentColor"
          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
        ></path>
      </svg>
    </div>
    <a class="title">TJUI</a>
    <div class="links">
      <div class="nav-item">
        <a href="https://myronyang.github.io/blog/">记录集</a>
      </div>
      <a class="repo-link" href="https://github.com/myronyang/TJUI">
        GitHub
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          width="15"
          height="15"
          class="icon outbound"
        >
          <path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          ></path>
          <polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          ></polygon>
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleToggle() {
      const $ele = document.querySelector("#sidebar"),
            $main = document.querySelector(".main"),
            className = $ele.getAttribute('class'),
            closeSidebar = function() {
              $ele.classList.remove("open");
            }
      
      if (className === "sidebar") {
        $ele.classList.add("open");
        $main.addEventListener("click", closeSidebar, false);
      } else {
        $ele.classList.remove("open");
        $main.removeEventListener("click", closeSidebar, false)
      }
    }
  }
};
</script>

