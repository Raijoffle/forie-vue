<template>
    <div class="loadingpage">
        <div class="loadingcontainer">
            <span>Loading</span>
            <img src="@/assets/img/loading.svg" alt="Loading" />
        </div>
    </div>
</template>
<style scoped>
.loadingpage {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #0f0f0f60;
    backdrop-filter: blur(5px);
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    fill: #fff;
}
.loadingcontainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
}
.loadingcontainer img {
    width: 60px;
    animation: spinner 3s ease-in-out infinite;
}
@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    60% {
        transform: rotate(280deg);
    }
    70% {
        transform: rotate(300deg);
    }
    80% {
        transform: rotate(320deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loadingcontainer span {
    font-size: clamp(20px, 1vw, 60px);
}
</style>
