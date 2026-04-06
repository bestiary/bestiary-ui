<script setup lang="ts">
import { BSkeleton } from "@bestiary-ui/components";
</script>

<template>
    <div class="view-content">
        <div class="section b-flex b-flex-wrap">
            <div class="b-w-full b-p-4">
                <h5>Rectangle</h5>
                <BSkeleton class="mb-2"></BSkeleton>
                <BSkeleton width="10rem" class="mb-2"></BSkeleton>
                <BSkeleton width="5rem" class="mb-2"></BSkeleton>
                <BSkeleton height="2rem" class="mb-2"></BSkeleton>
                <BSkeleton width="10rem" height="4rem"></BSkeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5>Rounded</h5>
                <BSkeleton class="mb-2" borderRadius="16px"></BSkeleton>
                <BSkeleton width="10rem" class="mb-2" borderRadius="16px"></BSkeleton>
                <BSkeleton width="5rem" borderRadius="16px" class="mb-2"></BSkeleton>
                <BSkeleton height="2rem" class="mb-2" borderRadius="16px"></BSkeleton>
                <BSkeleton width="10rem" height="4rem" borderRadius="16px"></BSkeleton>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Square</h5>
                <div class="flex items-end">
                    <BSkeleton size="2rem" class="mr-2"></BSkeleton>
                    <BSkeleton size="3rem" class="mr-2"></BSkeleton>
                    <BSkeleton size="4rem" class="mr-2"></BSkeleton>
                    <BSkeleton size="5rem"></BSkeleton>
                </div>
            </div>
            <div class="w-full xl:w-6/12 p-4">
                <h5 class="mt-4">Circle</h5>
                <div class="flex items-end">
                    <BSkeleton shape="circle" size="2rem" class="mr-2"></BSkeleton>
                    <BSkeleton shape="circle" size="3rem" class="mr-2"></BSkeleton>
                    <BSkeleton shape="circle" size="4rem" class="mr-2"></BSkeleton>
                    <BSkeleton shape="circle" size="5rem"></BSkeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>