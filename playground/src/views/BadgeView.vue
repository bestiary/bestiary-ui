<template>
    <div class="view-content">
        <h2>Badges</h2>

        <div class="section">
            <h4>Basic</h4>
            <div class="b-flex b-gap-1">
                <BBadge value="2" rounded/>
                <BBadge>10</BBadge>
            </div>
        </div>

        <div class="section">
            <h4>Severity</h4>
            <div class="b-flex b-gap-1">
                <BBadge value="2"></BBadge>
                <BBadge value="6" severity="secondary"></BBadge>
                <BBadge value="8" severity="success"></BBadge>
                <BBadge value="4" severity="info"></BBadge>
                <BBadge value="9" severity="warn"></BBadge>
                <BBadge value="3" severity="danger"></BBadge>
                <BBadge value="5" severity="contrast"></BBadge>
            </div>
        </div>

        <div class="section">
            <h4>Size</h4>
            <div class="b-flex b-gap-1">
                <BBadge value="8" size="xlarge" severity="success"></BBadge>
                <BBadge value="6" size="large" severity="warn"></BBadge>
                <BBadge value="4" severity="info"></BBadge>
                <BBadge value="2" size="small"></BBadge>
            </div>
        </div>

        <div class="section">
            <h4>Overlay</h4>
            <div class="b-flex b-gap-4">
                <BOverlayBadge value="2">
                    <BellSolid size="36" />
                </BOverlayBadge>
                <BOverlayBadge value="4" severity="danger">
                    <EnvelopeSolid size="36" />
                </BOverlayBadge>
                <BOverlayBadge severity="danger">
                    <UserSolid size="36" />
                </BOverlayBadge>
            </div>
        </div>

        <div class="section">
            <h4>Button</h4>
            <div class="b-flex b-gap-4">
                <BButton label="Notifications" :icon="BellSolid" badge="2" badgeSeverity="warn"/>
                <BButton label="Inbox" :icon="EnvelopeSolid" badge="2" badgeSeverity="contrast" variant="outlined" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BBadge } from "@bestiary-ui/components";
import { BOverlayBadge } from "@bestiary-ui/components";
import { BButton } from "@bestiary-ui/components";
import { BellSolid, EnvelopeSolid, UserSolid } from "@bestiary-ui/icons";
</script>
