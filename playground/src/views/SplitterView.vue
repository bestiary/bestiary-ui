<template>
    <div class="view-content">
        <h2>Badges</h2>

        <div class="section">
            <h4>Horizontal</h4>
            <div>
                <Splitter style="height: 300px" :gutterSize="8">
                    <SplitterPanel> Panel 1 </SplitterPanel>
                    <SplitterPanel> Panel 2 </SplitterPanel>
                </Splitter>
            </div>
        </div>

        <div class="section">
            <h4>Vertical</h4>
            <div>
                <Splitter style="height: 300px" layout="vertical">
                    <SplitterPanel> Panel 1 </SplitterPanel>
                    <SplitterPanel> Panel 2 </SplitterPanel>
                </Splitter>
            </div>
        </div>

        <div class="section">
            <h4>Size</h4>
            <div>
                <Splitter style="height: 300px">
                    <SplitterPanel :size="30" :minSize="10"> Panel 1 </SplitterPanel>
                    <SplitterPanel :size="30"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="60"> Panel 3 </SplitterPanel>
                </Splitter>
            </div>
        </div>

        <div class="section">
            <h4>Nested</h4>
            <div>
                <Splitter style="height: 300px">
                    <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
                    <SplitterPanel :size="80">
                        <Splitter layout="vertical">
                            <SplitterPanel class="flex items-center justify-center" :size="15"> Panel 2 </SplitterPanel>
                            <SplitterPanel :size="85">
                                <Splitter>
                                    <SplitterPanel class="flex items-center justify-center" :size="20"> Panel 3 </SplitterPanel>
                                    <SplitterPanel class="flex items-center justify-center" :size="80"> Panel 4 </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Splitter from "@bestiary-ui/components/layout/splitter";
import SplitterPanel from "@bestiary-ui/components/layout/splitterpanel";
</script>
