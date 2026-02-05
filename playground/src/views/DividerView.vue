<template>
    <div class="view-content">
        <h2>Divider</h2>

        <div class="section">
            <h3>Default</h3>
            <div class="b-text-muted b-bg-surface b-p-4">
                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <Divider/>

                <p class="b-m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </div>
        </div>

        <div class="section">
            <h3>Type</h3>
            <div class="b-text-muted b-bg-surface b-p-4">
                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita explicabo fugiat
                    inventore ipsam itaque magnam, minus mollitia necessitatibus, odio praesentium provident quasi quo
                    repudiandae rerum tempora tempore temporibus voluptatum?
                </p>

                <Divider type="solid"/>

                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <Divider type="dotted"/>

                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <Divider type="dashed"/>

                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>
            </div>
        </div>

        <div class="section">
            <h3>Layout</h3>
            <div class="b-text-muted b-bg-surface b-p-4 b-flex">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <Divider layout="vertical"/>

                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>

                <Divider layout="vertical"/>

                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus.
                </p>
            </div>
        </div>

        <div class="section">
            <h3>Align</h3>
            <div class="b-text-muted b-bg-surface b-p-4">
                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita explicabo fugiat
                    inventore ipsam itaque magnam, minus mollitia necessitatibus, odio praesentium provident quasi quo
                    repudiandae rerum tempora tempore temporibus voluptatum?
                </p>

                <Divider type="solid" align="left">
                    <b>Left</b>
                </Divider>

                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <Divider type="dotted" align="center">
                    <b>Center</b>
                </Divider>

                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>

                <Divider type="dashed" align="right">
                    <b>Right</b>
                </Divider>

                <p class="b-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur delectus earum illum
                    magnam perferendis quidem repudiandae tempore. Ab aliquid culpa dolores explicabo laudantium libero
                    nihil nulla porro similique vero.
                </p>
            </div>

            <div class="b-text-muted b-bg-surface b-p-4 b-flex">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>

                <Divider layout="vertical" align="top">
                    <b>Top</b>
                </Divider>

                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>

                <Divider layout="vertical" align="center">
                    <b>Center</b>
                </Divider>

                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus.
                </p>

                <Divider layout="vertical" align="bottom">
                    <b>Bottom</b>
                </Divider>

                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Divider from '@bestiary-ui/components/layout/divider'
</script>
