<script setup>
import {ref} from 'vue';
import {MinusSolid, PlusSolid} from "@bestiary-ui/icons";

const tabs = ref([
    {title: 'Title 1', content: 'Content 1', value: '0'},
    {title: 'Title 2', content: 'Content 2', value: '1'},
    {title: 'Title 3', content: 'Content 3', value: '2'}
]);

const active = ref('0');
</script>

<template>
    <div class="view-content">
        <section>
            <h4 class="mb-3">Basic</h4>
            <div class="section">
                <BAccordion value="0">
                    <BAccordionPanel value="0">
                        <BAccordionHeader>Header I</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="1">
                        <BAccordionHeader>Header II</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                                sed quia non numquam eius modi.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="2">
                        <BAccordionHeader>Header III</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa
                                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                </BAccordion>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Dynamic</h4>
            <div class="section">
                <BAccordion value="0">
                    <BAccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                        <BAccordionHeader>{{ tab.title }}</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">{{ tab.content }}</p>
                        </BAccordionContent>
                    </BAccordionPanel>
                </BAccordion>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Multiple</h4>
            <div class="section">
                <BAccordion :value="['0']" multiple>
                    <BAccordionPanel value="0">
                        <BAccordionHeader>Header I</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="1">
                        <BAccordionHeader>Header II</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                                sed quia non numquam eius modi.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="2">
                        <BAccordionHeader>Header III</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa
                                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                </BAccordion>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Disabled</h4>
            <div class="section">
                <BAccordion :value="['0']" multiple>
                    <BAccordionPanel value="0">
                        <BAccordionHeader>Header I</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="1">
                        <BAccordionHeader>Header II</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                                sed quia non numquam eius modi.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="2">
                        <BAccordionHeader>Header III</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa
                                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="3" disabled>
                        <BAccordionHeader>Header IV</BAccordionHeader>
                    </BAccordionPanel>
                </BAccordion>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Controlled</h4>
            <div class="section">
                <div class="flex mb-4 gap-2 justify-end">
                    <BButton @click="active = '0'" rounded label="1" :variant="active !== '0' ? 'outline' : ''"/>
                    <BButton @click="active = '1'" rounded label="2" :variant="active !== '1' ? 'outline' : ''"/>
                    <BButton @click="active = '2'" rounded label="3" :variant="active !== '2' ? 'outline' : ''"/>
                </div>

                <BAccordion v-model:value="active">
                    <BAccordionPanel value="0">
                        <BAccordionHeader>Header I</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="1">
                        <BAccordionHeader>Header II</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                                sed quia non numquam eius modi.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="2">
                        <BAccordionHeader>Header III</BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa
                                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                </BAccordion>
            </div>
        </section>

        <section class="mt-8">
            <h4 class="mb-3">Template</h4>
            <div class="section">
                <BAccordion value="0" :expandIcon="PlusSolid" :collapseIcon="MinusSolid">
                    <BAccordionPanel value="0">
                        <BAccordionHeader>
                            <span class="flex items-center gap-2 w-full">
                                <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
                                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                                <BBadge value="3" class="ml-auto mr-2"/>
                            </span>
                        </BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="1">
                        <BAccordionHeader>
                            <span class="flex items-center gap-2 w-full">
                                <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle"/>
                                <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                                <BBadge value="4" class="ml-auto mr-2"/>
                            </span>
                        </BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                                sed quia non numquam eius modi.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                    <BAccordionPanel value="2">
                        <BAccordionHeader>
                            <span class="flex items-center gap-2 w-full">
                                <BAvatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png"
                                        shape="circle"/>
                                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                                <BBadge value="2" class="ml-auto mr-2"/>
                            </span>
                        </BAccordionHeader>
                        <BAccordionContent>
                            <p class="m-0">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa
                                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil impedit quo minus.
                            </p>
                        </BAccordionContent>
                    </BAccordionPanel>
                </BAccordion>
            </div>
        </section>
    </div>
</template>