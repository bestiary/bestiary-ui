<script setup lang="ts">
import { computed } from 'vue';
import type { BreadcrumbProps, BreadcrumbItem } from './breadcrumb.props';

defineOptions({ name: "BBreadcrumb" });

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    model: () => [],
    separator: "/"
});

/**
 * Component slots documentation
 */
defineSlots<{
    /** Custom template for each item */
    item?: (props: { item: BreadcrumbItem, label: string | undefined }) => any;
    /** Custom template for the separator */
    separator?: (props: {}) => any;
}>();

const visibleItems = computed(() => props.model.filter(item => item.visible !== false));

const isTagLink = (item: BreadcrumbItem) => {
    return !!(item.to && !item.disabled);
};
</script>

<template>
    <nav class="b-breadcrumb" aria-label="Breadcrumb">
        <ol class="b-breadcrumb__list">

            <!-- Home Item -->
            <li v-if="home" class="b-breadcrumb__item b-breadcrumb__item--home">
                <slot name="item" :item="home" :label="home.label">
                    <component
                        :is="isTagLink(home) ? 'router-link' : 'a'"
                        :href="!isTagLink(home) ? (home.url || '#') : undefined"
                        :to="isTagLink(home) ? home.to : undefined"
                        class="b-breadcrumb__link"
                        :target="home.target"
                        :aria-disabled="home.disabled"
                    >
                        <component :is="home.icon" v-if="home.icon" class="b-breadcrumb__icon" />
                        <span v-if="home.label" class="b-breadcrumb__label">{{ home.label }}</span>
                    </component>
                </slot>
            </li>

            <!-- Separator after home -->
            <li v-if="home && visibleItems.length > 0" class="b-breadcrumb__separator" aria-hidden="true">
                <slot name="separator">{{ separator }}</slot>
            </li>

            <!-- Model Items -->
            <template v-for="(item, index) in visibleItems" :key="index">
                <li class="b-breadcrumb__item">
                    <slot name="item" :item="item" :label="item.label">
                        <component
                            :is="isTagLink(item) ? 'router-link' : 'a'"
                            :href="!isTagLink(item) ? (item.url || '#') : undefined"
                            :to="isTagLink(item) ? item.to : undefined"
                            class="b-breadcrumb__link"
                            :target="item.target"
                            :aria-disabled="item.disabled"
                        >
                            <component :is="item.icon" v-if="item.icon" class="b-breadcrumb__icon" />
                            <span v-if="item.label" class="b-breadcrumb__label">{{ item.label }}</span>
                        </component>
                    </slot>
                </li>

                <!-- Separator (all except last) -->
                <li v-if="index !== visibleItems.length - 1" class="b-breadcrumb__separator" aria-hidden="true">
                    <slot name="separator">{{ separator }}</slot>
                </li>
            </template>

        </ol>
    </nav>
</template>