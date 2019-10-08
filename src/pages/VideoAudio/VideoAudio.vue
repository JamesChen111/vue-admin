<template>
<div id="video-audio">
<div class="video">
<video controls width="350" height="240"> 
    <source src="@/assets/media/flower.mp4" type="video/mp4">
</video>
<div class="description">视频简介</div>
</div>

<!-- 音频 -->
<div class="audio">
    <audio controls height="300" width="350">
        <source src="@/assets/media/horse.ogg" type="audio/ogg">
    </audio>
    <span>音频简介</span>
</div>
</div>
</template>

<script>
import './index.scss'
export default {
    
}
</script>