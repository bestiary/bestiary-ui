<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <BCard style="width: 30rem;">
                <template #title>Simple Card</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
                        quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
            </BCard>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Advanced</h4>
            <BCard style="width: 25rem; overflow: hidden">
                <template #header>
                    <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"/>
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
                        quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <BButton label="Cancel" severity="secondary" variant="outline" />
                        <BButton label="Save" class="w-full" />
                    </div>
                </template>
            </BCard>
        </section>

    </div>
</template>
