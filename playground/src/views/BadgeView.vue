<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section flex justify-center gap-2">
                <BBadge value="2" rounded/>
                <BBadge>10</BBadge>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Severity</h4>
            <div class="section flex justify-center gap-2">
                <BBadge value="2"></BBadge>
                <BBadge value="6" severity="secondary"></BBadge>
                <BBadge value="8" severity="success"></BBadge>
                <BBadge value="4" severity="info"></BBadge>
                <BBadge value="9" severity="warn"></BBadge>
                <BBadge value="3" severity="danger"></BBadge>
                <BBadge value="5" severity="contrast"></BBadge>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Size</h4>
            <div class="section flex justify-center items-end gap-2">
                <BBadge value="2" size="small"></BBadge>
                <BBadge value="4" severity="info"></BBadge>
                <BBadge value="6" size="large" severity="warn"></BBadge>
                <BBadge value="8" size="xlarge" severity="success"></BBadge>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Overlay</h4>
            <div class="section flex justify-center gap-4">
                <BOverlayBadge value="2">
                    <BellSolid size="36"/>
                </BOverlayBadge>
                <BOverlayBadge value="4" severity="danger">
                    <EnvelopeSolid size="36"/>
                </BOverlayBadge>
                <BOverlayBadge severity="danger">
                    <UserSolid size="36"/>
                </BOverlayBadge>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Button</h4>
            <div class="section flex justify-center gap-2">
                <BButton label="Notifications" :icon="BellSolid" badge="2" badgeSeverity="warn"/>
                <BButton label="Inbox" :icon="EnvelopeSolid" badge="2" badgeSeverity="contrast" variant="outline"/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import {BellSolid, EnvelopeSolid, UserSolid} from "@bestiary-ui/icons";
</script>
