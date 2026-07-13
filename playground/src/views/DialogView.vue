<script setup lang="ts">

</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Avatar Label</h4>
            <div class="section flex gap-6 flex-wrap justify-center">
                <div class="flex-auto">
                    <h5 class="mb-2 text-sm">Sizes</h5>
                    <div class="flex items-center gap-3">
                        <BAvatar label="P" size="xlarge" />
                        <BAvatar label="V" size="large" style="background-color: #ece9fc; color: #2a1261" />
                        <BAvatar label="P" style="background-color: #ece9fc; color: #772835" />
                        <BAvatar label="U" size="small" style="background-color: #dee9fc; color: #1a2551" />
                    </div>
                </div>

                <div class="flex-auto">
                    <h5 class="mb-2 text-sm">Shapes (Circle)</h5>
                    <div class="flex items-center gap-3">
                        <BAvatar label="P" size="xlarge" shape="circle" />
                        <BAvatar label="V" size="large" shape="circle" />
                        <BAvatar label="P" shape="circle" />
                        <BAvatar label="U" size="small" shape="circle" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>