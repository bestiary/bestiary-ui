<script setup lang="ts">

import { BAvatar, BOverlayBadge, BAvatarGroup } from "@bestiary-ui/components";
import { UserOutline } from "@bestiary-ui/icons";
</script>

<template>
    <div class="view-content">
        <div>
            <h2>Label</h2>
            <div class="section b-flex">
                <div class="b-flex-auto">
                    <h5>Label</h5>
                    <BAvatar label="P" class="b-mr-2" size="xlarge" />
                    <BAvatar label="V" class="b-mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                    <BAvatar label="P" class="b-mr-2" style="background-color: #ece9fc; color: #772835" />
                    <BAvatar label="U" class="b-mr-2" size="small" style="background-color: #dee9fc; color: #1a2551" />
                </div>

                <div class="b-flex-auto">
                    <h5>Circle</h5>
                    <BAvatar label="P" class="b-mr-2" size="xlarge" shape="circle" />
                    <BAvatar label="V" class="b-mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                    <BAvatar label="P" class="b-mr-2" style="background-color: #ece9fc; color: #772835" shape="circle"/>
                    <BAvatar label="U" class="b-mr-2" size="small" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
                </div>

                <div class="b-flex-auto">
                    <h5>Badge</h5>
                    <BOverlayBadge value="4" severity="danger" class="b-inline-flex">
                        <BAvatar label="U" size="xlarge" />
                    </BOverlayBadge>
                </div>
            </div>
        </div>

        <div class="b-mt-8">
            <h2>Icon</h2>
            <div class="section b-flex">
                <div class="b-flex-auto">
                    <h5>Icon</h5>
                    <BAvatar :icon="UserOutline" class="b-mr-2" size="xlarge" />
                    <BAvatar :icon="UserOutline" class="b-mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
                    <BAvatar :icon="UserOutline" class="b-mr-2" style="background-color: #ece9fc; color: #772835"/>
                    <BAvatar :icon="UserOutline" size="small" style="background-color: #dee9fc; color: #1a2551" />
                </div>

                <div class="b-flex-auto">
                    <h5>Circle</h5>
                    <BAvatar :icon="UserOutline" class="b-mr-2" size="xlarge" shape="circle" />
                    <BAvatar :icon="UserOutline" class="b-mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                    <BAvatar :icon="UserOutline" class="b-mr-2" style="background-color: #ece9fc; color: #772835" shape="circle"/>
                    <BAvatar :icon="UserOutline"  size="small" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
                </div>

                <div class="b-flex-auto">
                    <h5>Badge</h5>
                    <BOverlayBadge value="4" severity="danger" class="b-inline-flex">
                        <BAvatar :icon="UserOutline" size="xlarge" />
                    </BOverlayBadge>
                </div>
            </div>
        </div>

        <div class="b-mt-8">
            <h2>Icon</h2>
            <div class="section b-flex">
                <div class="b-flex-auto">
                    <h5>Image</h5>
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="b-mr-2" size="xlarge" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="b-mr-2" size="large" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="b-mr-2" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" size="small" />
                </div>

                <div class="b-flex-auto">
                    <h5>Badge</h5>
                    <BOverlayBadge value="4" severity="danger" class="inline-flex">
                        <BAvatar class="b-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
                    </BOverlayBadge>
                </div>

                <div class="b-flex-auto">
                    <h5>Gravatar</h5>
                    <BAvatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="b-flex b-items-center b-justify-center b-mr-2" size="xlarge" />
                </div>
            </div>
        </div>

        <div class="b-mt-8">
            <h2>AvatarGroup</h2>
            <div class="section b-flex">
                <BAvatarGroup>
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                    <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
                    <BAvatar label="+2" shape="circle" />
                </BAvatarGroup>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>