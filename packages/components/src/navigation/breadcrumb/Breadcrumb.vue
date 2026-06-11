<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import type { BreadcrumbProps, BreadcrumbItem } from './breadcrumb.props';

defineOptions({ name: 'BBreadcrumb' });

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    model: () => [],
    separator: '/'
});

defineSlots<{
    /** Custom template for each item */
    item?: (props: { item: BreadcrumbItem, label: string | undefined, isLast: boolean }) => any;
    /** Custom template for the separator */
    separator?: (props: Record<string, never>) => any;
}>();

const visibleItems = computed(() => props.model.filter(item => item.visible !== false));

const isStringIcon = (icon?: string | Component) => typeof icon === 'string';

// Determines the correct HTML/Vue tag
const getItemTag = (item: BreadcrumbItem) => {
    if (item.disabled) return 'span';
    if (item.to) return 'router-link';
    if (item.url) return 'a';
    return 'span'; // Fallback for text-only items
};

// Generates dynamic attributes based on the item state
const getItemProps = (item: BreadcrumbItem, isLast: boolean) => {
    const attrs: Record<string, any> = {};

    if (item.disabled) {
        attrs['aria-disabled'] = 'true';
    } else {
        if (item.to) attrs.to = item.to;
        else if (item.url) attrs.href = item.url;
    }

    if (item.target) attrs.target = item.target;
    if (isLast && !item.disabled && (item.to || item.url)) {
        attrs['aria-current'] = 'page';
    }

    return attrs;
};
</script>

<template>
    <nav class="b-breadcrumb" aria-label="Breadcrumb">
        <ol class="b-breadcrumb__list">

            <!-- Home Item -->
            <li v-if="home" :class="['b-breadcrumb__item b-breadcrumb__item--home', home.class]">
                <slot name="item" :item="home" :label="home.label" :isLast="visibleItems.length === 0">
                    <component
                        :is="getItemTag(home)"
                        v-bind="getItemProps(home, visibleItems.length === 0)"
                        class="b-breadcrumb__link"
                    >
                        <span v-if="isStringIcon(home.icon)" :class="['b-breadcrumb__icon', home.icon]" aria-hidden="true"></span>
                        <component v-else-if="home.icon" :is="home.icon" class="b-breadcrumb__icon" aria-hidden="true" />

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
                <li :class="['b-breadcrumb__item', item.class]">
                    <slot name="item" :item="item" :label="item.label" :isLast="index === visibleItems.length - 1">
                        <component
                            :is="getItemTag(item)"
                            v-bind="getItemProps(item, index === visibleItems.length - 1)"
                            class="b-breadcrumb__link"
                        >
                            <span v-if="isStringIcon(item.icon)" :class="['b-breadcrumb__icon', item.icon]" aria-hidden="true"></span>
                            <component v-else-if="item.icon" :is="item.icon" class="b-breadcrumb__icon" aria-hidden="true" />

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