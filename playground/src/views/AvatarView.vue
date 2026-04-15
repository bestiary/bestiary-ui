<script setup lang="ts">
import { UserOutline } from "@bestiary-ui/icons";
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

        <section class="mt-8">
            <h4 class="mb-3">Avatar Icon</h4>
            <div class="section flex gap-6">
                <div class="flex-auto">
                    <h5 class="mb-2 text-sm">With Icons</h5>
                    <div class="flex items-center gap-3">
                        <BAvatar :icon="UserOutline" size="xlarge" />
                        <BAvatar :icon="UserOutline" size="large" />
                        <BAvatar :icon="UserOutline" />
                    </div>
                </div>

                <div class="flex-auto">
                    <h5 class="mb-2 text-sm">With Badges</h5>
                    <BOverlayBadge value="4" severity="danger">
                        <BAvatar :icon="UserOutline" size="xlarge" />
                    </BOverlayBadge>
                </div>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Avatar Group</h4>
            <div class="section flex gap-6">
                <BAvatarGroup class="flex-auto">
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                    <BAvatar label="+2" shape="circle" />
                </BAvatarGroup>

                <BAvatarGroup class="flex-auto">
                    <BAvatar label="A"/>
                    <BAvatar label="B"/>
                    <BAvatar label="C"/>
                    <BAvatar label="+2" />
                </BAvatarGroup>
            </div>
        </section>
    </div>
</template>