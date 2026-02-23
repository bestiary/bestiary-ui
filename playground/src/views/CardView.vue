<template>
    <div class="view-content">
        <div>
            <h2>Basic</h2>
            <BCard>
                <template #title>Simple Card</template>
                <template #content>
                    <p class="b-m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
            </BCard>
        </div>

        <div class="b-mt-6">
            <h2>Advanced</h2>
            <BCard style="width: 25rem; overflow: hidden">
                <template #header>
                    <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                    <p class="b-m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="b-flex b-gap-4 b-mt-1">
                        <BButton label="Cancel" severity="secondary" variant="outline" class="b-w-full" />
                        <BButton label="Save" class="b-w-full" />
                    </div>
                </template>
            </BCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BCard } from "@bestiary-ui/components";
import { BButton, BBadge } from "@bestiary-ui/components";
import {InformationCircleSolid, UserSolid, CogSolid, UsersSolid, ArrowTrendingUpSolid} from "@bestiary-ui/icons";
</script>
