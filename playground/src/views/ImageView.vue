<script setup lang="ts">

import MagnifyingGlassOutline from "@bestiary-ui/icons/src/MagnifyingGlassOutline.ts";
import MagnifyingGlassSolid from "@bestiary-ui/icons/src/MagnifyingGlassSolid.ts";
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center">
                <BImage src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" />
            </div>
        </section>

        <section>
            <h4 class="mb-3">Preview</h4>
            <div class="section flex justify-center">
                <BImage src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
            </div>
        </section>

        <section>
            <h4 class="mb-3">Template</h4>
            <div class="section flex justify-center">
                <BImage alt="Image" preview>
                    <template #previewicon>
                        <MagnifyingGlassSolid />
                    </template>
                    <template #image>
                        <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="image" width="250" />
                    </template>
                    <template #preview="slotProps">
                        <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
                    </template>
                </BImage>
            </div>
        </section>
    </div>
</template>