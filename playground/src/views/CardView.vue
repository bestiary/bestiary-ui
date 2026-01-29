<template>
    <div class="view-content">
        <h2>Cards</h2>

        <div class="section">
            <div class="row flex-wrap">
                <Card title="Simple Card">
                    <p class="b-m-0">Lorem ipsum...</p>
                </Card>
                <Card
                    title="Статистика проекту"
                    subtitle="Оновлено 5 хвилин тому"
                >
                    <p class="b-m-0">
                        Всі системи працюють в штатному режимі. Помилок не виявлено.
                    </p>
                </Card>
                <Card type="info" size="sm" shadow="never">
                    <div class="b-flex b-items-center b-gap-3">
                        <InformationCircleIcon class="b-text-primary" />
                        <span class="b-text-sm">Ваш підписка закінчується через 3 дні.</span>
                    </div>
                </Card>

                <Card style="width: 300px;" shadow="always">
                    <div class="b-flex b-justify-between b-items-start b-mb-4">

                        <div class="b-flex b-items-center b-justify-center b-rounded-lg b-bg-primary b-text-white b-p-3" style="width: 56px; height: 56px;">
                            <UsersIcon size="lg" />
                        </div>

                        <BBadge type="success" shape="circle" size="large">
                            <ArrowTrendingUpIcon size="sm" />
                            +12.5%
                        </BBadge>
                    </div>

                    <div class="b-flex b-flex-col">
                        <span class="b-text-muted b-font-medium b-mb-1">Total Students</span>
                        <span class="b-text-3xl b-font-bold b-text-main">1,284</span>
                    </div>
                </Card>
            </div>
        </div>

        <div class="section">
            <div class="row">
                <Card type="info" size="sm" shadow="hover" style="width: 320px">
                    <template #title>Board Meeting Agenda</template>
                    <template #content>1. Budget review for Q1. 2. New teacher hiring process. 3. Campus renovation update.</template>
                    <template #footer>Oct 24, 2023</template>
                </Card>
            </div>
        </div>

        <div class="section">
            <div class="row">
                <Card style="width: 25rem;">
                    <template #header>
                        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
                    </template>

                    <template #title>Advanced Card</template>
                    <template #subtitle>Card subtitle</template>

                    <template #content>
                        <p class="b-m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </template>

                    <template #footer>
                        <div class="b-flex b-gap-4 b-mt-1">
                            <Button type="secondary" size="sm" class="b-w-full">Cancel</Button>
                            <Button class="b-w-full" size="sm">Save</Button>
                        </div>
                    </template>
                </Card>

                <Card style="width: 320px;" shadow="hover">
                    <!-- Картинка без паддінгів -->
                    <template #header>
                        <img src="https://picsum.photos/400/250" alt="Product Image" />
                    </template>

                    <template #title>Raven Wireless Headphones</template>
                    <template #subtitle>Категорія: Електроніка</template>

                    <p class="b-text-sm b-text-muted">
                        Професійні навушники з активним шумопоглинанням та автономністю до 40 годин.
                    </p>

                    <template #footer>
                        <div class="b-flex b-justify-between b-items-center">
                            <span class="b-font-bold b-text-lg">$199.00</span>
                            <Button size="sm">Купити</Button>
                        </div>
                    </template>
                </Card>
            </div>
        </div>

        <div class="section">
            <div class="row">
                <Card header="Редагувати профіль" shadow="always">
                    <div class="b-flex b-flex-col b-gap-4">
                        <div class="b-flex b-flex-col b-gap-1">
                            <label class="b-text-xs b-font-bold b-uppercase b-text-muted">Email</label>
                            <input class="b-p-2 b-border b-rounded-md" value="user@raven.com" />
                        </div>

                        <div class="b-flex b-flex-col b-gap-1">
                            <label class="b-text-xs b-font-bold b-uppercase b-text-muted">Пароль</label>
                            <input type="password" class="b-p-2 b-border b-rounded-md" />
                        </div>
                    </div>

                    <template #footer>
                        <div class="b-flex b-justify-end b-gap-2">
                            <Button type="secondary">Скасувати</Button>
                            <Button>Зберегти зміни</Button>
                        </div>
                    </template>
                </Card>

                <Card :body-style="{ display: 'flex', gap: '20px', alignItems: 'center' }">
                    <div class="b-w-16 b-h-16 b-bg-surface b-border b-rounded-full b-flex b-items-center b-justify-center">
                        <UserIcon size="lg" />
                    </div>

                    <div class="b-flex-1">
                        <div class="b-font-bold">Олександр Равенко</div>
                        <div class="b-text-sm b-text-muted">Senior UI/UX Designer</div>
                    </div>

                    <Button shape="circle" type="secondary">
                        <CogIcon />
                    </Button>
                </Card>

                <div class="b-grid b-grid-cols-3 b-gap-4">
                    <Card title="Користувачі" subtitle="Активні">
                        <div class="b-text-2xl b-font-bold">1,240</div>
                    </Card>

                    <Card title="Продажі" subtitle="За місяць">
                        <div class="b-text-2xl b-font-bold text-success">$45,200</div>
                    </Card>

                    <Card title="Помилки" subtitle="За 24 години">
                        <div class="b-text-2xl b-font-bold text-error">2</div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@bestiary-ui/components/panel/card'
import Button from "@bestiary-ui/components/button/button";
import {InformationCircleIcon} from "@bestiary-ui/icons/24/solid"
import {UserIcon} from "@bestiary-ui/icons/24/solid"
import {CogIcon} from "@bestiary-ui/icons/24/solid"
import {UsersIcon} from "@bestiary-ui/icons/24/solid";
import {ArrowTrendingUpIcon} from "@bestiary-ui/icons/24/solid";
import BBadge from "@bestiary-ui/components/misc/badge";
</script>

<style scoped>
.flex-wrap {
    flex-wrap: wrap;
}
</style>
