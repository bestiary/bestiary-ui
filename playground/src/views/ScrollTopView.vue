<script setup lang="ts">
</script>
<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex flex-col items-center" style="height: 1000px">
                <p>Scroll down the page to display the ScrollTop component.</p>
                <BScrollTop target="window" />
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Element</h4>
            <div class="section relative overflow-auto" style="height: 400px;">
                <div style="height: 2000px; padding: 20px;">
                    <p>Scroll down this RED box...</p>
                </div>
                <BScrollTop target="parent" :threshold="50" />
            </div>
        </section>
    </div>
</template>