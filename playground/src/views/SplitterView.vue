<script setup lang="ts">
</script>
<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Horizontal</h4>
            <div class="section">
                <BSplitter style="height: 300px" :gutterSize="8">
                    <BSplitterPanel class="flex items-center justify-center"> Panel 1</BSplitterPanel>
                    <BSplitterPanel class="flex items-center justify-center"> Panel 2</BSplitterPanel>
                </BSplitter>
            </div>
        </section>


        <section class="mt-8">
            <h4 class="mb-3">Vertical</h4>
            <div class="section">
                <BSplitter style="height: 300px" layout="vertical">
                    <BSplitterPanel class="flex items-center justify-center"> Panel 1</BSplitterPanel>
                    <BSplitterPanel class="flex items-center justify-center"> Panel 2</BSplitterPanel>
                </BSplitter>
            </div>
        </section>


        <section class="mt-8">
            <h4 class="mb-3">Size</h4>
            <div class="section">
                <BSplitter style="height: 300px">
                    <BSplitterPanel class="flex items-center justify-center" :size="30" :minSize="10"> Panel 1
                    </BSplitterPanel>
                    <BSplitterPanel class="flex items-center justify-center" :size="30"> Panel 2</BSplitterPanel>
                    <BSplitterPanel class="flex items-center justify-center" :size="60"> Panel 3</BSplitterPanel>
                </BSplitter>
            </div>
        </section>


        <section>
            <h4 class="mb-3">Nested</h4>
            <div class="section">
                <BSplitter style="height: 300px">
                    <BSplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1
                    </BSplitterPanel>
                    <BSplitterPanel :size="80">
                        <BSplitter layout="vertical">
                            <BSplitterPanel class="flex items-center justify-center" :size="15"> Panel 2
                            </BSplitterPanel>
                            <BSplitterPanel :size="85">
                                <BSplitter>
                                    <BSplitterPanel class="flex items-center justify-center" :size="20"> Panel 3
                                    </BSplitterPanel>
                                    <BSplitterPanel class="flex items-center justify-center" :size="80"> Panel 4
                                    </BSplitterPanel>
                                </BSplitter>
                            </BSplitterPanel>
                        </BSplitter>
                    </BSplitterPanel>
                </BSplitter>
            </div>
        </section>
    </div>
</template>
